import U from 'classnames';
import { useCallback, useEffect, useRef, useState } from 'react';
import { Fragment, jsx, jsxs } from 'react/jsx-runtime';
import { C as _$$C } from '../905/180';
import { s_ } from '../905/17223';
import { X as _$$X } from '../905/33014';
import { SubscriptionInterval, ProductStatus, isSubscription } from '../905/54385';
import { registerModal } from '../905/102752';
import { Ey, To } from '../905/148137';
import { hideModal } from '../905/156213';
import { resolveMessage } from '../905/231762';
import { x as _$$x } from '../905/233240';
import { HiddenLabel, Label } from '../905/270045';
import { Checkbox } from '../905/274480';
import { C as _$$C2 } from '../905/283236';
import { A as _$$A2 } from '../905/289352';
import { VisualBellActions } from '../905/302958';
import { getI18nString, renderI18nText } from '../905/303541';
import { b as _$$b, c as _$$c } from '../905/308099';
import { z as _$$z } from '../905/353894';
import { selectCurrentUser } from '../905/372672';
import { Ay as _$$Ay2 } from '../905/506641';
import { OJ } from '../905/519092';
import { getFeatureFlags } from '../905/601108';
import { customHistory } from '../905/612521';
import { logError, logWarning } from '../905/714362';
import { SvgComponent } from '../905/714743';
import { n as _$$n } from '../905/861286';
import { XHR } from '../905/910117';
import { sf } from '../905/929976';
import { s as _$$s2 } from '../905/932270';
import { _5, AA, AG, Be, C_, Cd, ck, DU, fI, h6, HC, IC, Ie, jH, JS, lA, Mt, nv, Oz, Ph, Pl, PX, r9, rb, SU, t$, TF, u7, UI, us, w1, Wz, xc, Yf, yu, yV } from '../905/941408';
import { G as _$$G } from '../905/971006';
import { A as _$$A7 } from '../1617/862644';
import { A as _$$A6 } from '../5724/883516';
import { A as _$$A5 } from '../6828/325173';
import { A as _$$A3 } from '../6828/871993';
import { s as _$$s } from '../cssbuilder/589278';
import { tgj } from '../figma_app/27776';
import { hasClientMeta, hasMonetizedResourceMetadata } from '../figma_app/45218';
import { FDomainVerificationStatusType } from '../figma_app/191312';
import { a6 } from '../figma_app/198840';
import { getPluginVersion } from '../figma_app/300692';
import { Tb } from '../figma_app/350203';
import { U3 } from '../figma_app/412189';
import { Vm } from '../figma_app/427318';
import { Cg, qD } from '../figma_app/471982';
import { SecureLink, EnhancedInput, BigButtonPrimary } from '../figma_app/637027';
import { VH } from '../figma_app/690075';
import { AC, Ul } from '../figma_app/777551';
import { parsePxNumber } from '../figma_app/783094';
import { bV, up } from '../figma_app/808294';
import { createEmptyAddress, DEFAULT_COUNTRY, JAPAN_COUNTRY } from '../figma_app/831101';
import { LoadingSpinner, LargeLoadingSpinner, LoadingOverlay } from '../figma_app/858013';
import { ModalView } from '../figma_app/918700';
import { Badge, BadgeColor } from '../figma_app/919079';
import { A as _$$A4 } from '../svg/228383';
import { A as _$$A8 } from '../svg/675271';
import { useDebouncedCallback } from 'use-debounce';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames';
function j({
  shippingAddress: e,
  setShippingAddress: t,
  vatGstId: i,
  setVatGstId: a,
  setIsVatIdValid: s,
  taxIdVerificationStatus: o
}) {
  let [l, d] = useState(Cg(e));
  let c = o === FDomainVerificationStatusType.UNVERIFIED;
  return jsxs('div', {
    children: [jsx('div', {
      className: _5,
      children: jsx(_$$x, {
        hasTaxIdVerificationError: c
      })
    }), l && jsxs('div', {
      className: h6,
      children: [jsx(_$$X, {
        address: e,
        updateAddress: t
      }), jsx(_$$A2, {
        onChange: a,
        country: e.country,
        vatId: i,
        setIsVatIdValid: s,
        hasTaxIdVerificationError: c,
        isCommunityCheckout: !0
      })]
    }), !l && jsxs(Fragment, {
      children: [jsx('div', {
        className: _$$s.pb8.$,
        children: jsx(_$$C2, {
          shippingAddress: e,
          vatGstId: i
        })
      }), jsx('button', {
        className: Be,
        onClick: () => d(!0),
        children: renderI18nText('general.edit')
      })]
    })]
  });
}
let B = U;
let H = 'checkout_promo_code_input--promoCodeApplyButton--x6XvK';
let W = 'checkout_promo_code_input--promoCodeCancelButton--atXkP';
function q({
  resource: e,
  promo_code: t
}) {
  return t ? isSubscription(e.monetized_resource_metadata) ? t.duration === -1 ? renderI18nText('community.buyer.sub_percent_off__forever', {
    percent_off: t.percent_off
  }) : renderI18nText('community.buyer.sub_percent_off', {
    percent_off: t.percent_off,
    duration: t.duration
  }) : renderI18nText('community.buyer.otp_percent_off', {
    percent_off: t.percent_off
  }) : null;
}
var $ = (e => (e.POSSIBLY_VALID = 'possibly_valid', e.VALID = 'valid', e.INVALID = 'invalid', e.TOO_SHORT = 'too_short', e.LOADING = 'loading', e))($ || {});
function Z({
  resource: e,
  disabled: t,
  initialValue: i,
  onValidate: a
}) {
  i && (typeof i != 'string' || i.length === 8) || (i = '');
  let [s, o] = useState(i.length === 8 ? 'possibly_valid' : 'too_short');
  let [l, d] = useState(i);
  let [c, p] = useState(null);
  let h = e => {
    o(e);
    p(null);
    a(null);
  };
  if (!e || !('third_party_m10n_status' in e) || e.third_party_m10n_status !== ProductStatus.MIGRATING) return null;
  let f = (() => {
    if (s === 'possibly_valid' || s === 'too_short') {
      return jsx('button', {
        className: H,
        disabled: s === 'too_short',
        onClick: () => {
          o('loading');
          XHR.post('/api/community/promo_codes/validate', {
            resource_type: Vm(e),
            resource_id: e.id,
            promo_code: l
          }).then(e => {
            e.data.meta.valid ? (o('valid'), p(e.data.meta), a({
              percent_off: e.data.meta.percent_off,
              duration: e.data.meta.duration,
              promo_code: e.data.meta.promo_code
            })) : h('invalid');
          }).catch(e => {
            h('invalid');
          });
        },
        children: renderI18nText('community.buyer.apply')
      });
    }
    let t = () => {
      d('');
      p(null);
      h('too_short');
    };
    return s === 'valid' ? jsxs('button', {
      className: 'checkout_promo_code_input--promoCodeApplyButton__validHover--KWTpH checkout_promo_code_input--promoCodeApplyButton--x6XvK',
      onClick: t,
      children: [jsx(SvgComponent, {
        className: 'checkout_promo_code_input--promoCodeCheckmark--ig7bR',
        svg: _$$A3
      }), jsx('div', {
        className: W,
        children: jsx(SvgComponent, {
          svg: _$$A4
        })
      })]
    }) : s === 'invalid' ? jsx('button', {
      className: H,
      onClick: t,
      children: jsx('div', {
        className: W,
        children: jsx(SvgComponent, {
          svg: _$$A4
        })
      })
    }) : s === 'loading' ? jsx('button', {
      className: 'checkout_promo_code_input--promoCodeApplyButton__loading--LAoMT checkout_promo_code_input--promoCodeApplyButton--x6XvK',
      children: jsx(LoadingSpinner, {})
    }) : void 0;
  })();
  return jsx(Fragment, {
    children: jsxs('div', {
      className: classNames({
        'checkout_promo_code_input--promoCodeInputWrapper--V6shV text--fontPos13--xW8hS text--_fontBase--QdLsd': !0,
        'checkout_promo_code_input--promoCodeInputWrapper__valid--zZrWf': s === 'valid',
        'checkout_promo_code_input--promoCodeInputWrapper__invalid--GFMsR': s === 'invalid',
        'checkout_promo_code_input--promoCodeInputWrapper__too_short--CDECY': s === 'too_short' || s === 'possibly_valid' || s === 'loading'
      }),
      children: [jsx(EnhancedInput, {
        className: 'checkout_promo_code_input--promoCodeInput--aypdF basic_form--labeledInputGroup--aeD6L',
        disabled: t,
        htmlName: 'promo_code',
        label: getI18nString('community.buyer.promo_code'),
        maxLength: 8,
        onChange: e => {
          e.target.value.length === 8 ? o('possibly_valid') : o('too_short');
          d(e.target.value);
        },
        onKeyPress: e => {
          /[A-Z0-9]/i.test(String.fromCharCode(e.which)) || e.preventDefault();
        },
        required: !0,
        trackingFieldName: 'Promo Code',
        value: l
      }), f, c && jsx('div', {
        className: classNames({
          'checkout_promo_code_input--promoCodeTerms--Ym4iT text--fontPos11--2LvXf text--_fontBase--QdLsd': !0,
          'checkout_promo_code_input--promoCodeTerms__visible--0LI3v': c !== null
        }),
        children: jsx(q, {
          resource: e,
          promo_code: c
        })
      }), jsx('div', {
        className: classNames({
          'checkout_promo_code_input--promoCodeError--Mw--L text--fontPos11--2LvXf text--_fontBase--QdLsd': !0,
          'checkout_promo_code_input--promoCodeError__visible--HBI59': s === 'invalid'
        }),
        children: renderI18nText('community.buyer.enter_valid_promo_code')
      })]
    })
  });
}
function X(e) {
  return jsxs('div', {
    className: _$$s.flex.flexColumn.alignCenter.gap12.$,
    children: [jsx(BigButtonPrimary, {
      onClick: e.submit,
      disabled: e.disabled || e.isLoading,
      fullWidth: !0,
      children: e.isLoading ? jsx(LoadingOverlay, {
        shouldMatchTextColor: !0
      }) : renderI18nText('community.buyer.complete_purchase')
    }), jsx('span', {
      children: renderI18nText('community.buyer.by_purchasing_you_agree_to_the_terms_of_service', {
        termsOfServiceLink: jsx(SecureLink, {
          href: 'https://www.figma.com/tos/',
          target: '_blank',
          trusted: !0,
          children: renderI18nText('general.terms_of_service')
        })
      })
    })]
  });
}
function J(e) {
  let t;
  let i;
  let r;
  let {
    priceInCents,
    taxAmountInCents,
    taxAmountWithPromoCodeInCents,
    promoCode,
    hasCalculatedTax,
    taxCalculationError,
    countryCode,
    trialDays,
    isSubscription,
    subscriptionInterval
  } = e;
  let _ = void 0 !== trialDays && trialDays > 0 && isSubscription;
  let A = null;
  if (_) {
    let e = new Date();
    e.setDate(e.getDate() + (trialDays || 0));
    A = e.toLocaleDateString(navigator.language, {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  }
  let y = (priceInCents || 0) + taxAmountInCents;
  priceInCents && (i = promoCode ? priceInCents * (1 - promoCode.percent_off / 100) + taxAmountWithPromoCodeInCents : priceInCents + taxAmountInCents, promoCode && (r = i - (priceInCents + taxAmountInCents)));
  let {
    newTotalAmount,
    promoCodeAmountString
  } = {
    newTotalAmount: i,
    promoCodeAmountString: r
  };
  let I = void 0 !== priceInCents ? up(priceInCents, !0) : jsx('div', {
    className: nv,
    children: getI18nString('community.buyer.tbd')
  });
  let E = void 0 !== newTotalAmount ? up(newTotalAmount, !0) : jsx('div', {
    className: nv,
    children: getI18nString('community.buyer.tbd')
  });
  isSubscription && priceInCents && (t = subscriptionInterval === SubscriptionInterval.MONTHLY ? renderI18nText('community.buyer.price_x_month', {
    priceString: up(priceInCents)
  }) : renderI18nText('community.buyer.price_x_year', {
    priceString: up(priceInCents, !0)
  }));
  return jsxs('div', {
    className: _$$s.flex.flexColumn.itemsStart.gap12.$,
    children: [jsx(ee, {
      header: renderI18nText('community.buyer.subtotal'),
      subheader: t,
      price: I
    }), jsx(ee, {
      header: function (e) {
        switch (e) {
          case DEFAULT_COUNTRY:
            return renderI18nText('community.buyer.sales_tax');
          case JAPAN_COUNTRY:
            return renderI18nText('community.buyer.jct');
          default:
            return renderI18nText('community.buyer.vat_gst');
        }
      }(countryCode),
      price: taxCalculationError ? jsx('span', {
        className: u7,
        children: taxCalculationError
      }) : hasCalculatedTax ? up(taxAmountInCents, !0) : jsx('span', {
        className: nv,
        children: renderI18nText('community.buyer.to_be_calculated')
      })
    }), promoCodeAmountString && jsx(ee, {
      adtlClassName: us,
      header: renderI18nText('community.buyer.promo_code'),
      price: up(promoCodeAmountString, !0)
    }), _ && jsx(ee, {
      header: renderI18nText('community.buyer.to_be_charged_on_date', {
        date: A
      }),
      price: promoCode ? E : up(y, !0)
    }), jsx('div', {
      className: Wz
    }), jsx(ee, {
      header: jsx('strong', {
        children: _ ? renderI18nText('community.buyer.total_due_today') : renderI18nText('community.buyer.total')
      }),
      price: _ ? up(0) : E,
      showUSDLabel: !0
    })]
  });
}
function ee(e) {
  return jsxs('div', {
    className: _$$s.flex.wFull.$ + (e.adtlClassName ? ` ${e.adtlClassName}` : ''),
    children: [jsxs('div', {
      className: _$$s.flexColumn.$,
      children: [jsx('div', {
        className: PX,
        children: e.header
      }), jsx('div', {
        className: DU,
        children: e.subheader
      })]
    }), jsx('div', {
      className: jH
    }), jsxs('div', {
      className: lA,
      children: [e.price, e.showUSDLabel && jsxs(Fragment, {
        children: ['\xA0', renderI18nText('community.seller.usd')]
      })]
    })]
  });
}
var ep = (e => (e.AMEX = 'amex', e.MASTERCARD = 'mastercard', e.VISA = 'visa', e))(ep || {});
function em(e) {
  switch (e.brand) {
    case 'amex':
      return jsx(SvgComponent, {
        svg: _$$A5,
        className: Ie,
        useOriginalSrcFills_DEPRECATED: !0
      });
    case 'mastercard':
      return jsx(SvgComponent, {
        svg: _$$A6,
        className: Ie,
        useOriginalSrcFills_DEPRECATED: !0
      });
    case 'visa':
      return jsx(SvgComponent, {
        svg: _$$A8,
        className: Ie,
        useOriginalSrcFills_DEPRECATED: !0
      });
    default:
      return jsx(SvgComponent, {
        svg: _$$A7,
        className: Ie,
        useOriginalSrcFills_DEPRECATED: !0
      });
  }
}
function eh(e) {
  let t = jsx('div', {
    children: renderI18nText('community.buyer.ending_in', {
      last4: jsx('strong', {
        children: e.paymentMethod.last4
      })
    })
  });
  let {
    disabled,
    onRemove,
    paymentMethod
  } = e;
  let o = useCallback(() => {
    disabled || onRemove(paymentMethod.payment_method_id);
  }, [disabled, onRemove, paymentMethod]);
  let d = jsxs('div', {
    className: _$$s.flex.gap12.alignCenter.$,
    children: [jsx('div', {
      className: IC,
      children: renderI18nText('community.buyer.exp', {
        expMonth: e.paymentMethod.exp_month.toLocaleString('en', {
          minimumIntegerDigits: 2
        }),
        expYear: e.paymentMethod.exp_year
      })
    }), jsx('div', {
      className: SU
    }), jsxs('div', {
      className: _$$s.flex.itemsCenter.gap8.$,
      children: [jsx(SecureLink, {
        onClick: o,
        trusted: !0,
        className: classNames(TF, {
          [t$]: e.isRemoveLoading,
          [r9]: e.disabled
        }),
        children: renderI18nText('general.remove')
      }), jsx(LoadingSpinner, {
        className: classNames(w1, {
          [xc]: e.isRemoveLoading
        }),
        size: 'small',
        shouldMatchTextColor: !0
      })]
    })]
  });
  return jsxs(Fragment, {
    children: [jsx(_$$Ay2, {
      mediaQuery: `(min-width: ${parsePxNumber(tgj)}px)`,
      children: jsx('div', {
        className: _$$s.flex.h32.wFull.itemsCenter.$,
        children: jsxs('div', {
          className: _$$s.flex.wFull.justifyBetween.$,
          children: [jsxs('div', {
            className: _$$s.flex.gap8.itemsCenter.$,
            children: [jsx(em, {
              brand: e.paymentMethod.brand
            }), t]
          }), e.isSelected && d]
        })
      })
    }), jsx(_$$Ay2, {
      mediaQuery: `(max-width: ${parsePxNumber(tgj) - 1}px)`,
      children: jsxs('div', {
        className: _$$s.flex.flexColumn.gap8.mt8.$,
        children: [jsxs('div', {
          className: _$$s.flex.gap8.itemsCenter.$,
          children: [jsx(em, {
            brand: e.paymentMethod.brand
          }), t]
        }), e.isSelected && jsx(Fragment, {
          children: d
        })]
      })
    })]
  });
}
function eg(e) {
  let t = !e.paymentMethods.length || !e.selectedPaymentMethodId;
  return jsxs('form', {
    children: [!e.hideReusePaymentUi && jsxs(_$$b, {
      value: e.selectedPaymentMethodId,
      onChange: t => {
        e.onSelectPaymentMethod(t);
      },
      legend: jsx(_$$s2, {
        children: jsx('span', {
          className: _$$s.fontSemiBold.$,
          children: renderI18nText('community.buyer.payment_details')
        })
      }),
      children: [e.paymentMethods.map((t, i) => jsxs('div', {
        className: _$$s.flex.itemsStart.$,
        children: [jsx(_$$c, {
          value: t.payment_method_id,
          readonly: e.disabled || void 0,
          label: jsx(HiddenLabel, {
            children: `${t.brand} ${t.last4}`
          })
        }), jsx(eh, {
          paymentMethod: t,
          index: i,
          onRemove: e.onRemoveCard,
          isSelected: e.selectedPaymentMethodId === t.payment_method_id,
          isRemoveLoading: e.isRemovingCard
        })]
      }, `payment-method-item--${t.payment_method_id}`)), jsx(_$$c, {
        value: '',
        readonly: e.disabled || void 0,
        label: jsx(Label, {
          children: renderI18nText('community.buyer.add_new_card')
        })
      })]
    }), t && jsxs(Fragment, {
      children: [jsx(_$$n, {
        billingAddress: e.address,
        canSeeBillingAddressExp: !1,
        cardId: 'community-checkout-card',
        disabled: e.disabled,
        id: 'community-checkout-form',
        isCommunityCheckout: !0,
        onBillingAddressChange: e.onAddressChange,
        onCardChange: e.onCardChange,
        onCardReady: e.onCardReady,
        onVatIdChange: e.setVatId,
        setIsVatIdValid: e.setIsVatIdValid,
        showAddressForm: !1,
        vatId: e.vatId
      }), jsx(Checkbox, {
        label: jsx(Label, {
          children: getI18nString('community.buyer.save_my_payment_info')
        }),
        checked: e.savePaymentInfo,
        onChange: e.onSetSavePaymentInfo,
        disabled: e.disabled
      })]
    })]
  });
}
function ef({
  annualDiscountPercentage: e,
  subscriptionInterval: t,
  setSubscriptionInterval: i
}) {
  return jsx('form', {
    children: jsx(_$$b, {
      value: t,
      onChange(e) {
        i(e);
      },
      legend: jsx(_$$s2, {
        children: jsx('span', {
          className: _$$s.fontSemiBold.$,
          children: renderI18nText('community.buyer.billing')
        })
      }),
      children: jsxs('div', {
        className: AG,
        children: [jsx(_$$c, {
          value: SubscriptionInterval.MONTHLY,
          label: jsx(Label, {
            children: renderI18nText('community.buyer.monthly')
          })
        }), jsx(_$$c, {
          value: SubscriptionInterval.ANNUALLY,
          label: jsxs(Label, {
            className: _$$s.flex.flexRow.itemsCenter.$,
            children: [renderI18nText('community.buyer.yearly'), jsx('div', {
              className: C_,
              children: renderI18nText('community.buyer.save_percent', {
                discountPercentage: e
              })
            })]
          })
        })]
      })
    })
  });
}
function eI() {
  return jsxs('svg', {
    width: '48',
    height: '48',
    viewBox: '0 0 48 48',
    fill: 'none',
    children: [jsxs('g', {
      clipPath: 'url(#clip0_500_16449)',
      children: [jsx('rect', {
        width: '48',
        height: '48',
        rx: '12',
        fill: 'var(--color-bg-hover, #F5F5F5)'
      }), jsx('path', {
        fillRule: 'evenodd',
        clipRule: 'evenodd',
        d: 'M24.2812 10.75C22.1823 10.75 20.8125 11.9708 20.8125 13.375C20.8125 14.0542 21.1076 14.7403 21.6377 15.2987C22.0278 15.7096 22.0059 16.2677 21.8973 16.6125C21.7923 16.9456 21.4574 17.5 20.7832 17.5H16C15.8619 17.5 15.75 17.6119 15.75 17.75V34.3125C15.75 34.4506 15.8619 34.5625 16 34.5625H32.5625C32.7006 34.5625 32.8125 34.4506 32.8125 34.3125V30.05C32.0689 30.6377 31.1561 31 30.1875 31C27.6307 31 26.0625 28.5922 26.0625 26.0312C26.0625 23.4703 27.6307 21.0625 30.1875 21.0625C31.1561 21.0625 32.0689 21.4248 32.8125 22.0125V17.75C32.8125 17.6119 32.7006 17.5 32.5625 17.5H27.7793C27.1051 17.5 26.7702 16.9456 26.6652 16.6125C26.5566 16.2677 26.5347 15.7096 26.9248 15.2987C27.4549 14.7403 27.75 14.0542 27.75 13.375C27.75 11.9708 26.3802 10.75 24.2812 10.75ZM19.3125 13.375C19.3125 10.8182 21.7203 9.25 24.2812 9.25C26.8422 9.25 29.25 10.8182 29.25 13.375C29.25 14.3436 28.8877 15.2564 28.3 16H32.5625C33.529 16 34.3125 16.7835 34.3125 17.75V22.5332C34.3125 23.2074 33.7581 23.5423 33.425 23.6473C33.0802 23.7559 32.5221 23.7778 32.1112 23.3877C31.5528 22.8576 30.8667 22.5625 30.1875 22.5625C28.7833 22.5625 27.5625 23.9323 27.5625 26.0312C27.5625 28.1302 28.7833 29.5 30.1875 29.5C30.8667 29.5 31.5528 29.2049 32.1112 28.6748C32.5221 28.2847 33.0802 28.3066 33.425 28.4152C33.7581 28.5202 34.3125 28.8551 34.3125 29.5293V34.3125C34.3125 35.279 33.529 36.0625 32.5625 36.0625H16C15.0335 36.0625 14.25 35.279 14.25 34.3125V17.75C14.25 16.7835 15.0335 16 16 16H20.2625C19.6748 15.2564 19.3125 14.3436 19.3125 13.375Z',
        fill: 'var(--color-icon-secondary, rgba(0, 0, 0, 0.5))'
      })]
    }), jsx('defs', {
      children: jsx('clipPath', {
        id: 'clip0_500_16449',
        children: jsx('rect', {
          width: '48',
          height: '48'
        })
      })
    })]
  });
}
function eE(e) {
  let {
    resource,
    localResource,
    subscriptionInterval
  } = e;
  return resource && Ul(resource) ? jsx(eS, {
    resource,
    subscriptionInterval
  }) : localResource ? jsx(ex, {
    localResource
  }) : null;
}
function ex({
  localResource: e
}) {
  let t = selectCurrentUser();
  return jsx(ew, {
    image: jsx(eI, {}),
    resourceName: e.name,
    authorName: t?.name || getI18nString('community.buyer.you'),
    subtitle: jsx(eC, {})
  });
}
function eS({
  resource: e,
  subscriptionInterval: t
}) {
  let i = hasClientMeta(e) ? a6(e) : getPluginVersion(e);
  let r = VH(e);
  let a = i.name;
  let s = hasClientMeta(e) ? e.thumbnail_url : i.redirect_icon_url;
  let o = jsx('img', {
    src: s,
    alt: 'Resource thumbnail'
  });
  let l = '';
  if (hasMonetizedResourceMetadata(e)) {
    if (e.monetized_resource_metadata.is_subscription) {
      let i = e.monetized_resource_metadata.trial_length_in_days || 0;
      let n = t === SubscriptionInterval.MONTHLY;
      let r = n ? up(e.monetized_resource_metadata.price) : up(e.monetized_resource_metadata.annual_price || 0, !0);
      let a = e?.community_resource_payment && e.community_resource_payment.subscription_expires_at;
      l = i > 0 && !a ? renderI18nText(n ? 'community.buyer.free_trial_then_price_month' : 'community.buyer.free_trial_then_price_year', {
        freeTrialDays: i,
        priceString: r
      }) : renderI18nText(n ? 'community.buyer.price_per_month_subscription' : 'community.buyer.price_per_year_subscription', {
        priceString: r
      });
    } else {
      l = renderI18nText('community.buyer.price_one_time_payment', {
        priceString: bV(e.monetized_resource_metadata)
      });
    }
  } else {
    l = jsx(eC, {});
  }
  return jsx(ew, {
    image: o,
    resourceName: a,
    authorName: r,
    subtitle: l
  });
}
function ew(e) {
  return jsxs('div', {
    children: [jsx('div', {
      className: Oz,
      children: e.image
    }), jsx('div', {
      className: JS,
      children: renderI18nText('community.publishing.resource_by_author', {
        resourceName: e.resourceName,
        authorName: e.authorName
      })
    }), jsx('div', {
      className: Pl,
      children: e.subtitle
    })]
  });
}
function eC() {
  return jsx('span', {
    className: Mt,
    children: renderI18nText('community.buyer.price_and_payment_cadence_will_appear_here')
  });
}
function eR(e) {
  let {
    resource,
    mobileScrollContainerRef
  } = e;
  let s = useDispatch();
  let o = useRef(null);
  let l = useCallback(() => {
    o.current && (mobileScrollContainerRef?.current?.scrollTop ? o.current.classList.add(HC) : o.current.classList.remove(HC));
  }, [o, mobileScrollContainerRef]);
  U3('scroll', l, !0);
  return jsxs('header', {
    className: UI,
    ref: o,
    children: [jsx(eE, {
      resource,
      localResource: e.localResource
    }), jsx(s_, {
      dispatch: s
    })]
  });
}
export let $$eN0 = registerModal(e => {
  let t;
  let {
    userId,
    resource,
    onSuccess,
    onCancel
  } = e;
  let D = e.resource && getFeatureFlags().community_hub_admin && AC(e.resource);
  let L = e.noInteractionMode && !!(e.localResource || D);
  let F = resource?.monetized_resource_metadata;
  let U = F?.id;
  let B = useDispatch();
  _$$G();
  let [V, G] = useState();
  let [z, H] = useState(!1);
  let [W, K] = useState(createEmptyAddress());
  let [Y, q] = useState('');
  let [$, Q] = useState(!0);
  let [ee, et] = useState('');
  let [ei, en] = useState(0);
  let [er, ea] = useState(null);
  let [es, el] = useState(!1);
  let [ed, ec] = useState(void 0);
  let [eu, ep] = useState(!0);
  let [em, eh] = useState([]);
  let [e_, eA] = useState('');
  let [ey, eb] = useState(!1);
  let [ev, eI] = useState(!L);
  let [ex, eS] = useState(!L);
  let [ew, eC] = useState(null);
  let [eT, ek] = useState(!1);
  let [eN, eP] = useState(SubscriptionInterval.MONTHLY);
  t = F?.is_subscription && F?.annual_discount_active_at && eN === SubscriptionInterval.ANNUALLY ? F?.annual_price || 0 : F?.price || 0;
  let eO = useRef(null);
  let eD = useCallback((e, t = {}) => ({
    message: e.message,
    statusCode: e.statusCode,
    monetized_resource_metadata_id: U,
    userId,
    ...t
  }), [U, userId]);
  let eL = useCallback((e, t) => {
    B(VisualBellActions.clearAll());
    B(VisualBellActions.enqueue({
      type: e,
      message: t || getI18nString('community.buyer.sorry_there_was_an_error_processing_your_request_refresh_and_try_again'),
      error: !0
    }));
  }, [B]);
  useEffect(() => {
    L || (_$$C.getBuyerPaymentMethods({
      userId
    }).then(({
      data: e
    }) => {
      let t = e.meta.payment_methods;
      eh(t);
      t.length && eA(t[0].payment_method_id);
      B(VisualBellActions.dequeue({
        matchType: 'fetch-payment-methods-error'
      }));
    }).catch(e => {
      logError('checkout', 'error fetching payment methods', eD(e), {
        reportAsSentryError: !0
      });
      eL('fetch-payment-methods-error', getI18nString('community.buyer.couldnt_fetch_existing_payment_method'));
    }).$$finally(() => {
      eI(!1);
    }), _$$C.getCommunityUserTaxInfo({
      userId
    }).then(({
      data: e
    }) => {
      e.meta.vat_gst_id && q(e.meta.vat_gst_id);
      e.meta.shipping_address && K(e.meta.shipping_address);
      e.meta.tax_id_verification_status && et(e.meta.tax_id_verification_status);
    }).catch(e => {
      logError('checkout', 'error fetching user tax info', eD(e), {
        reportAsSentryError: !0
      });
    }).$$finally(() => {
      eS(!1);
    }));
  }, [L, B, eL, eD, userId]);
  let eF = useSelector(e => e.selectedView);
  let eM = ei / 100 * t;
  let ej = resource?.community_resource_payment && resource.community_resource_payment.subscription_expires_at ? void 0 : F?.trial_length_in_days;
  let eU = er === null || ew === null ? null : er / 100 * (t * (1 - ew.percent_off / 100));
  let eB = useDebouncedCallback(useCallback(e => {
    el(!1);
    _$$C.getBuyerTax({
      userId,
      address: JSON.stringify(e),
      promoCode: ew?.promo_code,
      resourceId: U,
      userInputtedVatId: Y
    }).then(({
      data: e
    }) => {
      en(e.meta.tax_percent);
      void 0 !== e.meta.tax_percent_with_promo_code && ea(e.meta.tax_percent_with_promo_code);
      ec(void 0);
      B(VisualBellActions.dequeue({
        matchType: 'tax-calcuation-error'
      }));
    }).catch(e => {
      logWarning('checkout', 'error calculating taxes', eD({
        message: e.data.message,
        statusCode: e.data.status
      }, {
        promo_code: ew?.promo_code,
        vatId: Y
      }), {
        reportAsSentryError: !(e.data.status === 400 && e.data.reason === 'ADDRESS')
      });
      ec(resolveMessage(e));
    }).$$finally(() => {
      el(!0);
    });
  }, [B, U, userId, ew, eD, Y]), 500);
  useEffect(() => {
    if (L) return;
    let {
      line1,
      city,
      country,
      region,
      postal_code
    } = W;
    if (line1 && city && country && postal_code) {
      if (country === 'US' && !region) return;
      eB(W);
    } else {
      el(!1);
    }
  }, [W, Y, eB, L]);
  let eV = useCallback(async (e, t, n) => {
    try {
      let t = {
        payment_method: e,
        address: W,
        user_id: userId,
        save_payment_info: eu,
        promo_code: ew?.promo_code,
        subscription_interval: F?.is_subscription ? eN : null
      };
      void 0 !== n && (t.user_inputted_vat_id = n);
      await XHR.post(`/api/community/buyer/${U}/buy`, t);
      B(VisualBellActions.clearAll());
      B(hideModal());
      B(VisualBellActions.enqueue({
        message: getI18nString('community.buyer.purchase_complete'),
        error: !1
      }));
      onSuccess?.();
    } catch (e) {
      onCancel?.();
      logError('checkout', 'error completing purchase', eD(e, {
        promo_code: ew?.promo_code
      }), {
        reportAsSentryError: !0
      });
      e.message ? eL('purchasing-error', e.message) : eL('purchasing-error', getI18nString('community.buyer.couldnt_complete_purchase'));
    } finally {
      t?.();
    }
  }, [B, U, W, userId, eu, onSuccess, onCancel, eL, ew, eD, eN, F?.is_subscription]);
  let eG = useCallback(async () => {
    let e;
    let i;
    if (L) {
      B(hideModal());
      onSuccess?.();
      return;
    }
    if (B(VisualBellActions.clearAll()), B(VisualBellActions.enqueue({
      type: 'loading-purchase',
      message: getI18nString('community.buyer.hold_tight_while_we_process_your_payment')
    })), ek(!0), e_) {
      eV(e_, () => ek(!1), Y);
      return;
    }
    if (!V) {
      ek(!1);
      return;
    }
    try {
      e = await Ey(V);
    } catch (e) {
      logError('checkout', 'stripe token fetch error', eD(e), {
        reportAsSentryError: !0
      });
      eL('stripe-token-error', getI18nString('community.buyer.couldnt_process_payment_through_stripe'));
      ek(!1);
      return;
    }
    let n = e?.token?.id;
    if (void 0 === n) {
      logError('checkout', 'stripe token error', eD({
        message: e?.error?.message || 'stripe token error'
      }), {
        reportAsSentryError: !0
      });
      eL('stripe-token-error', getI18nString('community.buyer.error_stripe', {
        message: e?.error?.message || getI18nString('community.buyer.sorry_there_was_an_error_processing_your_request_refresh_and_try_again')
      }));
      ek(!1);
      return;
    }
    try {
      i = await To(n, t + eM);
    } catch (e) {
      onCancel?.();
      logError('checkout', 'error confirming payment', eD(e), {
        reportAsSentryError: !0
      });
      eL('payment-processing-error', e?.message);
      ek(!1);
      return;
    }
    let r = i?.payment_method;
    if (void 0 === r) {
      logError('checkout', 'error processing payment', eD({
        message: 'payment method is undefined'
      }), {
        reportAsSentryError: !0
      });
      eL('payment-processing');
      ek(!1);
      return;
    }
    eV(r, () => ek(!1), Y);
  }, [B, V, t, eM, eV, onCancel, onSuccess, L, e_, eL, eD, Y]);
  let ez = useCallback(() => {
    eT ? B(VisualBellActions.enqueue({
      type: 'close-during-purchase',
      message: getI18nString('community.buyer.please_remain_on_the_page'),
      error: !0,
      timeoutOverride: 2e3
    })) : (B(VisualBellActions.clearAll()), B(hideModal()), onCancel?.(), new URLSearchParams(customHistory.location.search).has(Tb) && B(sf({
      ...eF,
      triggerCheckout: void 0
    })));
  }, [B, onCancel, eF, eT]);
  let eH = !!em.length;
  let eW = L || es && (z || e_) && $;
  let eK = !!(L || eT);
  let eY = ev ? jsx(LargeLoadingSpinner, {}) : jsx(eg, {
    address: W,
    disabled: eK,
    hideReusePaymentUi: L || !eH,
    isRemovingCard: ey,
    onAddressChange: K,
    onCardChange: e => H(e.complete),
    onCardReady: G,
    onRemoveCard(e) {
      eb(!0);
      XHR.del(`/api/community/buyer/payment_method/${e}`).then(() => {
        let t = em.filter(t => t.payment_method_id !== e);
        eh(t);
        eA(t[0]?.payment_method_id || '');
        B(VisualBellActions.dequeue({
          matchType: 'remove-card-error'
        }));
      }).catch(e => {
        logError('checkout', 'error removing card', eD(e), {
          reportAsSentryError: !0
        });
        eL('remove-card-error', getI18nString('community.buyer.couldnt_remove_existing_payment_method'));
      }).$$finally(() => {
        eb(!1);
      });
    },
    onSelectPaymentMethod: eA,
    onSetSavePaymentInfo: ep,
    paymentMethods: em,
    savePaymentInfo: eu,
    selectedPaymentMethodId: e_
  });
  let eq = F?.annual_discount_active_at && F?.annual_discount_percentage ? jsx(ef, {
    annualDiscountPercentage: F.annual_discount_percentage,
    subscriptionInterval: eN,
    setSubscriptionInterval: eP
  }) : null;
  let e$ = jsx(J, {
    countryCode: W.country,
    hasCalculatedTax: es,
    isSubscription: !!F?.is_subscription,
    priceInCents: t,
    promoCode: ew,
    subscriptionInterval: eN,
    taxAmountInCents: eM,
    taxAmountWithPromoCodeInCents: eU,
    taxCalculationError: ed,
    trialDays: ej
  });
  let eZ = jsx(Z, {
    initialValue: new URLSearchParams(customHistory.location.search).get(Tb),
    resource,
    disabled: eK || !!e.localResource,
    onValidate: eC
  });
  let eX = jsx(j, {
    vatGstId: Y,
    setVatGstId: q,
    setIsVatIdValid: Q,
    shippingAddress: W,
    setShippingAddress: K,
    taxIdVerificationStatus: ee
  });
  let eQ = jsx(X, {
    submit: eG,
    isLoading: eT,
    disabled: !eW
  });
  return jsxs(Fragment, {
    children: [jsx(_$$z, {
      query: `(min-width: ${parsePxNumber(tgj)}px)`,
      children: jsx(OJ, {
        title: jsxs('div', {
          children: [function (e, t) {
            let i = e ? qD(e)?.name : t ? t.manifest.name : void 0;
            return i !== 'undefined' && e && F && F.is_subscription ? renderI18nText('community.buyer.subscribe_to_resource_name', {
              resourceName: i
            }) : renderI18nText('community.buyer.purchase_resource_name', {
              resourceName: i
            });
          }(e.resource, e.localResource), (e.localResource || D) && jsx(Badge, {
            text: e.localResource ? renderI18nText('community.buyer.development') : renderI18nText('community.plugins.in_review'),
            color: BadgeColor.WARNING,
            className: Ph
          })]
        }),
        headerClassName: _$$s.font13.mx8.$,
        headerSize: 'large',
        onClose: ez,
        maxWidth: 864,
        disableClickOutsideToHide: eT,
        children: jsxs('div', {
          className: rb,
          children: [jsxs('div', {
            className: Cd,
            children: [!!F?.annual_discount_active_at && jsx('div', {
              className: ck,
              children: eq
            }), jsx('div', {
              className: fI,
              children: eY
            }), !ex && jsx('div', {
              className: yV,
              children: eX
            })]
          }), jsx('div', {
            className: SU
          }), jsxs('div', {
            className: yu,
            children: [jsx(eE, {
              resource: e.resource,
              localResource: e.localResource,
              subscriptionInterval: eN
            }), jsx('div', {
              className: _$$s.my24.$,
              children: eZ
            }), jsx('div', {
              className: jH
            }), jsxs('div', {
              className: _$$s.flex.flexColumn.gap32.$,
              children: [e$, eQ]
            })]
          })]
        })
      })
    }), jsx(_$$z, {
      query: `(max-width: ${parsePxNumber(tgj) - 1}px)`,
      children: jsxs(ModalView, {
        hide: ez,
        className: Yf,
        useModalViewScroll: !1,
        disableClickOutsideToHide: eT,
        children: [jsx(eR, {
          resource,
          localResource: e.localResource,
          mobileScrollContainerRef: eO
        }), jsxs('div', {
          ref: eO,
          className: AA,
          children: [eq, eY, eZ, !ex && eX, jsxs('div', {
            className: _$$s.flex.flexColumn.gap32.$,
            children: [e$, eQ]
          })]
        })]
      })
    })]
  });
}, 'CommunityCheckoutModal');
export const h = $$eN0;