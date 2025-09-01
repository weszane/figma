// Original file: /Users/allen/sigma-main/src/905/634134.ts

/**
 * Converts a value to its string representation based on type.
 * @param value - The value to convert.
 * @returns The string representation.
 */
function valueToString(value: any): string {
  switch (typeof value) {
    case "string":
      return value;
    case "boolean":
      return value ? "true" : "false";
    case "number":
      return isFinite(value) ? value.toString() : "";
    default:
      return "";
  }
}

/**
 * Serializes an object or value to a query string.
 * @param obj - The object or value to serialize.
 * @param separator - The separator for key-value pairs (default: '&').
 * @param equals - The equals sign (default: '=').
 * @param key - Optional key for single value.
 * @returns The serialized query string.
 */
export function serializeQuery(obj: any, separator: string = "&", equals: string = "=", key?: string): string {
  if (!obj || typeof obj !== "object") {
    return key ? encodeURIComponent(valueToString(key)) + equals + encodeURIComponent(valueToString(obj)) : "";
  }
  return Object.keys(obj).map(k => {
    const prefix = encodeURIComponent(valueToString(k)) + equals;
    if (Array.isArray(obj[k])) {
      return obj[k].map(v => prefix + encodeURIComponent(valueToString(v))).join(separator);
    }
    return prefix + encodeURIComponent(valueToString(obj[k]));
  }).join(separator);
}

/**
 * Parses a query string into an object.
 * @param queryString - The query string to parse.
 * @returns The parsed object.
 */
export function parseQuery(queryString: string): Record<string, string> {
  const result: Record<string, string> = {};
  for (const pair of queryString.slice(1).split("&")) {
    let key: string | null = null;
    let value: string | null = null;
    const eqIndex = pair.indexOf("=");
    if (eqIndex !== -1) {
      key = pair.slice(0, eqIndex);
      value = pair.slice(eqIndex + 1);
    } else {
      key = pair;
      value = "";
    }
    if (key !== "") {
      value = value.replace(/\+/g, "%20");
      result[decodeURIComponent(key)] = decodeURIComponent(value);
    }
  }
  return result;
}

/**
 * Parses a query string into an object (alias for parseQuery).
 * @param queryString - The query string to parse.
 * @returns The parsed object.
 */
export function parseQuerySimple(queryString: string): Record<string, string> {
  return parseQuery(queryString);
}

/**
 * Parses a query string and normalizes specific keys by replacing '-' with ':'.
 * @param queryString - The query string to parse.
 * @returns The parsed and normalized object.
 */
export function parseAndNormalizeQuery(queryString: string): Record<string, string> {
  const parsed = parseQuery(queryString);
  if (parsed["node-id"]) {
    parsed["node-id"] = parsed["node-id"].replace("-", ":");
  }
  if (parsed["focus-id"]) {
    parsed["focus-id"] = parsed["focus-id"].replace("-", ":");
  }
  if (parsed["cc-node-id"]) {
    parsed["cc-node-id"] = parsed["cc-node-id"].replace("-", ":");
  }
  if (parsed["var-id"]) {
    parsed["var-id"] = `VariableID:${parsed["var-id"].replace("-", ":")}`;
  }
  return parsed;
}

/**
 * Removes a query parameter from a URL.
 * @param url - The URL string.
 * @param param - The parameter to remove.
 * @returns The updated URL or original if invalid.
 */
export function removeQueryParam(url: string, param: string): string {
  if (!url) return url;
  
  const tryParseUrl = (u: string): URL | null => {
    try {
      return new URL(u);
    } catch {
      return null;
    }
  };
  
  const parsedUrl = tryParseUrl(url);
  if (parsedUrl) {
    parsedUrl.searchParams.delete(param);
    return parsedUrl.href;
  }
  return url;
}

// Updated exports to match refactored function names
export const Ms = removeQueryParam;
export const lF = serializeQuery;
export const qg = parseQuery;
export const v6 = parseAndNormalizeQuery;
export const xL = parseQuerySimple;
