import { z } from 'zod'
import { FFileType, FPlanAccessType, FProductAccessType } from '../figma_app/191312'
import { throwTypeError } from '../figma_app/465776'

/**
 * ProductAccessMap - Maps product access types for DESIGN, WHITEBOARD, DEV_MODE.
 */
export const ProductAccessMap = {
  DESIGN: FProductAccessType.DESIGN,
  WHITEBOARD: FProductAccessType.WHITEBOARD,
  DEV_MODE: FProductAccessType.DEV_MODE,
}

/**
 * ProductAccessTypeSchema - Zod schema for product access type or 'figjam'.
 */
export const ProductAccessTypeSchema = z.union([z.nativeEnum(FProductAccessType), z.literal('figjam')])

/**
 * getProductAccessTypeFromFileType - Maps FFileType to ProductAccessType.
 * @param fileType - FFileType value
 * @returns ProductAccessType
 */
export function getProductAccessTypeFromFileType(fileType: FFileType | null): FProductAccessType {
  switch (fileType) {
    case FFileType.DESIGN:
    case FFileType.SLIDES:
    case FFileType.SITES:
    case FFileType.COOPER:
    case FFileType.FIGMAKE:
    case null:
      return ProductAccessMap.DESIGN
    case FFileType.WHITEBOARD:
      return ProductAccessMap.WHITEBOARD
    default:
      throwTypeError(fileType)
  }
}

/**
 * getProductAccessTypeOrDefault - Returns ProductAccessType from fileType or DESIGN as default.
 * @param fileType - FFileType value
 * @returns ProductAccessType
 */
export function getProductAccessTypeOrDefault(fileType: FFileType | null): FProductAccessType {
  return getProductAccessType(fileType) ?? FProductAccessType.DESIGN
}

/**
 * getProductAccessType - Maps FFileType to ProductAccessType, returns null for null input.
 * @param fileType - FFileType value
 * @returns ProductAccessType | null
 */
export function getProductAccessType(fileType: FFileType | null): FProductAccessType | null {
  switch (fileType) {
    case FFileType.DESIGN:
      return FProductAccessType.DESIGN
    case FFileType.WHITEBOARD:
      return FProductAccessType.WHITEBOARD
    case FFileType.SLIDES:
      return FProductAccessType.SLIDES
    case FFileType.SITES:
      return FProductAccessType.SITES
    case FFileType.FIGMAKE:
      return FProductAccessType.FIGMAKE
    case FFileType.COOPER:
      return FProductAccessType.COOPER
    case null:
      return null
    default:
      throwTypeError(fileType)
  }
}

/**
 * getProductAccessTypeFromString - Maps string to ProductAccessType.
 * @param type - string value
 * @returns ProductAccessType | null
 */
export function getProductAccessTypeFromString(type: string): FProductAccessType | null {
  switch (type) {
    case 'design':
      return FProductAccessType.DESIGN
    case 'figjam':
    case 'whiteboard':
      return FProductAccessType.WHITEBOARD
    case 'dev_mode':
      return FProductAccessType.DEV_MODE
  }
  return null
}

/**
 * isRestrictedPlanAccess - Checks if plan access is restricted for file type.
 * @param fileType - FFileType value
 * @param planStatus - object with paid status fields
 * @returns boolean
 */
export function isRestrictedPlanAccess(
  fileType: FFileType,
  planStatus?: { whiteboardPaidStatus?: FPlanAccessType; designPaidStatus?: FPlanAccessType }
): boolean {
  return fileType === FFileType.WHITEBOARD
    ? planStatus?.whiteboardPaidStatus === FPlanAccessType.RESTRICTED
    : fileType === FFileType.DESIGN && planStatus?.designPaidStatus === FPlanAccessType.RESTRICTED
}

/**
 * isCoreProductAccessType - Checks if type is DESIGN, WHITEBOARD, or DEV_MODE.
 * @param type - FProductAccessType value
 * @returns boolean
 */
export function isCoreProductAccessType(type: FProductAccessType): boolean {
  return (
    type === FProductAccessType.DESIGN ||
    type === FProductAccessType.WHITEBOARD ||
    type === FProductAccessType.DEV_MODE
  )
}

/**
 * ProductAccessOrder - Order mapping for ProductAccessType.
 */
const ProductAccessOrder: Record<FProductAccessType, number> = {
  [FProductAccessType.DESIGN]: 10,
  [FProductAccessType.SITES]: 20,
  [FProductAccessType.FIGMAKE]: 30,
  [FProductAccessType.DEV_MODE]: 40,
  [FProductAccessType.WHITEBOARD]: 50,
  [FProductAccessType.SLIDES]: 60,
  [FProductAccessType.COOPER]: 70,
}

/**
 * compareProductAccessOrder - Compares order of two ProductAccessTypes.
 * @param a - FProductAccessType
 * @param b - FProductAccessType
 * @returns number
 */
export function compareProductAccessOrder(a: FProductAccessType, b: FProductAccessType): number {
  return ProductAccessOrder[a] - ProductAccessOrder[b]
}

// Export aliases for backward compatibility and refactored names
export const Ci = getProductAccessType
export const DK = ProductAccessTypeSchema
export const Hn = compareProductAccessOrder
export const PO = isCoreProductAccessType
export const Te = ProductAccessMap
export const _R = isRestrictedPlanAccess
export const px = getProductAccessTypeFromString
export const vc = getProductAccessTypeFromFileType
export const wR = getProductAccessTypeOrDefault
