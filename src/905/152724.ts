import { jsx } from "react/jsx-runtime"
import { FigmaPartnerBadgeRenderer, FigmaPartnerTooltip } from "../figma_app/699310"

let a = "profile_badge--profileBadge--5ljY4"
export interface ProfileBadgeProps {
  profile: any // TODO: Replace with proper type
  showBorder?: boolean
  tooltip?: boolean
}

/**
 * Renders a profile badge with optional tooltip and border
 * Original name: $$s0
 */
export function ProfilePartnerBadge({ profile, showBorder = false, tooltip = false }: ProfileBadgeProps): JSX.Element | null {
  const badgeElement = FigmaPartnerBadgeRenderer(profile, showBorder)

  if (!badgeElement) {
    return null
  }

  const badgeContent = tooltip
    ? jsx(FigmaPartnerTooltip, { children: badgeElement })
    : badgeElement

  return jsx("span", {
    className: a,
    children: badgeContent,
  })
}

export const l = ProfilePartnerBadge
