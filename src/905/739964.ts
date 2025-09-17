import p from 'classnames'
import { Suspense, useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Fragment, jsx, jsxs } from 'react/jsx-runtime'
import { consumptionPaywallUtils } from '../905/224'
import { getRumLoggingConfig } from '../905/16237'
import { CloseButton } from '../905/17223'
import { cw, Fq, I8, jv, vK, vu, yF } from '../905/84777'
import { registerModal } from '../905/102752'
import { g as _$$g } from '../905/125190'
import { ServiceCategories as _$$e } from '../905/165054'
import { UpsellModalType } from '../905/165519'
import { VisualBellActions } from '../905/302958'
import { getI18nString, renderI18nText } from '../905/303541'
import { N_, Oq } from '../905/332483'
import { $ as _$$$ } from '../905/379902'
import { w4, y1 } from '../905/445814'
import { AutoLayout } from '../905/470281'
import { ProductAccessTypeEnum } from '../905/513035'
import { q as _$$q } from '../905/636218'
import { FeatureFlag } from '../905/652992'
import { IX, Ju } from '../905/712921'
import { H4, tH } from '../905/751457'
import { N as _$$N } from '../905/809096'
import { h as _$$h } from '../905/864281'
import { sx } from '../905/941192'
import { s as _$$s } from '../cssbuilder/589278'
import { TeamCanEdit } from '../figma_app/43951'
import { isNotNullish } from '../figma_app/95419'
import { E as _$$E } from '../figma_app/126651'
import { BC } from '../figma_app/149367'
import { FFileType, FOrganizationLevelType } from '../figma_app/191312'
import { hK } from '../figma_app/211706'
import { AG } from '../figma_app/217457'
import { useSubscription } from '../figma_app/288654'
import { sx as _$$sx } from '../figma_app/307841'
import { G as _$$G } from '../figma_app/361869'
import { Jh } from '../figma_app/441925'
import { useCurrentPublicPlan } from '../figma_app/465071'
import { throwTypeError } from '../figma_app/465776'
import { CurrencyFormatter, getUserCurrency } from '../figma_app/514043'
import { handleSuspenseRetainRelease } from '../figma_app/566371'
import { Ih } from '../figma_app/617427'
import { linkWithTracking, Spacing } from '../figma_app/637027'
import { getProductAccessTypeFromFileType } from '../figma_app/765689'
import { TrackingProvider } from '../figma_app/831799'
import { utilityNoop } from '../figma_app/918700'
import { Badge, BadgeColor, BadgeSize } from '../figma_app/919079'

let m = p
let Q = 'consumption_paywall_modals--planDescription--cFNva'
function J(e) {
  let {
    text,
    hoverText,
  } = e.item
  let [a, s] = useState(!1)
  let o = jsx('span', {
    style: e.hideMarker
      ? {
          visibility: 'hidden',
        }
      : void 0,
    children: e.disabled
      ? jsx(_$$q, {
          style: {
            '--color-icon': 'var(--color-icon-secondary)',
          },
        })
      : jsx(_$$g, {
          style: {
            '--color-icon': 'var(--color-icon-secondary)',
          },
        }),
  })
  return jsx('div', {
    'data-testid': e.dataTestId,
    'onMouseLeave': () => {
      hoverText && s(!1)
    },
    'onMouseOver': () => {
      hoverText && s(!0)
    },
    'className': m()({
      'consumption_paywall_modals--planFeatureDisabled--0yd7z': e.grayedOut,
      'consumption_paywall_modals--planFeatureParent--NBBWh': !0,
    }),
    'children': jsxs('div', {
      className: _$$s.flex.$,
      children: [hoverText && jsxs('span', {
        className: m()({
          'consumption_paywall_modals--planFeatureHoverState--hpPa3': a,
          'consumption_paywall_modals--planFeatureHoverStateHidden--pQLiS consumption_paywall_modals--planFeatureHoverState--hpPa3': !a,
        }),
        children: [hoverText, jsx('div', {
          className: 'consumption_paywall_modals--planFeatureHoverTriangle--6X--5',
        })],
      }), o, jsx('p', {
        onMouseOver: () => {
          hoverText && s(!0)
        },
        className: m()({
          'consumption_paywall_modals--planFeatureHoverable--mqLZi': !!hoverText,
        }, _$$s.lh24.$),
        children: text,
      })],
    }),
  })
}
function ee({
  editorType: e,
}) {
  let t = jsx(linkWithTracking, {
    href: e === 'whiteboard' ? 'https://www.figma.com/pricing/#figjam' : 'https://www.figma.com/pricing/#cid-57mfNh6t0Xo7z8Q95Ww9ZV',
    target: '_blank',
    className: m()(e === 'whiteboard' && 'consumption_paywall_modals--figjamLink---aC7d'),
    trusted: !0,
    children: renderI18nText('consumption_paywalls.see_all_features'),
  })
  return jsx(J, {
    item: {
      text: t,
    },
    hideMarker: !0,
  })
}
function et({
  planDescription: e,
}) {
  return jsxs(Fragment, {
    children: [jsx('p', {
      className: Q,
      children: e,
    }), jsx(hK, {
      height: 16,
    }), jsx('div', {
      'className': 'consumption_paywall_modals--starterPriceRow--ZBFoR',
      'style': {
        height: 34,
      },
      'data-testid': 'pricing-starter',
      'children': jsx('div', {
        className: 'consumption_paywall_modals--costText--kn5ud text--fontPos16--oMC-G text--_fontBase--QdLsd',
        children: renderI18nText('consumption_paywalls.free'),
      }),
    })],
  })
}
function ei({
  planDescription: e,
}) {
  return jsxs('div', {
    className: _$$s.flex.flexColumn.justifyBetween.hFull.$,
    children: [jsx('p', {
      className: _$$s.textBodyLarge.colorTextSecondary.$,
      children: e,
    }), jsx('p', {
      children: renderI18nText('consumption_paywalls.campfire.starter_pricing'),
    })],
  })
}
function en(e) {
  switch (e) {
    case consumptionPaywallUtils.Plan.PRO:
      return Ju.PRO
    case consumptionPaywallUtils.Plan.ORG:
      return Ju.ORG
    case consumptionPaywallUtils.Plan.ENTERPRISE:
      return Ju.ENTERPRISE
    default:
      throwTypeError(e)
  }
}
function er({
  currency: e,
  plan: t,
  isCurrentPlan: i,
  planDescription: r,
  editorType: a,
}) {
  let s
  let o
  let l = useCurrentPublicPlan('Pricing')
  let [d] = handleSuspenseRetainRelease(l)
  let c = d.data?.key
  if (i) {
    let e = en(t) === Ju.PRO ? FOrganizationLevelType.TEAM : FOrganizationLevelType.ORG
    let i = {
      planParentId: c?.parentId || '',
      planType: e,
    }
    s = cw(i)
    o = Fq.UPSELL_MODALS_CONTRACT
  }
  else {
    s = I8(null)
    o = Fq.UPSELL_MODALS
  }
  let u = (function (e, t) {
    let i = en(e)
    return Oq.exclude([ProductAccessTypeEnum.DEV_MODE]).dict(e => ({
      currency: t,
      billableProductKey: e,
      billableProductVariantKey: null,
      tier: i,
      renewalTerm: IX.YEAR,
      unit: IX.MONTH,
    }))
  }(t, e))
  let p = yF(o, u, s)
  let [m] = handleSuspenseRetainRelease(p)
  let h = vu(m)
  let f = a ? [a] : [FFileType.DESIGN, FFileType.WHITEBOARD]
  let A = new CurrencyFormatter(e)
  let y = h.data
  let b = {
    [FFileType.DESIGN]: y[ProductAccessTypeEnum.DESIGN].amount,
    [FFileType.SITES]: y[ProductAccessTypeEnum.DESIGN].amount,
    [FFileType.FIGMAKE]: y[ProductAccessTypeEnum.DESIGN].amount,
    slides: y[ProductAccessTypeEnum.DESIGN].amount,
    [FFileType.COOPER]: y[ProductAccessTypeEnum.DESIGN].amount,
    [FFileType.WHITEBOARD]: y[ProductAccessTypeEnum.FIGJAM].amount,
  }
  let E = {
    design: y1.DESIGN_AND_DEV_MODE,
    sites: y1.DESIGN_AND_DEV_MODE,
    figmake: y1.DESIGN_AND_DEV_MODE,
    slides: y1.DESIGN_AND_DEV_MODE,
    whiteboard: y1.WHITEBOARD,
    cooper: y1.COOPER,
  }
  let x = (e) => {
    let t = jsx('span', {
      className: 'consumption_paywall_modals--priceRowProductName--L5rAD',
      children: _$$E(getProductAccessTypeFromFileType(e)),
    })
    return e === FFileType.DESIGN
      ? jsxs('div', {
          className: _$$s.flex.flexColumn.lh14.rowGap2.$,
          children: [t, jsx('span', {
            children: jsx(_$$G, {}),
          })],
        })
      : t
  }
  return jsxs(Fragment, {
    children: [jsx('p', {
      className: Q,
      children: r,
    }), !!f.length && jsx(hK, {
      height: 16,
    }), f.map(e => jsxs('div', {
      'className': 'consumption_paywall_modals--priceRow--HHyVo',
      'data-testid': `pricing-pro-${e}`,
      'children': [jsxs('span', {
        className: 'consumption_paywall_modals--priceIconAndProductName--ukBBD',
        children: [jsx('div', {
          'className': 'consumption_paywall_modals--priceIcon--x24mr',
          'data-testid': `consumption-paywall-modal-plans-pricing-inner-pricing-icon-${E[e]}`,
          'children': jsx(w4, {
            type: E[e],
            size: 32,
          }),
        }), x(e)],
      }), jsx('span', {
        className: 'consumption_paywall_modals--costUnitPrice--ckt27 text--fontPos16--oMC-G text--_fontBase--QdLsd',
        children: A.formatMoney(b[e], {
          showCents: !1,
        }),
      })],
    }, e))],
  })
}
function ea({
  currency: e,
  plan: t,
  planDescription: i,
}) {
  let r = {
    billableProductKeys: N_,
    baseQuery: {
      currency: e,
      tier: en(t),
      renewalTerm: IX.YEAR,
      unit: IX.MONTH,
    },
  }
  let a = jv(r)
  let [l] = handleSuspenseRetainRelease(a)
  let d = vu(l).data
  let c = new CurrencyFormatter(e)
  return jsx(TrackingProvider, {
    name: 'Pricing Component',
    properties: {
      planType: t,
      prices: Jh(d),
    },
    children: jsxs('div', {
      className: _$$s.flex.flexColumn.justifyBetween.hFull.$,
      children: [jsx('p', {
        className: _$$s.textBodyLarge.colorTextSecondary.$,
        children: i,
      }), jsx(hK, {
        height: 12,
      }), jsx('div', {
        children: N_.sort(AG).map(e => isNotNullish(d[e]) && jsxs('div', {
          className: _$$s.flex.justifyBetween.textBodyLarge.$,
          children: [jsxs('div', {
            className: _$$s.flex.gap4.itemsCenter.$,
            children: [BC({
              type: e,
              size: '16',
              removeBackgroundColor: !0,
            }), jsx('p', {
              children: (function (e) {
                switch (e) {
                  case ProductAccessTypeEnum.EXPERT:
                    return getI18nString('consumption_paywalls.expert_seat')
                  case ProductAccessTypeEnum.DEVELOPER:
                    return getI18nString('consumption_paywalls.dev_seat')
                  case ProductAccessTypeEnum.COLLABORATOR:
                    return getI18nString('consumption_paywalls.collab_seat')
                  case ProductAccessTypeEnum.CONTENT:
                    return getI18nString('consumption_paywalls.content_seat')
                  default:
                    throwTypeError(e)
                }
              }(e)),
            })],
          }), jsx('div', {
            className: _$$s.textBodyMedium.$,
            children: renderI18nText('consumption_paywalls.price_per_month', {
              price: jsx('span', {
                className: _$$s.textBodyLargeStrong.$,
                children: c.formatMoney(d[e].amount),
              }),
            }),
          })],
        }, e)),
      })],
    }),
  })
}
function es({
  plan: e,
  startUpgradeFlow: t,
  teamId: i,
}) {
  let r = consumptionPaywallUtils.getCtaTrackingDescriptor({
    plan: e,
  }) ?? void 0
  return e === consumptionPaywallUtils.Plan.PRO || e === consumptionPaywallUtils.Plan.ENTERPRISE || e === consumptionPaywallUtils.Plan.ORG
    ? jsx(Ih, {
        variant: 'primary',
        onClick: t,
        trackingProperties: {
          teamId: i,
          trackingDescriptor: r,
        },
        children: e === consumptionPaywallUtils.Plan.ENTERPRISE ? renderI18nText('consumption_paywalls.contact_sales') : e === consumptionPaywallUtils.Plan.ORG ? renderI18nText('consumption_paywalls.upgrade_to_organization') : renderI18nText('consumption_paywalls.upgrade_to_professional'),
      })
    : null
}
function eo({
  plan: e,
  resource: t,
  editorType: i,
  startUpgradeFlow: a,
  teamId: o,
  onStarterPlanCtaClick: l,
  currentPlan: d,
  showCta: c = !0,
  showBillingInfo: u,
  currency: p,
  planBoxHeaderSize: m,
  setPlanBoxHeaderSize: h,
}) {
  let g = _$$sx()
  let _ = (function (e) {
    switch (e) {
      case consumptionPaywallUtils.Plan.STARTER:
        return getI18nString('consumption_paywalls.plan_name_starter')
      case consumptionPaywallUtils.Plan.PRO:
        return getI18nString('consumption_paywalls.plan_name_pro')
      case consumptionPaywallUtils.Plan.ORG:
        return getI18nString('consumption_paywalls.plan_name_org')
      case consumptionPaywallUtils.Plan.ENTERPRISE:
        return getI18nString('consumption_paywalls.plan_name_enterprise')
      default:
        throwTypeError(e)
    }
  }(e))
  let A = e !== d || t === FeatureFlag.SHARED_FONTS
  let y = g
    ? (function (e) {
        switch (e) {
          case consumptionPaywallUtils.Plan.STARTER:
            return getI18nString('consumption_paywalls.campfire.plan_description_starter')
          case consumptionPaywallUtils.Plan.PRO:
            return getI18nString('consumption_paywalls.campfire.plan_description_pro')
          case consumptionPaywallUtils.Plan.ORG:
            return getI18nString('consumption_paywalls.campfire.plan_description_org')
          case consumptionPaywallUtils.Plan.ENTERPRISE:
            return getI18nString('consumption_paywalls.campfire.plan_description_ent')
          default:
            throwTypeError(e)
        }
      }(e))
    : (function (e) {
        switch (e) {
          case consumptionPaywallUtils.Plan.STARTER:
            return getI18nString('consumption_paywalls.plan_description_starter')
          case consumptionPaywallUtils.Plan.PRO:
            return getI18nString('consumption_paywalls.plan_description_pro_pricing_variant.seat_rename')
          case consumptionPaywallUtils.Plan.ORG:
            return getI18nString('consumption_paywalls.plan_description_org_pricing_variant')
          case consumptionPaywallUtils.Plan.ENTERPRISE:
            return getI18nString('consumption_paywalls.plan_description_enterprise_pricing_variant')
          default:
            throwTypeError(e)
        }
      }(e))
  let v = consumptionPaywallUtils.getPaywallFeatureList(t, e, d, i, g)
  let E = jsxs('div', {
    className: 'consumption_paywall_modals--planFeatureList--BIvo0',
    children: [v.map((e, t) => jsx(J, {
      item: e,
      dataTestId: `consumption-paywall-modal-plans-pricing-inner-plan-feature-${t}`,
      disabled: e.disabled,
    }, t)), A && jsxs(Fragment, {
      children: [jsx(hK, {
        height: 4,
      }), jsx(ee, {
        editorType: i,
      })],
    })],
  })
  let S = c
    ? jsxs(Fragment, {
        children: [jsx(Spacing, {
          multiple: 3,
        }), jsx(es, {
          'data-testid': 'consumption-paywall-modal-plans-pricing-inner-plan-box-cta',
          'plan': e,
          'resource': t,
          'startUpgradeFlow': a,
          'onStarterPlanCtaClick': l,
          'teamId': o,
        })],
      })
    : null
  let w = useRef(null)
  let T = useRef(-1)
  useEffect(() => {
    w.current && T.current === -1 && (T.current = w.current.offsetHeight, T.current > m && h(T.current))
  }, [w, T, m, h])
  let R = e === consumptionPaywallUtils.Plan.STARTER
  return jsxs('div', {
    'className': g ? _$$s.flex.flexColumn.justifyBetween.p24.flex1.borderBox.$ : 'consumption_paywall_modals--planBox--M-XwQ',
    'data-testid': `consumption-paywall-modal-plans-pricing-inner-plan-box-${e}`,
    'children': [jsxs('div', {
      children: [jsxs('div', {
        ref: w,
        style: {
          height: m,
        },
        className: _$$s.flex.flexColumn.$,
        children: [jsxs('div', {
          className: g ? _$$s.textHeadingLarge.flex.itemsCenter.$ : 'consumption_paywall_modals--planName--ma-56 text--fontPos18--rYXJb text--_fontBase--QdLsd',
          children: [_, e === d && jsx(AutoLayout, {
            verticalAlignItems: 'center',
            padding: {
              left: 8,
            },
            width: 'hug-contents',
            children: jsx(Badge, {
              text: getI18nString('consumption_paywalls.badge_text'),
              color: g ? BadgeColor.DEFAULT : BadgeColor.DISABLED,
              size: BadgeSize.SMALL,
              subtle: g,
              className: g ? 'consumption_paywall_modals--currentPlanBadge--ojZ7t' : void 0,
            }),
          })],
        }), u && p && jsxs('div', {
          className: _$$s.flexGrow1.$,
          children: [jsx(hK, {
            height: 4,
          }), R && (g
            ? jsx(ei, {
                planDescription: y,
              })
            : jsx(et, {
                planDescription: y,
              })), !R && jsx(Fragment, {
            children: g
              ? jsx(ea, {
                  currency: p,
                  plan: e,
                  planDescription: y,
                })
              : jsx(er, {
                  currency: p,
                  editorType: i,
                  planDescription: y,
                  plan: e,
                  isCurrentPlan: e === d,
                }),
          })],
        })],
      }), jsx('div', {
        className: 'consumption_paywall_modals--planBoxDivider--E4Hnj',
      }), t === FeatureFlag.ORG && e === consumptionPaywallUtils.Plan.ORG && jsx('p', {
        className: _$$s.textBodyLargeStrong.$,
        children: getI18nString('plan_comparison.campfire.everything_on_pro'),
      }), E],
    }), S],
  })
}
function el(e) {
  let t = consumptionPaywallUtils.getModalTitle(e.resource, e.action, e.multipleResources, e.editorType)
  return jsx(_$$N, {
    hiddenTitle: t,
    estimatedWidth: 600,
    estimatedHeight: 573,
  })
}
export function $$ed1(e) {
  let t = useDispatch()
  return jsx(tH, {
    boundaryKey: 'ConsumptionPaywallModal',
    fallback: H4.NONE_I_KNOW_WHAT_IM_DOING,
    sentryTags: {
      area: _$$e.MONETIZATION_UPGRADES,
    },
    onError: () => {
      t(VisualBellActions.enqueue({
        message: getI18nString('consumption_paywalls.error.modal'),
        error: !0,
      }))
    },
    children: jsx(Suspense, {
      fallback: jsx(el, {
        ...e,
      }),
      children: jsx(eu, {
        ...e,
      }),
    }),
  })
}
function ec(e) {
  let t
  let {
    resource,
    action,
    team,
    editorType,
    multipleResources,
    onBillingCompleteRedirectInfo,
    currentPlan,
    upsellPlan,
    upsellSource,
    hideUpsellPlanCta = !1,
    modalFooter,
  } = e
  let {
    cancel,
    startProUpgradeFlow,
    startOrgUpgradeFlow,
    startEnterpriseUpgradeFlow,
  } = consumptionPaywallUtils.useModalControls(team?.id ?? null)
  let w = _$$h.useTrackingContext({
    trigger: upsellSource,
    upgradePoint: _$$h.MonetizationUpgradePoint.CONSUMPTION_UPSELL_MODAL,
  })
  let C = _$$sx()
  let [T, R] = useState(-1)
  let L = consumptionPaywallUtils.getModalTitle(resource, action, multipleResources, editorType)
  let F = consumptionPaywallUtils.getModalSubtitle(resource, action, currentPlan, editorType ?? FFileType.DESIGN)
  let M = consumptionPaywallUtils.getModalLearnMoreLink(resource)
  let j = consumptionPaywallUtils.getModalTrackingName(resource, action)
  let V = consumptionPaywallUtils.getModalTrackingProductType(editorType)
  switch (upsellPlan) {
    case consumptionPaywallUtils.Plan.PRO:
      t = () => startProUpgradeFlow(onBillingCompleteRedirectInfo, upsellSource)
      break
    case consumptionPaywallUtils.Plan.ORG:
      t = () => {
        startOrgUpgradeFlow({
          upsellSource: upsellSource ?? UpsellModalType.UNSET,
        })
      }
      break
    case consumptionPaywallUtils.Plan.ENTERPRISE:
      t = () => startEnterpriseUpgradeFlow(resource)
      break
    case consumptionPaywallUtils.Plan.STARTER:
      t = () => {}
      break
    default:
      throwTypeError(upsellPlan)
  }
  let Y = !hideUpsellPlanCta
  let q = (function (e, t) {
    let i = (function (e) {
      let t = useCurrentPublicPlan('useContractRatesArgs')
      let [i] = handleSuspenseRetainRelease(t)
      if (e === consumptionPaywallUtils.Plan.STARTER)
        return null
      let n = i.data?.key
      let r = n?.parentId
      return r
        ? {
            planParentId: r,
            planType: en(e) === Ju.PRO ? FOrganizationLevelType.TEAM : FOrganizationLevelType.ORG,
          }
        : null
    }(e))
    let n = vK(i || {}, {
      enabled: t && !!i,
    })
    let [r] = handleSuspenseRetainRelease(n)
    return e === consumptionPaywallUtils.Plan.STARTER ? getUserCurrency() : r.data || getUserCurrency()
  }(currentPlan, Y))
  let Z = getRumLoggingConfig()
  return jsx(TrackingProvider, {
    name: j,
    properties: {
      teamId: team?.id,
      action,
      product_type: V,
      inPublishDraftExp: !!onBillingCompleteRedirectInfo,
      isCampfire: C,
      planType: consumptionPaywallUtils.consumptionPlanToPlanType(currentPlan),
      ...w,
    },
    trackingOptions: Z,
    children: jsxs(utilityNoop, {
      'data-testid': 'consumption-paywall-modal-plans-pricing-inner-modal',
      'title': L,
      'titleClassName': C ? 'consumption_paywall_modals--campfireLargeModalTitle--1D-kj' : 'consumption_paywall_modals--largeModalTitle--kOqov',
      'size': 600,
      'popStack': !0,
      'className': 'consumption_paywall_modals--largeModal--gQbzP',
      'children': [jsx(CloseButton, {
        className: 'consumption_paywall_modals--closeButton--cGAYf close_button--modalUpperRightCorner--eKAQg',
        onClick: cancel,
        innerText: 'Close',
        trackingProperties: {
          inPublishDraftExp: !!onBillingCompleteRedirectInfo,
        },
      }), jsxs('p', {
        'data-testid': 'consumption-paywall-modal-plans-pricing-inner-subtitle',
        'className': C ? _$$s.textBodyLarge.colorTextSecondary.$ : 'consumption_paywall_modals--largeModalSubtitle--vwxPe',
        'style': sx.$$if(C, sx.add({
          marginTop: '-16px',
        })).$,
        'children': [F, M
          ? jsxs(Fragment, {
              children: [' ', M],
            })
          : null],
      }), C && jsx(hK, {
        height: 16,
      }), jsxs('div', {
        className: C ? _$$s.flex.justifyBetween.b1.colorBorder.font13.$ : 'consumption_paywall_modals--planBoxContainer--MmvjD text--fontPos13--xW8hS text--_fontBase--QdLsd',
        style: sx.$$if(C, sx.add({
          borderRadius: '13px',
        })).$,
        children: [jsx(eo, {
          currency: q,
          currentPlan,
          editorType,
          onStarterPlanCtaClick: resource === FeatureFlag.TEAM_LIBRARY ? e.onStarterPlanCtaClick : void 0,
          plan: currentPlan,
          planBoxHeaderSize: T,
          resource,
          setPlanBoxHeaderSize: R,
          showBillingInfo: Y,
          showCta: !1,
          startUpgradeFlow: startProUpgradeFlow,
          teamId: team?.id ?? null,
          upsellPlan,
        }), C && jsx('div', {
          className: _$$s.bSolid.br1.colorBorder.$,
        }), jsx(eo, {
          currency: q,
          currentPlan,
          editorType,
          plan: upsellPlan,
          planBoxHeaderSize: T,
          resource,
          setPlanBoxHeaderSize: R,
          showBillingInfo: Y,
          showCta: !hideUpsellPlanCta,
          startUpgradeFlow: t,
          teamId: team?.id ?? null,
          upsellPlan,
        })],
      }), hideUpsellPlanCta && jsxs('div', {
        'data-testid': 'ask-admin-to-upgrade',
        'className': 'x78zum5 x6s0dn4 xfifm61 xw7yly9',
        'children': [jsx(_$$$, {}), renderI18nText('consumption_paywalls.ask_admin_to_upgrade')],
      }), modalFooter],
    }),
  })
}
function eu(e) {
  let {
    cannotUpgradeTeam,
    isLoading,
  } = (function (e) {
    let t = e.team?.id
    let i = useSubscription(TeamCanEdit, {
      id: t ?? '',
    }, {
      enabled: !!t,
    })
    let n = i.status === 'loading'
    let r = i.status === 'loaded' && !i.data.team?.hasPermission
    return {
      cannotUpgradeTeam: !!t && e.currentPlan === consumptionPaywallUtils.Plan.STARTER && r,
      isLoading: n,
    }
  }(e))
  let r = {
    ...e,
    hideUpsellPlanCta: e.hideUpsellPlanCta || cannotUpgradeTeam,
    team: e.team ?? null,
  }
  return isLoading
    ? jsx(el, {
        ...e,
      })
    : jsx(ec, {
        ...r,
      })
}
export let ConsumptionPaywallModalPlansPricing = registerModal($$ed1, 'ConsumptionPaywallModalPlansPricing')
export const DV = ConsumptionPaywallModalPlansPricing
export const bP = $$ed1
