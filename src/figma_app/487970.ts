import { useSelector } from 'react-redux';
import { jsx } from 'react/jsx-runtime';
import { E } from '../905/53857';
import { renderI18nText } from '../905/303541';
import { getCommunityResourcePayment } from '../figma_app/4253';
import { hasFreemiumCode, hasMonetizedResourceMetadata, isThirdPartyMonetized } from '../figma_app/45218';
import { cs } from '../figma_app/740025';
import { getProductPriceString, isSubscriptionActive } from '../figma_app/808294';
function p(e) {
  let t = getProductPriceString(e.resource.monetized_resource_metadata);
  return jsx(E, {
    size: e.size,
    children: t
  });
}
export function $$_3({
  resource: e
}) {
  let t = useSelector(e => e.authedActiveCommunityProfile);
  let r = getCommunityResourcePayment(e);
  let c = isSubscriptionActive(r);
  return !cs(t) && c ? jsx(E, {
    variant: 'defaultOutline',
    children: renderI18nText('community.buyer.purchased')
  }) : null;
}
export function $$h2({
  size: e = 'md'
}) {
  return jsx(E, {
    size: e,
    children: renderI18nText('community.buyer.purchased')
  });
}
function m({
  size: e = 'md'
}) {
  return jsx(E, {
    size: e,
    children: renderI18nText('community.resource_tiles.paid')
  });
}
function g({
  size: e = 'md'
}) {
  return jsx(E, {
    size: e,
    children: renderI18nText('community.resource_tiles.paid')
  });
}
function f({
  size: e = 'md'
}) {
  return jsx(E, {
    size: e,
    children: renderI18nText('community.resource_tiles.free')
  });
}
export var $$E4 = (e => (e.PURCHASED = 'purchased', e.OFF_PLATFORM = 'off_platform', e.FREEMIUM = 'freemium', e.PRICE = 'price', e.FREE = 'free', e))($$E4 || {});
export function $$y1({
  resource: e,
  validBadges: t = Object.values($$E4)
}) {
  return $$b0({
    resource: e,
    validBadges: t,
    authedActiveCommunityProfile: useSelector(e => 'authedActiveCommunityProfile' in e ? e.authedActiveCommunityProfile : null)
  });
}
export function $$b0({
  resource: e,
  size: t = 'md',
  validBadges: r = Object.values($$E4),
  authedActiveCommunityProfile: i
}) {
  return e ? !(i && cs(i)) && hasMonetizedResourceMetadata(e) && e.community_resource_payment && isSubscriptionActive(e.community_resource_payment) ? r.includes('purchased') ? jsx($$h2, {
    size: t
  }) : null : hasFreemiumCode(e) ? r.includes('freemium') ? jsx(g, {
    size: t
  }) : null : hasMonetizedResourceMetadata(e) ? r.includes('price') ? jsx(p, {
    resource: e,
    size: t
  }) : null : isThirdPartyMonetized(e) ? r.includes('off_platform') ? jsx(m, {
    size: t
  }) : null : r.includes('free') ? jsx(f, {
    size: t
  }) : null : null;
}
export const $3 = $$b0;
export const QP = $$y1;
export const V6 = $$h2;
export const ai = $$_3;
export const op = $$E4;