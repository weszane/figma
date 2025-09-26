import { useEffect, useState } from 'react'
import { Fragment, jsx, jsxs } from 'react/jsx-runtime'
import { getI18nString, renderI18nText } from '../905/303541'
import { trackEventAnalytics } from '../905/449184'
import { A as _$$A } from '../905/776343'
import { r as _$$r } from '../905/857502'
import { HubAction } from '../figma_app/350203'
import { copyToClipboard } from '../figma_app/471982'


let m = 'social_links--socialLink--bFTcE resource_page--pill--LyX8G'
export interface SocialLinksProps {
  author: string
  resourceType: string
  resourceId: string
  resourceURL: string
  resourceName: string
  disableHeader?: boolean
}

export function SocialLinks({
  author,
  resourceType,
  resourceId,
  resourceURL,
  resourceName,
  disableHeader = false,
}: SocialLinksProps) {
  const [isCopied, setIsCopied] = useState(false)

  const trackAnalytics = (action: HubAction) => {
    trackEventAnalytics('CTA Clicked', {
      communityHubEntity: resourceType,
      communityHubEntityId: resourceId,
      action,
    }, {
      forwardToDatadog: true,
    })
  }

  const handleCopyLink = () => {
    setIsCopied(true)
    copyToClipboard(resourceURL)
    setTimeout(() => setIsCopied(false), 3000)
    trackAnalytics(HubAction.SHARE_LINK)
  }

  const twitterShareUrl = `https://twitter.com/intent/tweet?url=${resourceURL}&text=${encodeURIComponent(getI18nString('community.detail_view.check_out_resource_name_by_publisher_on_figmadesign', {
    resourceName,
    publisherString: author,
  }))}`

  const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${resourceURL}`

  return jsxs(Fragment, {
    children: [
      !disableHeader && jsx('h3', {
        className: 'social_links--socialLinksHeader--cm9hk text--fontPos14--OL9Hp text--_fontBase--QdLsd',
        children: renderI18nText('community.detail_view.share'),
      }),
      jsxs('div', {
        className: 'social_links--socialLinksContainer--ZOvGc',
        children: [
          jsxs('div', {
            className: 'social_links--copyLinkButton--SV1P0 social_links--socialLink--bFTcE resource_page--pill--LyX8G',
            role: 'button',
            tabIndex: 0,
            onClick: handleCopyLink,
            children: [
              jsx(Tooltip, {
                show: isCopied,
                text: getI18nString('fullscreen_actions.link_copied'),
              }),
              jsx(_$$r, {}),
            ],
          }),
          jsx('a', {
            className: m,
            href: twitterShareUrl,
            target: '_blank',
            onClick: () => trackAnalytics(HubAction.SHARE_TWITTER),
            children: jsx(_$$A, {}),
          }),
          jsx('a', {
            className: m,
            href: facebookShareUrl,
            target: '_blank',
            onClick: () => trackAnalytics(HubAction.SHARE_FACEBOOK),
            children: jsx(FacebookIcon, {}),
          }),
        ],
      }),
    ],
  })
}

// Renamed export for backward compatibility
export const R = SocialLinks

// Helper components with meaningful names
function FacebookIcon() {
  return jsx('svg', {
    className: 'svg',
    width: '16',
    height: '16',
    viewBox: '0 0 16 16',
    children: jsx('path', {
      d: 'M.883 0h14.234c.488 0 .883.395.883.883v14.234c0 .488-.395.883-.883.883H.883C.395 16 0 15.605 0 15.117V.883C0 .395.395 0 .883 0zM11.04 9.804V16H8.546V9.806H6.461V7.39h2.085v-1.78c0-2.067 1.262-3.192 3.107-3.192.622-.003 1.244.03 1.863.095v2.158h-1.277c-1.005 0-1.2.476-1.2 1.176v1.54h2.392l-.31 2.416H11.04z',
      fillRule: 'evenodd',
      fillOpacity: '1',
      fill: '#000',
      stroke: 'none',
    }),
  })
}

interface TooltipProps {
  text: string
  show: boolean
}

function Tooltip({ text, show }: TooltipProps) {
  const [shouldRender, setShouldRender] = useState(show)

  useEffect(() => {
    if (show) {
      setShouldRender(show)
    }
    else {
      setTimeout(() => setShouldRender(show), 200)
    }
  }, [show])

  if (!show && !shouldRender) {
    return jsx(Fragment, {})
  }

  return jsx('div', {
    className: shouldRender && show
      ? 'tooltips--showTooltip--TvWca tooltips--tooltip--Uk5Bh text--fontPos13--xW8hS text--_fontBase--QdLsd'
      : 'tooltips--tooltip--Uk5Bh text--fontPos13--xW8hS text--_fontBase--QdLsd',
    children: jsx('span', {
      children: text,
    }),
  })
}
