import classNames from "classnames"
import { memo, useCallback, useMemo } from "react"
import { jsx } from "react/jsx-runtime"
import { KindEnum } from "../905/129884"
import { useLibraryFileLink } from "../905/217163"
import { N as _$$N } from "../905/301843"
import { getI18nString, renderI18nText } from "../905/303541"
import { Link } from "../905/438674"
import { c as _$$c } from "../905/486270"
import { registerTooltip } from "../905/524523"
import { BaseLinkComponent } from "../905/551536"
import { O as _$$O } from "../905/587457"
import { customHistory } from "../905/612521"
import { setupThemeContext } from "../905/614223"
import { f as _$$f } from "../905/949464"
import { Rs as _$$Rs } from "../905/991973"
import { cssBuilderInstance } from "../cssbuilder/589278"
import { atomStoreManager } from "../figma_app/27355"
import { LibraryPresetSubscriptionsV2 } from "../figma_app/43951"
import { getProviderConfigType } from "../figma_app/155411"
import { FAuthProviderType } from "../figma_app/191312"
import { getPartnerTypeFromPreset, isKeyInQNOrR9 } from "../figma_app/255679"
import { useSubscription } from "../figma_app/288654"
import { useIsSelectedViewFullscreenCooper } from "../figma_app/828186"
import { lW } from "../figma_app/850075"

// Refactored SVG icon component with clear naming and improved readability
const LibraryIcon = memo(({ isFilled, isLarge, className, ...props }: {
  isFilled: boolean
  isLarge?: boolean
  className?: string
}) => {
  // Icon paths for filled and outlined variants
  const filledPath = "M12.458 5.25a.75.75 0 0 1 1.041.691v4.276a1 1 0 0 1-.485.857L8.258 13.93a.5.5 0 0 1-.515 0l-4.758-2.855c-.3-.18-.486-.506-.486-.857V5.94a.75.75 0 0 1 1.137-.64L8 7.917l4.363-2.618zM3.5 10.217l4 2.4V8.781l-4-2.4zm5-1.435v3.834l3.999-2.4V6.384zM8.001 2a2 2 0 1 1-.002 4.002A2 2 0 0 1 8.001 2m0 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2"
  const outlinedPath = "M12.01 5.694a.75.75 0 0 1 .991.71v4.287c0 .379-.215.724-.553.894l-4.723 2.362a.5.5 0 0 1-.448 0l-4.723-2.362a1 1 0 0 1-.555-.894V6.404c0-.522.518-.873.993-.71l.094.04L7.5 7.94l4.414-2.207zM3 10.691l4 2V8.808l-4-2zm5-1.882v3.881l4-1.999V6.81zM7.501 2a2 2 0 1 1-.002 4.002A2 2 0 0 1 7.501 2m0 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2"

  return jsx("svg", {
    width: "16",
    height: "16",
    fill: "none",
    viewBox: "0 0 16 16",
    className,
    ...props,
    children: jsx("path", {
      fill: "var(--color-icon)",
      d: isFilled ? filledPath : outlinedPath,
    }),
  })
})

// Tooltip registration functions with descriptive names
const AppleUIKitTooltip = registerTooltip("apple_ui_kit", () => {
  const licenseLink = jsx(Link, {
    trusted: false,
    newTab: true,
    href: "https://developer.apple.com/support/downloads/terms/apple-design-resources/Apple-Design-Resources-License-20230621-English.pdf",
    children: renderI18nText("design_systems.preset_libraries.tooltip.apple_license_link"),
  })

  return jsx("div", {
    className: cssBuilderInstance.alignCenter.$,
    children: jsx("div", {
      children: renderI18nText("design_systems.preset_libraries.tooltip.ui_kit_tooltip", {
        licenseLink,
        author: getI18nString("design_systems.preset_libraries.tooltip.apple"),
      }),
    }),
  })
})

const CommunityFragmentLicenseTooltip = registerTooltip("community_fragment_license_tooltip", () => {
  const licenseLink = jsx("div", {
    className: "x1rg5ohu x14atkfc",
    children: jsx(Link, {
      trusted: false,
      newTab: true,
      href: "https://creativecommons.org/licenses/by/4.0/",
      children: jsx("div", {
        className: cssBuilderInstance.colorTextBrand.justifyCenter.hAuto.$,
        children: renderI18nText("community.community_license"),
      }),
    }),
  })

  return jsx("div", {
    className: cssBuilderInstance.flex.flexColumn.alignCenter.justifyCenter.$,
    children: jsx(setupThemeContext, {
      mode: "dark",
      children: jsx("div", {
        children: renderI18nText("community.community_license_text", {
          licenseLink,
        }),
      }),
    }),
  })
})

const FigmaUIKitTooltip = registerTooltip("figma_ui_kit", () => {
  const licenseLink = jsx(Link, {
    trusted: false,
    newTab: true,
    href: "https://creativecommons.org/licenses/by/4.0/",
    children: renderI18nText("design_systems.preset_libraries.tooltip.figma_license_link"),
  })

  return jsx("div", {
    className: cssBuilderInstance.flex.flexColumn.alignCenter.justifyCenter.$,
    children: jsx("div", {
      children: renderI18nText("design_systems.preset_libraries.tooltip.ui_kit_tooltip", {
        licenseLink,
        author: getI18nString("design_systems.preset_libraries.tooltip.figma"),
      }),
    }),
  })
})

const GoogleUIKitTooltip = registerTooltip("google_ui_kit", () => {
  const licenseLink = jsx(Link, {
    trusted: false,
    newTab: true,
    href: "https://creativecommons.org/licenses/by/4.0/",
    children: renderI18nText("design_systems.preset_libraries.tooltip.google_license_link"),
  })

  return jsx("div", {
    className: cssBuilderInstance.flex.flexColumn.alignCenter.justifyCenter.$,
    children: jsx("div", {
      children: renderI18nText("design_systems.preset_libraries.tooltip.ui_kit_tooltip", {
        licenseLink,
        author: getI18nString("design_systems.preset_libraries.tooltip.google"),
      }),
    }),
  })
})

const VisualAssetsTooltip = registerTooltip(
  "visual_assets_tooltip",
  ({ authorName }) => {
    const licenseLink = jsx(BaseLinkComponent, {
      className: cssBuilderInstance.colorTextBrand.justifyCenter.hAuto.$,
      trusted: false,
      target: "_blank",
      href: "https://creativecommons.org/licenses/by/4.0/",
      children: renderI18nText("community.visual_assets.license_tooltip.license_link"),
    })

    return jsx("div", {
      className: cssBuilderInstance.alignCenter.$,
      children: authorName
        ? renderI18nText("community.visual_assets.license_tooltip_with_link", {
          authorName,
          licenseLink,
        })
        : renderI18nText("community.visual_assets.license_tooltip.no_author_name_with_link", {
          licenseLink,
        }),
    })
  },
  element => ({
    authorName: element.getAttribute("data-tooltip-author-name"),
  }),
)

/**
 * Library icon component with tooltip support
 * @param {object} props - Component properties
 * @param {string} props.libraryKey - Unique identifier for the library
 * @param {boolean} props.isLarge - Whether to use large icon variant
 * @param {boolean} props.showTooltip - Whether to show tooltip on hover
 * @param {number} props.tooltipDelay - Delay before tooltip appears (ms)
 * @param {string} props.tooltipLocation - Position of tooltip relative to element
 * @param {boolean} props.forSelect - Whether icon is for selection mode
 * @param {boolean} props.redirectToHubFile - Whether to redirect to hub file on click
 * @param {boolean} props.isFragment - Whether this is a fragment library
 * @param {boolean} props.isNewIcon - Whether to use new icon design
 */
export function LibraryIconWithTooltip({
  libraryKey,
  isLarge = false,
  showTooltip = false,
  tooltipDelay = 500,
  tooltipLocation,
  forSelect = false,
  redirectToHubFile = false,
  isFragment = false,
  isNewIcon = false,
}) {
  // Generate tooltip attributes based on library properties
  const tooltipAttributes = useMemo(() => {
    const providerConfigType = getProviderConfigType()
    const presetSubscriptions = atomStoreManager.get(_$$Rs)
    const isFullscreen = useIsSelectedViewFullscreenCooper()
    const libraryData = lW(isFullscreen)
    const isLocalLibrary = libraryKey && libraryData[libraryKey]

    // Get subscription data for preset libraries
    const subscriptionData = useSubscription(
      LibraryPresetSubscriptionsV2,
      { group: providerConfigType },
      { enabled: providerConfigType != null },
    )

    // Configure tooltip timing
    const timingAttributes = tooltipDelay != null
      ? { "data-tooltip-timeout-delay": tooltipDelay }
      : { "data-tooltip-show-immediately": true }

    // Configure tooltip position
    const positionAttributes = tooltipLocation
      ? { [`data-tooltip-show-${tooltipLocation}`]: true }
      : {}

    const baseAttributes = {
      ...positionAttributes,
      ...timingAttributes,
    }

    // Handle local/fragment libraries
    if (isLocalLibrary || isFragment) {
      return {
        "data-tooltip": CommunityFragmentLicenseTooltip,
        "data-tooltip-type": KindEnum.SPECIAL,
        "data-tooltip-interactive": true,
        "data-tooltip-max-width": 200,
        ...baseAttributes,
      }
    }

    // Handle preset libraries with tooltips
    if (showTooltip && libraryKey != null) {
      // Handle QN/R9 libraries
      if (isKeyInQNOrR9(libraryKey)) {
        const authorName = presetSubscriptions?.[libraryKey]?.author_name
        return {
          "data-tooltip": VisualAssetsTooltip,
          "data-tooltip-type": KindEnum.SPECIAL,
          "data-tooltip-interactive": true,
          "data-tooltip-max-width": 210,
          "data-tooltip-author-name": authorName,
          ...baseAttributes,
        }
      }

      // Handle partner-specific libraries
      switch (getPartnerTypeFromPreset(subscriptionData, libraryKey)) {
        case FAuthProviderType.APPLE:
          return {
            "data-tooltip": AppleUIKitTooltip,
            "data-tooltip-type": KindEnum.SPECIAL,
            "data-tooltip-interactive": true,
            "data-tooltip-max-width": 200,
            ...baseAttributes,
          }
        case FAuthProviderType.GOOGLE:
          return {
            "data-tooltip": GoogleUIKitTooltip,
            "data-tooltip-type": KindEnum.SPECIAL,
            "data-tooltip-interactive": true,
            "data-tooltip-max-width": 210,
            ...baseAttributes,
          }
        case FAuthProviderType.FIGMA:
          return {
            "data-tooltip": FigmaUIKitTooltip,
            "data-tooltip-type": KindEnum.SPECIAL,
            "data-tooltip-interactive": true,
            "data-tooltip-max-width": 210,
            ...baseAttributes,
          }
        default:
          return null
      }
    }

    return null
  }, [libraryKey, showTooltip, tooltipDelay, tooltipLocation, isFragment])

  // Handle library file linking
  const libraryLink = useLibraryFileLink({ libraryKey })

  // Click handler for redirecting to hub file
  const handleRedirectClick = useCallback((event) => {
    event.stopPropagation()
    event.preventDefault()
    if (libraryLink?.data?.link) {
      customHistory.redirect(libraryLink.data.link, "_blank")
    }
  }, [libraryLink])

  // Prevent default actions on pointer events
  const handlePointerEvent = useCallback((event) => {
    event.preventDefault()
    event.stopPropagation()
  }, [])

  // Compute class names for the icon
  const iconClassNames = classNames("community_library_icon--icon--Y-z7F", {
    "community_library_icon--forSelect--AahTe": forSelect,
    "community_library_icon--forRedirect--U97pQ": redirectToHubFile,
  })

  // Determine which icon component to render
  const renderIcon = () => {
    if (isNewIcon) {
      return isLarge
        ? jsx(_$$f, { className: iconClassNames })
        : jsx(LibraryIcon, {
          isFilled: _$$O(),
          className: iconClassNames,
        })
    }

    return isLarge
      ? jsx(_$$N, { className: iconClassNames })
      : jsx(_$$c, { className: iconClassNames })
  }

  // Main icon container
  const iconContainerProps = {
    className: cssBuilderInstance.flex.alignCenter.justifyCenter.flexShrink0.$,
    ...(tooltipAttributes ?? {}),
  }

  // Add interaction handlers for redirect functionality
  if (redirectToHubFile && libraryKey) {
    Object.assign(iconContainerProps, {
      onClick: handleRedirectClick,
      onMouseDown: handlePointerEvent,
      onPointerDown: handlePointerEvent,
      role: "button",
      tabIndex: -1,
    })
  }

  return jsx("div", {
    ...iconContainerProps,
    children: renderIcon(),
  })
}

/**
 * Default library icon for selection contexts
 */
export function DefaultLibraryIcon() {
  return jsx("div", {
    className: cssBuilderInstance.flex.alignCenter.justifyCenter.flexShrink0.ml4.mr4.$,
    children: jsx(LibraryIconWithTooltip, {
      libraryKey: undefined,
      forSelect: true,
    }),
  })
}

// Export aliases for backward compatibility
export const E = LibraryIconWithTooltip
export const t = DefaultLibraryIcon
