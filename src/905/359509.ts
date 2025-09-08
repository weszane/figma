/**
 * FIGMA_PROPERTIES constant (original: $$n3)
 */
export const FIGMA_PROPERTIES = 'FIGMA_PROPERTIES'

/**
 * Platform identifiers (original: $$r7, $$a6, $$s2, $$o0, $$l1, $$d4)
 */
export const WEB = 'WEB'
export const IOS = 'IOS'
export const ANDROID = 'ANDROID'
export const CSSBUILDER = 'CSSBUILDER'
export const IOS_UIKIT = 'IOS_UIKIT'
export const ANDROID_XML = 'ANDROID_XML'

/**
 * Platform metadata map (original: $$c5)
 */
export interface PlatformMeta {
  type: 'first-party'
  id: string
}

/**
 * Supported platforms metadata (original: $$c5)
 */
export const SupportedPlatforms: Record<string, PlatformMeta> = {
  [WEB]: { type: 'first-party', id: WEB },
  [IOS]: { type: 'first-party', id: IOS },
  [IOS_UIKIT]: { type: 'first-party', id: IOS_UIKIT },
  [ANDROID]: { type: 'first-party', id: ANDROID },
  [ANDROID_XML]: { type: 'first-party', id: ANDROID_XML },
}

/**
 * Maps platform id to its corresponding framework.
 * @param platformId - Platform identifier (original: $$u8)
 * @returns Framework name or undefined
 */
export function mapPlatformToFramework(platformId: string): string | undefined {
  switch (platformId) {
    case WEB:
    case CSSBUILDER:
      return 'React'
    case IOS:
    case IOS_UIKIT:
      return 'SwiftUI'
    case ANDROID:
    case ANDROID_XML:
      return 'Compose'
    default:
      return undefined
  }
}
