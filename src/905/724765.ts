import { legacyMerge } from '@stylexjs/stylex';
import { useEffect, useRef } from 'react';
import { jsx, jsxs } from 'react/jsx-runtime';
import { ModalRootComponent } from '../905/38914';
import { registerModal } from '../905/102752';
import { h as _$$h } from '../905/207101';
import { renderI18nText } from '../905/303541';
import { c as _$$c } from '../905/370443';
import { T } from '../905/434246';
import { useModalManager } from '../905/437088';
import { g as _$$g } from '../905/687265';
import { generateUUIDv4 } from '../905/871474';
import { Xr } from '../figma_app/27355';
import { FProductAccessType } from '../figma_app/191312';
import { MQ } from '../figma_app/197432';
import { jk, nB, r1, vo, wi } from '../figma_app/272243';
import { $z } from '../figma_app/617427';
import { TrackingProvider } from '../figma_app/831799';
let v = {
  title: {
    ..._$$g.textBodyMediumStrong,
    $$css: !0
  }
};
function I(e) {
  let t = useModalManager(e);
  !function (e = !0) {
    let t = Xr(MQ);
    let i = useRef(generateUUIDv4());
    useEffect(() => {
      t(i.current, e);
    }, [i, e, t]);
    _$$h(() => () => {
      t(i.current, !1);
    });
  }();
  return jsx(ModalRootComponent, {
    manager: t,
    width: 340,
    children: jsxs(vo, {
      children: [jsx(r1, {
        children: jsx('div', {
          children: renderI18nText('1_click_expansion.you_now_have_full_access')
        })
      }), jsxs(nB, {
        children: [jsx('div', {
          className: 'x1v4kod4 x14p8jc9 x13ktmxq x1n2onr6',
          children: jsx(T, {
            licenseType: FProductAccessType.DESIGN
          })
        }), jsx('div', {
          className: 'x1vi7shn',
          children: e.children
        })]
      }), jsx(wi, {
        children: jsx(jk, {
          children: jsx($z, {
            autoFocus: !0,
            variant: 'primary',
            onClick: e.onRequestUpgrade || e.onClose,
            trackingProperties: {
              trackingDescriptor: _$$c.CONTINUE
            },
            children: renderI18nText('request_upgrade.continue_button')
          })
        })
      })]
    })
  });
}
export let $$E0 = registerModal(e => {
  return jsx(TrackingProvider, {
    name: 'Ask To Edit One Click Auto Confirmation Modal',
    children: jsxs(I, {
      ...e,
      children: [jsx('div', {
        ...legacyMerge.props(v.title),
        children: renderI18nText('1_click_expansion.you_now_have_full_access')
      }), jsx('div', {
        className: 'x1vi7shn',
        children: renderI18nText('1_click_expansion.you_now_have_a_full', {
          planName: e.planName
        })
      })]
    })
  });
});
export const $ = $$E0;