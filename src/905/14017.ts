import classNames from 'classnames';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { jsx, jsxs } from 'react/jsx-runtime';
import { _W, aS, Au, cy, DD, dv, LF, o1, pV, rn, Tl, UN, v8, Vh, Yr } from '../905/105487';
import { renderI18nText } from '../905/303541';
import { SvgComponent } from '../905/714743';
import { getCommunityHubLikeStatus, getCommunityHubLikeStatusByResourceId } from '../905/841666';
import { ProfileRouteState } from '../905/934145';
import { A as _$$A } from '../6828/379561';
import { hasFreemiumCode, hasMonetizedResourceMetadata, isThirdPartyMonetized } from '../figma_app/45218';
import { HoverDropdown } from '../figma_app/209680';
import { getSearchSessionIdFromSelector } from '../figma_app/387599';
import { getResourceType, hasResourceType } from '../figma_app/427318';
import { buildCommunityPathById, buildCommunityUrl, getCurrentVersion, mapResourceTypePlural } from '../figma_app/471982';
import { isOrgOrTeamExport } from '../figma_app/740025';
import { cB, mk } from '../figma_app/777551';
import { getProductPriceString, isSubscriptionActive } from '../figma_app/808294';
import { EU } from '../figma_app/835219';
import { formatNumber } from '../figma_app/930338';
import { r5 } from '../figma_app/947784';

/**
 * HeartIcon (original: d)
 * Renders a heart SVG icon.
 */
function HeartIcon(): JSX.Element {
  return jsx('svg', {
    width: '11',
    height: '10',
    viewBox: '0 0 11 10',
    fill: 'none',
    children: jsx('path', {
      d: 'M4.88381 1.53137L5.50046 2.033L6.11711 1.53137C7.0677 0.759431 8.43916 0.836533 9.30009 1.71066C10.2333 2.65817 10.2333 4.19463 9.30009 5.14214L5.50046 9L1.69991 5.14214C0.766697 4.19463 0.766697 2.65817 1.69991 1.71066C2.56176 0.836533 3.9323 0.759431 4.88381 1.53137Z',
      stroke: 'var(--color-icon-secondary, rgba(0, 0, 0, 0.5))'
    })
  });
}
const MONETIZATION_LABEL_CLASS = 'monetization_labels--monetizationLabel';

/**
 * MonetizationLabel (original: _)
 * Displays the price string for a monetized resource.
 */
function MonetizationLabel({
  resource
}: {
  resource: any;
}): JSX.Element {
  const price = getProductPriceString(resource.monetized_resource_metadata);
  return jsx('span', {
    className: MONETIZATION_LABEL_CLASS,
    children: price
  });
}

/**
 * PurchasedLabel (original: A)
 * Displays a label for purchased resources.
 */
function PurchasedLabel(): JSX.Element {
  return jsx('span', {
    className: 'monetization_labels--purchasedLabel',
    children: renderI18nText('community.buyer.purchased')
  });
}

/**
 * PaidLabel (original: y)
 * Displays a label for paid resources.
 */
function PaidLabel(): JSX.Element {
  return jsx('span', {
    className: MONETIZATION_LABEL_CLASS,
    children: renderI18nText('community.resource_tiles.paid')
  });
}

/**
 * FreeLabel (original: b)
 * Displays a label for free resources.
 */
function FreeLabel(): JSX.Element {
  return jsx('span', {
    className: MONETIZATION_LABEL_CLASS,
    children: renderI18nText('community.resource_tiles.free')
  });
}

/**
 * ResourceMonetizationLabel (original: v)
 * Determines and renders the correct monetization label for a resource.
 */
function ResourceMonetizationLabel({
  resource
}: {
  resource: any;
}): JSX.Element | null {
  const profile = useSelector((state: any) => 'authedActiveCommunityProfile' in state ? state.authedActiveCommunityProfile : null);
  if (!resource) return null;
  if (!(profile && isOrgOrTeamExport(profile)) && hasMonetizedResourceMetadata(resource) && resource.community_resource_payment && isSubscriptionActive(resource.community_resource_payment)) {
    return jsx(PurchasedLabel, {});
  }
  if (hasFreemiumCode(resource)) {
    return jsx(PaidLabel, {});
  }
  if (hasMonetizedResourceMetadata(resource)) {
    return jsx(MonetizationLabel, {
      resource
    });
  }
  if (isThirdPartyMonetized(resource)) {
    return jsx(PaidLabel, {});
  }
  return jsx(FreeLabel, {});
}

/**
 * LikeCountDisplay (original: $$O1)
 * Displays the like count and icon for a resource.
 */
export function LikeCountDisplay({
  likeCount,
  currentUserLiked,
  inPluginRow,
  disableFontStyling
}: {
  likeCount: number;
  currentUserLiked: boolean;
  inPluginRow?: boolean;
  disableFontStyling?: boolean;
}): JSX.Element {
  const fontClass = disableFontStyling ? undefined : inPluginRow ? Yr : Vh;
  return jsxs('div', {
    className: classNames(currentUserLiked ? aS : dv, fontClass),
    children: [jsx(HeartIcon, {}), formatNumber(likeCount)]
  });
}

/**
 * UsageCountDisplay (original: $$D2)
 * Displays the usage count and icon for a resource.
 */
export function UsageCountDisplay({
  usageCount,
  inPluginRow,
  disableFontStyling
}: {
  usageCount: number;
  inPluginRow?: boolean;
  disableFontStyling?: boolean;
}): JSX.Element {
  const fontClass = disableFontStyling ? undefined : inPluginRow ? Yr : Vh;
  return jsxs('div', {
    className: classNames(Au, fontClass),
    children: [jsx(SvgComponent, {
      svg: _$$A
    }), formatNumber(usageCount)]
  });
}

/**
 * ResourceTile (original: $$L0)
 * Renders a resource tile with name, publisher, monetization, likes, and usage.
 */
export function ResourceTile(e: {
  resource: any;
}): JSX.Element | null {
  let t: string, i: string, a: string;
  const {
    resource
  } = e;
  if (hasResourceType(resource)) {
    t = resource.name;
    i = resource.resource_type;
    a = buildCommunityUrl({
      resource
    }) || new URL(resource.rdp_url).pathname;
  } else {
    t = getCurrentVersion(resource).name;
    i = mapResourceTypePlural(resource);
    a = buildCommunityPathById({
      resource
    });
  }
  const likeStatus = getCommunityHubLikeStatus(resource.id, getResourceType(resource), !hasResourceType(resource)).data?.[0];
  const likeStatusByResourceId = getCommunityHubLikeStatusByResourceId(resource.id, hasResourceType(resource)).data?.[0];
  const searchSessionId = getSearchSessionIdFromSelector();
  const publishers = resource.community_publishers.accepted;
  const firstPublisher = publishers[0];
  const multiplePublishers = publishers.length > 1;
  const publisherName = EU(resource);
  if (!firstPublisher) return null;
  const publisherDisplay = multiplePublishers ? jsx(HoverDropdown, {
    className: classNames(LF, _W),
    preview: jsx(r5, {
      authors: publishers
    }),
    children: publisherName
  }) : jsx('span', {
    className: _W,
    children: publisherName
  });
  return jsxs('div', {
    className: UN,
    children: [jsxs('div', {
      className: rn,
      children: [jsx(Link, {
        to: a,
        onClick: () => {
          cB(i, resource.id, undefined, searchSessionId);
        },
        className: DD,
        children: t
      }), jsxs('div', {
        className: Tl,
        children: [jsx(Link, {
          className: multiplePublishers ? pV : cy,
          to: new ProfileRouteState({
            profileHandle: firstPublisher.profile_handle
          }).to,
          children: publisherDisplay
        }), jsxs('span', {
          className: v8,
          children: ['\xA0\xA0\u2022\xA0\xA0', jsx(ResourceMonetizationLabel, {
            resource
          })]
        })]
      })]
    }), jsxs('div', {
      className: o1,
      children: [jsx(LikeCountDisplay, {
        currentUserLiked: hasResourceType(resource) ? likeStatusByResourceId : likeStatus,
        likeCount: resource.like_count
      }), jsx(UsageCountDisplay, {
        usageCount: mk(resource)
      })]
    })]
  });
}

// Export refactored names for imports
export const my = ResourceTile;
export const cz = LikeCountDisplay;
export const i8 = UsageCountDisplay;