import { z } from "zod";
import { ProductAccessTypeEnum } from "../905/513035";
/**
 * Enum representing different access levels.
 * Original variable: a
 */
export enum AccessLevel {
  COLLAB = "collab",
  DEV = "dev",
  FULL = "full",
  VIEW = "view",
  CONTENT = "content",
}

/**
 * Zod schema for AccessLevel enum.
 * Original variable: $$s1
 */
export const AccessLevelSchema = z.nativeEnum(AccessLevel);

/**
 * Maps AccessLevel to ProductAccessTypeEnum.
 * Returns null for VIEW or invalid input.
 * Original function: $$o0
 * @param level - AccessLevel string
 * @returns ProductAccessTypeEnum or null
 */
export function mapAccessLevelToProductType(level: AccessLevel | undefined): ProductAccessTypeEnum | null {
  if (!level) return null;
  switch (level) {
    case AccessLevel.FULL:
      return ProductAccessTypeEnum.EXPERT;
    case AccessLevel.COLLAB:
      return ProductAccessTypeEnum.COLLABORATOR;
    case AccessLevel.DEV:
      return ProductAccessTypeEnum.DEVELOPER;
    case AccessLevel.VIEW:
      return null;
    default:
      return null;
  }
}

// Export aliases for backward compatibility
export const L8 = mapAccessLevelToProductType;
export const QT = AccessLevelSchema;
