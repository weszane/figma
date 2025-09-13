import { VariableSetIdCompatHandler } from "../figma_app/243058";

/**
 * Represents a Kiwi object with a guid property.
 */
interface KiwiObject {
  guid: string;
}

/**
 * Represents a reference object with key and version.
 */
interface RefObject {
  key: string;
  version: number;
}

/**
 * Converts a string representation of a variable set ID to its Kiwi format.
 * Original function: $$r3
 * @param input - The string to convert.
 * @returns The Kiwi representation or null if invalid.
 */
export function convertStringToKiwi(input: string): string | null {
  const parsed = VariableSetIdCompatHandler.fromString(input);
  return parsed ? VariableSetIdCompatHandler.toKiwi(parsed) : null;
}

/**
 * Converts a Kiwi object to its string representation.
 * Original function: $$a1
 * @param kiwiObj - The Kiwi object to convert.
 * @returns The string representation or "<invalid>" if invalid.
 */
export function convertKiwiToString(kiwiObj: KiwiObject): string {
  const parsed = VariableSetIdCompatHandler.fromKiwi(kiwiObj);
  return parsed ? VariableSetIdCompatHandler.toString(parsed) : "<invalid>";
}

/**
 * Converts a GUID to its string representation by wrapping it in a Kiwi object.
 * Original function: $$s4
 * @param guid - The GUID to convert.
 * @returns The string representation.
 */
export function convertGuidToString(guid: any) {
  return convertKiwiToString({ guid });
}

/**
 * Converts a reference object to its string representation.
 * Original function: $$o0
 * @param key - The key of the reference.
 * @param version - The version of the reference.
 * @returns The string representation.
 */
export function convertRefToString(key: string, version: number): string {
  return VariableSetIdCompatHandler.toString(
    VariableSetIdCompatHandler.fromRef({ key, version })
  );
}

/**
 * Checks if a string is a valid variable set ID.
 * Original function: $$l2
 * @param input - The string to validate.
 * @returns True if valid, false otherwise.
 */
export function isValidVariableSetIdString(input: string): boolean {
  const parsed = VariableSetIdCompatHandler.fromString(input);
  return !!parsed && VariableSetIdCompatHandler.isValid(parsed);
}

// Exported aliases for backward compatibility
export const Hc = convertRefToString;
export const dI = convertKiwiToString;
export const fn = isValidVariableSetIdString;
export const sH = convertStringToKiwi;
export const wL = convertGuidToString;
