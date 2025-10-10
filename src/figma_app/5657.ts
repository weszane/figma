import o from 'classnames';
import { useRef, useState } from 'react';
import { Fragment, jsx, jsxs } from 'react/jsx-runtime';
import { renderI18nText } from '../905/303541';
import { UpgradeAction } from '../905/370443';
import { AutoLayout, Spacer } from '../905/470281';
import { setupThemeContext } from '../905/614223';
import { selectUserFlag } from '../905/940356';
import { cssBuilderInstance } from '../cssbuilder/589278';
import { useSetAtom } from '../figma_app/27355';
import { zu } from '../figma_app/61403';
import { checkUserAccess } from '../figma_app/242339';
import { el, h_, Lq, N2, qr, R3, wx } from '../figma_app/404712';
import { CR } from '../figma_app/419216';
import { H7, jr, Sf } from '../figma_app/467440';
import { WithTrackedButton } from '../figma_app/617427';
import { Spacing } from '../figma_app/637027';
import { TrackingProvider } from '../figma_app/831799';
import { x as _$$x } from '../figma_app/849451';
import { jK } from '../figma_app/989514';
let l = o;
let v = 'cursor_bot_tooltip--textInverseColor--sNGZA';
function A(e) {
  let t = e.shouldInverseColors ?? !1;
  let r = selectUserFlag('cursor_bot_v2_make_show_me_primary_cta');
  return jsxs(Fragment, {
    children: [jsx('h2', {
      className: l()(wx, {
        [v]: t
      }),
      children: e.title
    }), jsx(Spacing, {
      multiple: 1
    }), jsx('div', {
      className: l()(h_, {
        [v]: t
      }),
      children: e.children
    }), jsx('div', {
      className: qr,
      children: jsxs(AutoLayout, {
        verticalAlignItems: 'center',
        direction: 'horizontal',
        spacing: 8,
        children: [jsx('div', {
          className: l()({
            [cssBuilderInstance.colorTextOnbrand.$]: t,
            [cssBuilderInstance.colorTextSecondary.$]: !t
          }),
          children: e.lowerLeftText
        }), jsx(Spacer, {}), e.onSecondaryCtaClick && jsx(setupThemeContext, {
          mode: t ? 'dark' : void 0,
          children: jsx('div', {
            ref: r ? void 0 : e.showMeCtaRef,
            children: jsx(WithTrackedButton, {
              variant: 'secondary',
              onClick: e.onSecondaryCtaClick,
              trackingProperties: {
                ctaTrackingDescriptor: e.secondaryCtaProps?.ctaTrackingDescriptor || UpgradeAction.BACK
              },
              children: e.secondaryCtaProps?.ctaText || renderI18nText('tooltips_plus_onboarding.back')
            })
          })
        }), e.onPrimaryCtaClick && jsx(setupThemeContext, {
          mode: t ? 'light' : void 0,
          children: jsx('div', {
            ref: r ? e.showMeCtaRef : void 0,
            children: jsx(WithTrackedButton, {
              onClick: e.onPrimaryCtaClick,
              trackingProperties: {
                ctaTrackingDescriptor: e.primaryCtaProps?.ctaTrackingDescriptor || UpgradeAction.NEXT
              },
              variant: 'primary',
              disabled: t,
              children: e.primaryCtaProps?.ctaText || renderI18nText('tooltips_plus_onboarding.next')
            })
          })
        })]
      })
    })]
  });
}
export function $$x0(e) {
  let t = useRef(null);
  let r = useRef(null);
  let a = useRef(null);
  let o = useSetAtom(jr);
  let d = useSetAtom(Sf);
  let u = useSetAtom(H7);
  let [p, _] = useState(!1);
  let [h, v] = useState();
  let x = () => {
    let n = 0;
    let i = 0;
    if (t.current != null && r.current != null && a.current != null) {
      let {
        offsetTop,
        offsetHeight,
        offsetLeft,
        offsetWidth
      } = t.current;
      let h = Math.sqrt((n = offsetTop + offsetHeight / 2) ** 2 + (i = offsetLeft + offsetWidth / 2) ** 2);
      let m = [{
        top: `${n}px`,
        left: `${i}px`,
        width: '0px',
        height: '0px',
        borderRadius: '100%'
      }, {
        top: `${n - h}px`,
        left: `${i - h}px`,
        width: `${2 * h}px`,
        height: `${2 * h}px`,
        borderRadius: '100%',
        offset: 0.4166666666666667
      }, {
        top: `${n - h}px`,
        left: `${i - h}px`,
        width: `${2 * h}px`,
        height: `${2 * h}px`,
        borderRadius: '100%'
      }];
      r.current.animate(m, {
        duration: 600,
        easing: 'cubic-bezier(0.14, 0, 0.32, 1)'
      });
      setTimeout(() => {
        v('#007be5');
      }, 130);
      _(!0);
      let g = e.collapseToTopRight ? 'top right' : 'bottom right';
      let f = [{
        transform: 'scale(1)',
        transformOrigin: g
      }, {
        transform: 'scale(0)',
        transformOrigin: g,
        offset: 0.4166666666666667
      }, {
        transform: 'scale(0)',
        transformOrigin: g
      }];
      let E = a.current;
      setTimeout(() => {
        a.current != null && a.current.animate(f, {
          duration: 350,
          easing: 'ease-in'
        });
      }, 250);
      setTimeout(() => {
        _(!1);
        v(void 0);
      }, 350);
      let y = E.offsetLeft + E.offsetWidth;
      let T = e.collapseToTopRight ? E.offsetTop : E.offsetTop + E.offsetHeight;
      o(y);
      d(T);
      e.collapseToTopRight && u(zu.RIGHT);
    }
  };
  let N = checkUserAccess(['exp_cursor_bot_onboarding']);
  let C = selectUserFlag('cursor_bot_v2_make_show_me_primary_cta');
  return jsxs(TrackingProvider, {
    name: e.trackingContextName,
    properties: {
      isInCursorBotBasicsFile: N
    },
    children: [!e.disableHighlight && jsx(_$$x, {
      target: e.targetKey
    }), jsxs(CR, {
      ref: a,
      arrowPosition: e.arrowPosition,
      className: l()(R3, {
        [el]: e.pointsTo === 'designPanel',
        [N2]: e.pointsTo === 'toolbar',
        [Lq]: e.pointsTo === 'leftPanel'
      }),
      closeButtonClassName: p ? 'cursor_bot_tooltip--closeButtonInverseColor--CLQm3' : void 0,
      disableClickOutsideToHide: !0,
      dismissModal: e.dismissModal,
      hideCloseButton: e.hideCloseButton,
      hideIfTargetLost: !0,
      hidePointer: e.hidePointer,
      pointerForegroundColor: h,
      shouldCenterArrow: e.shouldCenterArrow,
      targetKey: e.targetKey,
      width: jK,
      children: [jsx('div', {
        className: cssBuilderInstance.overflowHidden.absolute.top0.left0.wFull.hFull.eventsNone.$,
        children: jsx('div', {
          className: 'cursor_bot_tooltip--expandingBlue--7HBiv',
          ref: r
        })
      }), jsx(A, {
        title: e.title,
        children: e.children,
        onSecondaryCtaClick: () => {
          if (C) {
            e.onSecondaryCtaClick?.();
            return;
          }
          x();
          setTimeout(() => {
            e.onSecondaryCtaClick?.();
          }, 500);
        },
        onPrimaryCtaClick: () => {
          if (!C) {
            e.onPrimaryCtaClick?.();
            return;
          }
          x();
          setTimeout(() => {
            e.onPrimaryCtaClick?.();
          }, 500);
        },
        secondaryCtaProps: e.secondaryCtaProps,
        primaryCtaProps: e.primaryCtaProps,
        showMeCtaRef: t,
        shouldInverseColors: p,
        lowerLeftText: e.lowerLeftText
      })]
    })]
  });
}
export const b = $$x0;