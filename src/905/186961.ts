import { FContainerType } from '../figma_app/191312'
import { throwTypeError } from '../figma_app/465776'

/**
 * ContainerTypeMap - Maps container type keys to their string values.
 */
export const ContainerTypeMap = {
  ORG: 'org',
  TEAM: 'team',
} as const

/**
 * getFContainerType - Maps a string key to the corresponding FContainerType enum value.
 * @param typeKey - The container type key as a string.
 * @returns The corresponding FContainerType value.
 * @throws Will throw an error if the typeKey is invalid.
 * (Original function: $$s0)
 */
export function getFContainerType(typeKey: string): FContainerType {
  switch (typeKey) {
    case ContainerTypeMap.TEAM:
      return FContainerType.TEAM
    case ContainerTypeMap.ORG:
      return FContainerType.ORG
    default:
      throwTypeError(typeKey)
  }
}

/** Alias for getFContainerType (Original: V) */
export const V = getFContainerType

/** Alias for ContainerTypeMap (Original: i) */
export const i = ContainerTypeMap
