/**
 * Splits a path into segments, filters out empty segments, and trims each segment.
 * Original function name: $$n2
 * @param path - The path string to split.
 * @returns An array of trimmed path segments.
 */
export function splitPath(path: string): string[] {
  return path.split("/").filter(segment => !!segment).map(segment => segment.trim());
}

/**
 * Gets the directory name by removing the last segment from the path.
 * Original function name: $$r0
 * @param path - The path string.
 * @returns The directory path without the last segment.
 */
export function getDirname(path: string): string {
  const segments = splitPath(path);
  segments.pop();
  return segments.join("/");
}

/**
 * Gets the basename (last segment) of the path.
 * Original function name: $$a1
 * @param path - The path string.
 * @returns The last segment of the path, or an empty string if no segments.
 */
export function getBasename(path: string): string {
  const segments = splitPath(path);
  return segments.length ? segments[segments.length - 1] : "";
}

/**
 * Normalizes the path by replacing multiple slashes with a single slash, trimming segments, and joining.
 * Original function name: $$s3
 * @param path - The path string to normalize.
 * @returns The normalized path string.
 */
export function normalizePath(path: string): string {
  return path.replace(/(\/)\1+/g, "$1").split("/").map(segment => segment.trim()).join("/");
}

// Refactored exports to use the new function names
export const In = getDirname;
export const kH = getBasename;
export const ke = splitPath;
export const rh = normalizePath;
