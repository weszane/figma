import { PublicLinkControlsSetting } from "../figma_app/482728"

/**
 * Normalizes the public link controls setting value.
 * Returns ALLOWED if the input is null or undefined, otherwise returns the input value.
 * @param setting - The public link controls setting to normalize
 * @returns Normalized PublicLinkControlsSetting value
 */
export function normalizePublicLinkControlsSetting(
  setting: PublicLinkControlsSetting | null | undefined,
): PublicLinkControlsSetting {
  switch (setting) {
    case null:
    case undefined:
      return PublicLinkControlsSetting.ALLOWED
    default:
      return setting
  }
}

/**
 * Checks if public links are banned for an entity.
 * @param entity - The entity to check (originally $$a0)
 * @returns True if public links are banned, false otherwise
 */
export function isPublicLinkBanned(entity: { public_link_controls_setting?: PublicLinkControlsSetting | null }): boolean {
  return normalizePublicLinkControlsSetting(entity?.public_link_controls_setting) === PublicLinkControlsSetting.BANNED
}

/**
 * Checks if expiration is required for public links of an entity.
 * @param entity - The entity to check (originally $$s2)
 * @returns True if expiration is required, false otherwise
 */
export function isPublicLinkExpirationRequired(entity: { public_link_controls_setting?: PublicLinkControlsSetting | null }): boolean {
  const setting = normalizePublicLinkControlsSetting(entity?.public_link_controls_setting)
  return [
    PublicLinkControlsSetting.EXPIRATION_REQUIRED,
    PublicLinkControlsSetting.EXP_AND_PWD_REQUIRED,
  ].includes(setting)
}

/**
 * Checks if password is required for public links of an entity.
 * @param entity - The entity to check (originally $$o1)
 * @returns True if password is required, false otherwise
 */
export function isPublicLinkPasswordRequired(entity: { public_link_controls_setting?: PublicLinkControlsSetting | null }): boolean {
  const setting = normalizePublicLinkControlsSetting(entity?.public_link_controls_setting)
  return [
    PublicLinkControlsSetting.PASSWORD_REQUIRED,
    PublicLinkControlsSetting.EXP_AND_PWD_REQUIRED,
  ].includes(setting)
}

// Export aliases for backward compatibility
export const Bg = isPublicLinkBanned
export const Cy = isPublicLinkPasswordRequired
export const Q3 = isPublicLinkExpirationRequired
export const d6 = normalizePublicLinkControlsSetting
