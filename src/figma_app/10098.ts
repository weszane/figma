import { getI18nString } from '../905/303541'
import { mapResponsiveSetProperties } from '../905/395857'
import { getResourceDataOrFallback } from '../905/419236'
import { isNotNullish } from '../figma_app/95419'
import { ModeType } from '../figma_app/644808'

/**
 * Represents the constant for site kit file.
 * (Original: $$c0)
 */
export const SITE_KIT_FILE = 'SITE_KIT_FILE'

/**
 * Represents the constant for site kit embeds library key.
 * (Original: $$u2)
 */
export const SITE_KIT_EMBEDS_LIBRARY_KEY = 'SITE_KIT_EMBEDS_LIBRARY_KEY'

/**
 * Maps the library name to its localized string if applicable.
 * @param name - The original library name.
 * @returns The localized library name if matched, otherwise the original name.
 */
export function getLocalizedLibraryName(name: string): string {
  switch (name) {
    case 'Pages':
      return getI18nString('design_systems.assets_panel.site_blocks.pages')
    case 'Navigation':
      return getI18nString('design_systems.assets_panel.site_blocks.navigation')
    case 'Heroes':
      return getI18nString('design_systems.assets_panel.site_blocks.heroes')
    case 'Features':
      return getI18nString('design_systems.assets_panel.site_blocks.features')
    case 'CMS':
      return getI18nString('design_systems.assets_panel.site_blocks.cms')
    default:
      return name
  }
}

/**
 * Retrieves and maps site kit assets and library information.
 * (Original: $$d1)
 * @param params - Object containing libraryKeyToFile property.
 * @returns Site kit library and assets info, or null if not found.
 */
export function getSiteKitAssets(params: { libraryKeyToFile?: { file?: any } }) {
  const resourceData = getResourceDataOrFallback(params.libraryKeyToFile?.file)
  if (!resourceData)
    return null

  const assets = resourceData.libraryAssets
    .map((asset: any) => mapResponsiveSetProperties(resourceData.libraryKey, asset))
    .filter(isNotNullish)

  if (assets.length === 0)
    return null

  return {
    library: {
      name: getLocalizedLibraryName(resourceData.name),
      libraryKey: resourceData.libraryKey,
      thumbnailUrl: resourceData.thumbnailUrl,
      thumbnailShouldCover: false,
      numResponsiveSets: assets.length,
      type: ModeType.SITE,
      libraryType: 'team',
    },
    assets,
  }
}

/** Exported constants for external usage (Original: GZ, Yl) */
export const GZ = SITE_KIT_FILE
export const Yl = SITE_KIT_EMBEDS_LIBRARY_KEY
/** Exported function for external usage (Original: Pv) */
export const Pv = getSiteKitAssets
