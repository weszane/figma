import a from 'classnames';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { jsx, jsxs } from 'react/jsx-runtime';
import { _W, aS, Au, cy, DD, dv, LF, o1, pV, rn, Tl, UN, v8, Vh, Yr } from '../905/105487';
import { renderI18nText } from '../905/303541';
import { SvgComponent } from '../905/714743';
import { B as _$$B, W } from '../905/841666';
import { ProfileRouteState } from '../905/934145';
import { A as _$$A } from '../6828/379561';
import { hasFreemiumCode, hasMonetizedResourceMetadata, isThirdPartyMonetized } from '../figma_app/45218';
import { So } from '../figma_app/209680';
import { Jm } from '../figma_app/387599';
import { getResourceType, hasResourceType } from '../figma_app/427318';
import { buildCommunityPathById, buildCommunityUrl, getCurrentVersion, mapResourceTypePlural } from '../figma_app/471982';
import { isOrgOrTeamExport } from '../figma_app/740025';
import { cB, mk } from '../figma_app/777551';
import { getProductPriceString, isSubscriptionActive } from '../figma_app/808294';
import { EU } from '../figma_app/835219';
import { formatNumber } from '../figma_app/930338';
import { r5 } from '../figma_app/947784';
let s = a;
function d() {
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
let f = 'monetization_labels--monetizationLabel--IHaDi text--fontPos11--2LvXf text--_fontBase--QdLsd';
function _({
  resource: e
}) {
  let t = getProductPriceString(e.monetized_resource_metadata);
  return jsx('span', {
    className: f,
    children: t
  });
}
function A() {
  return jsx('span', {
    className: 'monetization_labels--purchasedLabel--RGbrF text--fontPos11--2LvXf text--_fontBase--QdLsd',
    children: renderI18nText('community.buyer.purchased')
  });
}
function y() {
  return jsx('span', {
    className: f,
    children: renderI18nText('community.resource_tiles.paid')
  });
}
function b() {
  return jsx('span', {
    className: f,
    children: renderI18nText('community.resource_tiles.free')
  });
}
function v({
  resource: e
}) {
  let t = useSelector(e => 'authedActiveCommunityProfile' in e ? e.authedActiveCommunityProfile : null);
  return e ? !(t && isOrgOrTeamExport(t)) && hasMonetizedResourceMetadata(e) && e.community_resource_payment && isSubscriptionActive(e.community_resource_payment) ? jsx(A, {}) : hasFreemiumCode(e) ? jsx(y, {}) : hasMonetizedResourceMetadata(e) ? jsx(_, {
    resource: e
  }) : isThirdPartyMonetized(e) ? jsx(y, {}) : jsx(b, {}) : null;
}
export function $$O1({
  likeCount: e,
  currentUserLiked: t,
  inPluginRow: i,
  disableFontStyling: r
}) {
  let a = r ? void 0 : i ? Yr : Vh;
  return jsxs('div', {
    className: s()(t ? aS : dv, a),
    children: [jsx(d, {}), formatNumber(e)]
  });
}
export function $$D2({
  usageCount: e,
  inPluginRow: t,
  disableFontStyling: i
}) {
  let r = i ? void 0 : t ? Yr : Vh;
  return jsxs('div', {
    className: s()(Au, r),
    children: [jsx(SvgComponent, {
      svg: _$$A
    }), formatNumber(e)]
  });
}
export function $$L0(e) {
  let t;
  let i;
  let a;
  let {
    resource
  } = e;
  hasResourceType(resource) ? (t = resource.name, i = resource.resource_type, a = buildCommunityUrl({
    resource
  }) || new URL(resource.rdp_url).pathname) : (t = getCurrentVersion(resource).name, i = mapResourceTypePlural(resource), a = buildCommunityPathById({
    resource
  }));
  let l = W(resource.id, getResourceType(resource), !hasResourceType(resource)).data?.[0];
  let d = _$$B(resource.id, hasResourceType(resource)).data?.[0];
  let c = Jm();
  let u = resource.community_publishers.accepted;
  let p = u[0];
  let m = u.length > 1;
  let h = EU(resource);
  if (!p) return null;
  let g = m ? jsx(So, {
    className: s()(LF, _W),
    preview: jsx(r5, {
      authors: u
    }),
    children: h
  }) : jsx('span', {
    className: _W,
    children: h
  });
  return jsxs('div', {
    className: UN,
    children: [jsxs('div', {
      className: rn,
      children: [jsx(Link, {
        to: a,
        onClick: e => {
          cB(i, resource.id, void 0, c);
        },
        className: DD,
        children: t
      }), jsxs('div', {
        className: Tl,
        children: [jsx(Link, {
          className: m ? pV : cy,
          to: new ProfileRouteState({
            profileHandle: p.profile_handle
          }).to,
          children: g
        }), jsxs('span', {
          className: v8,
          children: ['\xA0\xA0\u2022\xA0\xA0', jsx(v, {
            resource
          })]
        })]
      })]
    }), jsxs('div', {
      className: o1,
      children: [jsx($$O1, {
        currentUserLiked: hasResourceType(resource) ? d : l,
        likeCount: resource.like_count
      }), jsx($$D2, {
        usageCount: mk(resource)
      })]
    })]
  });
}
export const my = $$L0;
export const cz = $$O1;
export const i8 = $$D2;