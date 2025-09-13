import a from 'classnames';
import { jsx, jsxs } from 'react/jsx-runtime';
import { isSubscription } from '../905/54385';
import { KindEnum } from '../905/129884';
import { renderI18nText } from '../905/303541';
import { trackEventAnalytics } from '../905/449184';
import { e0 } from '../905/696396';
import { O as _$$O } from '../905/791978';
import { s as _$$s } from '../cssbuilder/589278';
import { ShelfViewType, isMonetizedWithClientMeta, isPlugin, hasMonetizedResourceMetadata, hasClientMeta, isWidget, isThirdPartyMonetized } from '../figma_app/45218';
import { EditorType } from '../figma_app/155287';
import { FTemplateCategoryType } from '../figma_app/191312';
import { Dl } from '../figma_app/471982';
import { e6 } from '../figma_app/617427';
import { bV, Lt } from '../figma_app/808294';
import { DefaultLoadingSpinner } from '../figma_app/858013';
let s = a;
let b = 'purchase_button_view--primaryText--TzFkq';
export function $$T3(e, t, r, n) {
  trackEventAnalytics('cmty_redirect_purchase_button_click', {
    context: t,
    resource_type: Dl(e),
    resource_id: e.id,
    user_id: r,
    profile_id: n
  });
}
export function $$I2(e, t, r, n) {
  trackEventAnalytics('cmty_purchase_button_click', {
    context: t,
    resource_type: Dl(e),
    resource_id: e.id,
    user_id: r,
    profile_id: n
  });
}
export function $$S1({
  resource: e,
  payment: t,
  context: r,
  tooltipText: a,
  disabled: o = !1,
  isLoading: p = !1,
  onClick: T = () => {},
  onGetFreePreview: I = () => {},
  enableWideButtonForStickyFooter: S,
  enableCondensedWideButtonForStickyFooter: A
}) {
  if (!hasMonetizedResourceMetadata(e) && !isThirdPartyMonetized(e)) return null;
  let x = hasMonetizedResourceMetadata(e);
  let N = !!(hasClientMeta(e) && e.viewer_mode === FTemplateCategoryType.WHITEBOARD || (isPlugin(e) || isWidget(e)) && e.editor_type === EditorType.FIGJAM);
  let C = r === ShelfViewType.DETAIL && isMonetizedWithClientMeta(e);
  let w = renderI18nText('community.buyer.preview');
  let O = jsx(e6, {
    onClick: I,
    className: 'purchase_button_view--previewButton--d8Fc0',
    trackingProperties: {
      name: e0.COMMUNITY_HUB_FILE_PREVIEW_BUTTON
    },
    children: jsx('span', {
      className: 'purchase_button_view--previewText--QuDMh text--fontNeg14--ARPWl text--_fontBase--QdLsd text--_negText--j9g-L',
      children: w
    })
  });
  let R = r === ShelfViewType.PLUGIN_ROW || r === ShelfViewType.REDESIGNED_PLUGIN_ROW;
  return jsxs('div', {
    className: s()('purchase_button_view--purchaseButtonView--ZeLJW', {
      'purchase_button_view--purchaseButtonViewCondensed--M5D0j': r === ShelfViewType.INSERTS
    }),
    children: [jsxs('div', {
      className: 'purchase_button_view--buttonRow--ZYajj',
      children: [jsxs('button', {
        'data-tooltip-type': o && !p && a ? KindEnum.TEXT : void 0,
        'data-tooltip': o && !p && a ? a : void 0,
        'data-tooltip-show-immediately': !0,
        'className': s()({
          'purchase_button_view--purchaseButton--wzhif': !R,
          'purchase_button_view--purchaseButtonInPluginRowFigma--xHcMN purchase_button_view--pluginRowButton--3-urM': r === ShelfViewType.PLUGIN_ROW && !N,
          'purchase_button_view--purchaseButtonInPluginRowFigjam--6ClQE purchase_button_view--pluginRowButton--3-urM': r === ShelfViewType.PLUGIN_ROW && N,
          'purchase_button_view--purchaseButtonInRedesignedPluginRow--XjXwF text--fontPos11--2LvXf text--_fontBase--QdLsd': r === ShelfViewType.REDESIGNED_PLUGIN_ROW,
          'purchase_button_view--purchaseButtonLarge--iCRT- text--fontNeg14--ARPWl text--_fontBase--QdLsd text--_negText--j9g-L': r !== ShelfViewType.INSERTS && r !== ShelfViewType.REDESIGNED_PLUGIN_ROW,
          'purchase_button_view--purchaseButtonSmall--lodYh text--fontPos11--2LvXf text--_fontBase--QdLsd ellipsis--ellipsis--Tjyfa': r === ShelfViewType.INSERTS,
          'purchase_button_view--purchaseButtonWide--ZXR-S': S,
          'purchase_button_view--purchaseButtonWideCondensed--AssEb': A,
          'purchase_button_view--figjam--alLiu': !R && N,
          'purchase_button_view--disabled--wN7tn': o
        }),
        'disabled': p || o,
        'onClick': T,
        'data-testid': 'community-purchase-button',
        'children': [p && jsx(DefaultLoadingSpinner, {}), isThirdPartyMonetized(e) && jsx(_$$O, {
          style: {
            '--color-icon': 'white'
          }
        }), !R && jsx('div', {
          style: {
            opacity: p ? 0 : 1
          },
          className: b,
          children: x && isSubscription(e.monetized_resource_metadata) ? renderI18nText('community.buyer.subscribe') : isThirdPartyMonetized(e) ? renderI18nText('community.buyer.buy_third_party_monetized') : renderI18nText('community.buyer.buy')
        }), jsx('div', {
          style: {
            opacity: p ? 0 : 1
          },
          className: s()({
            'purchase_button_view--secondaryText--P5Gzo': !R,
            [b]: r === ShelfViewType.PLUGIN_ROW,
            [_$$s.colorText.$]: r === ShelfViewType.REDESIGNED_PLUGIN_ROW
          }),
          children: x && bV(e.monetized_resource_metadata)
        })]
      }), C && O]
    }), r === ShelfViewType.DETAIL && x && Lt({
      resource: e,
      payment: t
    }) && jsx($$v0, {
      metadata: e.monetized_resource_metadata
    })]
  });
}
export function $$v0({
  metadata: e,
  condensed: t
}) {
  return jsx('span', {
    className: t ? 'purchase_button_view--freeTrialCondensed--zoo-d text--fontPos9--naThA text--_fontBase--QdLsd' : 'purchase_button_view--freeTrial--KSIhj text--fontPos13--xW8hS text--_fontBase--QdLsd',
    children: t ? renderI18nText('community.resource.free_trial_days', {
      days: e.trial_length_in_days
    }) : renderI18nText('community.resource.includes_free_trial_days', {
      days: e.trial_length_in_days
    })
  });
}
export const w5 = $$v0;
export const fM = $$S1;
export const mG = $$I2;
export const Uj = $$T3;