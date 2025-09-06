/**
 * Retrieves the UI variant name.
 * @originalName $$n0
 */
export const uiVariantName = "ui3";

/**
 * Gets the entrypoint variant from the meta tag, or returns "unknown" if not found.
 * @originalName $$r1
 */
export const entrypointVariant =
  document.querySelector('meta[name="entrypoint_variant"]')?.getAttribute("content") ?? "unknown";
export const V = uiVariantName
export const p = entrypointVariant
