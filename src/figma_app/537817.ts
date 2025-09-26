import { jsx } from 'react/jsx-runtime'
import { AvatarSize, HAvatarType } from '../905/566881'
import { w7 } from '../figma_app/805373'

/**
 * Renders a team avatar component.
 * @param props - Team avatar properties.
 * @returns JSX.Element
 * @see $$s0
 */
export interface TeamAvatarProps {
  team: any
  size?: AvatarSize
  shape?: 'SQUARE' | 'CIRCLE'
  fallbackDisplay?: HAvatarType
  avatarSvg?: React.ReactNode
  fallbackSvg?: React.ReactNode
  svgSizeRatio?: number
  opacity?: number
}

/**
 * TeamAvatar - Refactored from $$s0
 */
export function TeamAvatar({
  team,
  size = AvatarSize.MEDIUM,
  shape = 'SQUARE',
  fallbackDisplay = HAvatarType.FIRST_CHARACTER,
  avatarSvg,
  fallbackSvg,
  svgSizeRatio,
  opacity,
}: TeamAvatarProps) {
  return jsx(w7, {
    entity: team,
    size,
    hideFallbackInitial: fallbackDisplay === HAvatarType.HIDDEN,
    shape,
    avatarSvg,
    fallbackSvg,
    svgSizeRatio,
    opacity,
  })
}

// Refactored export for compatibility with original usage
export const n = TeamAvatar
