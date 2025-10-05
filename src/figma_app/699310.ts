import { jsx, jsxs } from "react/jsx-runtime"
import { renderI18nText } from "../905/303541"
import { c as SVG } from "../905/391496"
import { BadgeType } from "../905/875063"
import { TooltipDropdown } from "../figma_app/209680"
import { kz, RL } from "../figma_app/410936"

/**
 * Checks if the given badges array includes the FIGMA_PARTNER badge
 * @param badges - Array of BadgeType values to check
 * @returns boolean indicating if FIGMA_PARTNER badge is present
 */
export function hasFigmaPartnerBadge(badges: BadgeType[]): boolean {
  return badges.includes(BadgeType.FIGMA_PARTNER)
}

/**
 * Renders an SVG component if the FIGMA_PARTNER badge is present
 * @param props - Object containing badges array
 * @param showBorder - Whether to show border on SVG
 * @param is24x24 - Whether SVG should be 24x24 size
 * @returns JSX element or null
 */
export function FigmaPartnerBadgeRenderer(
  { badges }: { badges: BadgeType[] },
  showBorder: boolean,
  is24x24?: boolean,
): JSX.Element | null {
  return hasFigmaPartnerBadge(badges)
    ? jsx(SVG, {
      showBorder,
      is24x24,
    })
    : null
}

/**
 * Creates a tooltip dropdown with a link to Figma partners page
 * @param props - Component props containing children
 * @returns JSX element with tooltip dropdown
 */
export function FigmaPartnerTooltip({ children }: { children: React.ReactNode }): JSX.Element {
  const partnerLink = jsxs("a", {
    href: "https://www.figma.com/partners/",
    target: "_blank",
    className: RL,
    onClick: (event: React.MouseEvent) => {
      event.stopPropagation()
    },
    children: [
      renderI18nText("community.detail_view.figma_partner_this_creator_is"),
      jsx("span", {
        className: kz,
        children: renderI18nText("community.learn_more"),
      }),
    ],
  })

  return jsx(TooltipDropdown, {
    preview: partnerLink,
    children,
  })
}

// Export aliases for backward compatibility
export const C2 = FigmaPartnerBadgeRenderer
export const Gx = FigmaPartnerTooltip
export const J3 = hasFigmaPartnerBadge
