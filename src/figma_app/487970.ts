import { jsx } from "react/jsx-runtime";
import { useSelector } from "../vendor/514228";
import { E } from "../905/53857";
import { tx } from "../905/303541";
import { I } from "../figma_app/4253";
import { bV, QQ } from "../figma_app/808294";
import { cs } from "../figma_app/740025";
import { PM, m3, zF } from "../figma_app/45218";
import { t as _$$t } from "../905/344937";
function p(e) {
  let t = bV(e.resource.monetized_resource_metadata);
  return jsx(E, {
    size: e.size,
    children: t
  });
}
export function $$_3({
  resource: e
}) {
  let t = useSelector(e => e.authedActiveCommunityProfile);
  let r = I(e);
  let c = QQ(r);
  return !cs(t) && c ? jsx(E, {
    variant: "defaultOutline",
    children: tx("community.buyer.purchased")
  }) : null;
}
export function $$h2({
  size: e = "md"
}) {
  return jsx(E, {
    size: e,
    children: tx("community.buyer.purchased")
  });
}
function m({
  size: e = "md"
}) {
  return jsx(E, {
    size: e,
    children: tx("community.resource_tiles.paid")
  });
}
function g({
  size: e = "md"
}) {
  return jsx(E, {
    size: e,
    children: tx("community.resource_tiles.paid")
  });
}
function f({
  size: e = "md"
}) {
  return jsx(E, {
    size: e,
    children: tx("community.resource_tiles.free")
  });
}
export var $$E4 = (e => (e.PURCHASED = "purchased", e.OFF_PLATFORM = "off_platform", e.FREEMIUM = "freemium", e.PRICE = "price", e.FREE = "free", e))($$E4 || {});
export function $$y1({
  resource: e,
  validBadges: t = Object.values($$E4)
}) {
  return $$b0({
    resource: e,
    validBadges: t,
    authedActiveCommunityProfile: useSelector(e => "authedActiveCommunityProfile" in e ? e.authedActiveCommunityProfile : null)
  });
}
export function $$b0({
  resource: e,
  size: t = "md",
  validBadges: r = Object.values($$E4),
  authedActiveCommunityProfile: i
}) {
  return e ? !(i && cs(i)) && _$$t(e) && e.community_resource_payment && QQ(e.community_resource_payment) ? r.includes("purchased") ? jsx($$h2, {
    size: t
  }) : null : PM(e) ? r.includes("freemium") ? jsx(g, {
    size: t
  }) : null : m3(e) ? r.includes("price") ? jsx(p, {
    resource: e,
    size: t
  }) : null : zF(e) ? r.includes("off_platform") ? jsx(m, {
    size: t
  }) : null : r.includes("free") ? jsx(f, {
    size: t
  }) : null : null;
}
export const $3 = $$b0;
export const QP = $$y1;
export const V6 = $$h2;
export const ai = $$_3;
export const op = $$E4;