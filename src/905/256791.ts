import { jsx } from 'react/jsx-runtime'
import { AvatarSize, HAvatarType } from '../905/566881'
import { Ro } from '../figma_app/805373'
/**
 * Renders a user avatar with optional fallback display and styling based on user properties.
 * Original function name: $$s0
 * @param props - Avatar rendering options
 * @returns JSX.Element
 */
export interface UserAvatarProps {
  user: {
    viewedAt?: unknown
    // Add other user properties as needed
    [key: string]: any
  }
  size?: AvatarSize
  fallbackDisplay?: HAvatarType
}

/**
 * UserAvatar renders a user's avatar with conditional styling.
 */
export function UserAvatar({
  user,
  size = AvatarSize.MEDIUM,
  fallbackDisplay = HAvatarType.FIRST_CHARACTER,
}: UserAvatarProps) {
  const isViewed = 'viewedAt' in user

  return jsx('div', {
    className: isViewed ? 'user--avatarContainer--roppm' : undefined,
    children: jsx(Ro, {
      className: isViewed ? 'user--greyedOut--ihgyE' : undefined,
      entity: user,
      size,
      hideFallbackInitial: fallbackDisplay === HAvatarType.HIDDEN,
      shape: 'CIRCLE',
    }),
  })
}

// Refactored export for compatibility with original import usage
export const H = UserAvatar
