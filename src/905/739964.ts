import classNames from 'classnames';
import { Suspense, useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Fragment, jsx, jsxs } from 'react/jsx-runtime';
import { consumptionPaywallUtils } from '../905/224';
import { getRumLoggingConfig } from '../905/16237';
import { CloseButton } from '../905/17223';
import { activeRatesQuery, BillingPriceSource, contractRatesQuery, ensureLoadedResource, getContractCurrency, setupPricesTransform, setupResourceTransform } from '../905/84777';
import { registerModal } from '../905/102752';
import { g as _$$g } from '../905/125190';
import { ServiceCategories } from '../905/165054';
import { UpsellModalType } from '../905/165519';
import { VisualBellActions } from '../905/302958';
import { getI18nString, renderI18nText } from '../905/303541';
import { collaboratorSet, designSet } from '../905/332483';
import { $ as _$$$ } from '../905/379902';
import { w4, y1 } from '../905/445814';
import { AutoLayout } from '../905/470281';
import { ProductAccessTypeEnum } from '../905/513035';
import { q as _$$q } from '../905/636218';
import { FeatureFlag } from '../905/652992';
import { ProductTierEnum, RenewalTermEnum } from '../905/712921';
import { ErrorBoundaryCrash, errorBoundaryFallbackTypes } from '../905/751457';
import { N as _$$N } from '../905/809096';
import { h as _$$h } from '../905/864281';
import { styleBuilderInstance } from '../905/941192';
import { cssBuilderInstance } from '../cssbuilder/589278';
import { TeamCanEdit } from '../figma_app/43951';
import { isNotNullish } from '../figma_app/95419';
import { E as _$$E } from '../figma_app/126651';
import { BC } from '../figma_app/149367';
import { FFileType, FOrganizationLevelType } from '../figma_app/191312';
import { hK } from '../figma_app/211706';
import { compareProductAccessTypes } from '../figma_app/217457';
import { useSubscription } from '../figma_app/288654';
import { sx as _$$sx } from '../figma_app/307841';
import { renderCheckoutDevModeText } from '../figma_app/361869';
import { Jh } from '../figma_app/441925';
import { useCurrentPublicPlan } from '../figma_app/465071';
import { throwTypeError } from '../figma_app/465776';
import { CurrencyFormatter, getUserCurrency } from '../figma_app/514043';
import { handleSuspenseRetainRelease } from '../figma_app/566371';
import { WithTrackedButtonWide } from '../figma_app/617427';
import { linkWithTracking, Spacing } from '../figma_app/637027';
import { getProductAccessTypeFromFileType } from '../figma_app/765689';
import { TrackingProvider } from '../figma_app/831799';
import { ModalContainer } from '../figma_app/918700';
import { Badge, BadgeColor, BadgeSize } from '../figma_app/919079';
let Q = 'consumption_paywall_modals--planDescription';
interface PlanFeatureItem {
  text: React.ReactNode;
  hoverText?: string;
  disabled?: boolean;
}
interface PlanFeatureProps {
  item: PlanFeatureItem;
  dataTestId?: string;
  hideMarker?: boolean;
  grayedOut?: boolean;
  disabled?: boolean;
}
function PlanFeature({
  item,
  dataTestId,
  hideMarker,
  grayedOut,
  disabled
}: PlanFeatureProps) {
  let {
    text,
    hoverText
  } = item;
  let [isHovered, setIsHovered] = useState(false);
  let markerIcon = jsx('span', {
    style: hideMarker ? {
      visibility: 'hidden'
    } : void 0,
    children: disabled ? jsx(_$$q, {
      style: {
        '--color-icon': 'var(--color-icon-secondary)'
      }
    }) : jsx(_$$g, {
      style: {
        '--color-icon': 'var(--color-icon-secondary)'
      }
    })
  });
  return jsx('div', {
    'data-testid': dataTestId,
    'onMouseLeave': () => {
      hoverText && setIsHovered(false);
    },
    'onMouseOver': () => {
      hoverText && setIsHovered(true);
    },
    'className': classNames({
      'consumption_paywall_modals--planFeatureDisabled--0yd7z': grayedOut,
      'consumption_paywall_modals--planFeatureParent--NBBWh': true
    }),
    'children': jsxs('div', {
      className: cssBuilderInstance.flex.$,
      children: [hoverText && jsxs('span', {
        className: classNames({
          'consumption_paywall_modals--planFeatureHoverState--hpPa3': isHovered,
          'consumption_paywall_modals--planFeatureHoverStateHidden--pQLiS consumption_paywall_modals--planFeatureHoverState--hpPa3': !isHovered
        }),
        children: [hoverText, jsx('div', {
          className: 'consumption_paywall_modals--planFeatureHoverTriangle--6X--5'
        })]
      }), markerIcon, jsx('p', {
        onMouseOver: () => {
          hoverText && setIsHovered(true);
        },
        className: classNames({
          'consumption_paywall_modals--planFeatureHoverable--mqLZi': !!hoverText
        }, cssBuilderInstance.lh24.$),
        children: text
      })]
    })
  });
}
interface SeeAllFeaturesLinkProps {
  editorType?: string;
}
function SeeAllFeaturesLink({
  editorType
}: SeeAllFeaturesLinkProps) {
  let linkElement = jsx(linkWithTracking, {
    href: editorType === 'whiteboard' ? 'https://www.figma.com/pricing/#figjam' : 'https://www.figma.com/pricing/#cid-57mfNh6t0Xo7z8Q95Ww9ZV',
    target: '_blank',
    className: classNames(editorType === 'whiteboard' && 'consumption_paywall_modals--figjamLink---aC7d'),
    trusted: true,
    children: renderI18nText('consumption_paywalls.see_all_features')
  });
  return jsx(PlanFeature, {
    item: {
      text: linkElement,
      disabled: false
    },
    hideMarker: true
  });
}
interface StarterPlanDescriptionProps {
  planDescription: string;
}
function StarterPlanDescription({
  planDescription
}: StarterPlanDescriptionProps) {
  return jsxs(Fragment, {
    children: [jsx('p', {
      className: Q,
      children: planDescription
    }), jsx(hK, {
      height: 16
    }), jsx('div', {
      'className': 'consumption_paywall_modals--starterPriceRow--ZBFoR',
      'style': {
        height: 34
      },
      'data-testid': 'pricing-starter',
      'children': jsx('div', {
        className: 'consumption_paywall_modals--costText--kn5ud text--fontPos16--oMC-G text--_fontBase--QdLsd',
        children: renderI18nText('consumption_paywalls.free')
      })
    })]
  });
}
interface CampfireStarterPlanDescriptionProps {
  planDescription: string;
}
function CampfireStarterPlanDescription({
  planDescription
}: CampfireStarterPlanDescriptionProps) {
  return jsxs('div', {
    className: cssBuilderInstance.flex.flexColumn.justifyBetween.hFull.$,
    children: [jsx('p', {
      className: cssBuilderInstance.textBodyLarge.colorTextSecondary.$,
      children: planDescription
    }), jsx('p', {
      children: renderI18nText('consumption_paywalls.campfire.starter_pricing')
    })]
  });
}
function getPlanTier(plan: any) {
  switch (plan) {
    case consumptionPaywallUtils.Plan.PRO:
      return ProductTierEnum.PRO;
    case consumptionPaywallUtils.Plan.ORG:
      return ProductTierEnum.ORG;
    case consumptionPaywallUtils.Plan.ENTERPRISE:
      return ProductTierEnum.ENTERPRISE;
    default:
      throwTypeError(plan);
  }
}
function ProPlanPricing({
  currency,
  plan,
  isCurrentPlan,
  planDescription,
  editorType
}: {
  currency: any;
  plan: any;
  isCurrentPlan: boolean;
  planDescription: string;
  editorType: string;
}) {
  let query;
  let priceSource;
  let currentPublicPlan = useCurrentPublicPlan('Pricing');
  let [publicPlanResource] = handleSuspenseRetainRelease(currentPublicPlan);
  let planData = publicPlanResource.data?.key;
  if (isCurrentPlan) {
    let planTier = getPlanTier(plan) === ProductTierEnum.PRO ? FOrganizationLevelType.TEAM : FOrganizationLevelType.ORG;
    let contractParams = {
      planParentId: planData?.parentId || '',
      planType: planTier
    };
    query = contractRatesQuery(contractParams);
    priceSource = BillingPriceSource.UPSELL_MODALS_CONTRACT;
  } else {
    query = activeRatesQuery(null);
    priceSource = BillingPriceSource.UPSELL_MODALS;
  }
  let designSetParams = function (planValue, currencyValue) {
    let tier = getPlanTier(planValue);
    return designSet.exclude([ProductAccessTypeEnum.DEV_MODE]).dict(key => ({
      currency: currencyValue,
      billableProductKey: key,
      billableProductVariantKey: null,
      tier,
      renewalTerm: RenewalTermEnum.YEAR,
      unit: RenewalTermEnum.MONTH
    }));
  }(plan, currency);
  let resourceTransform = setupResourceTransform(priceSource, designSetParams, query);
  let [transformedResource] = handleSuspenseRetainRelease(resourceTransform);
  let loadedResource = ensureLoadedResource(transformedResource);
  let fileTypes = editorType ? [editorType] : [FFileType.DESIGN, FFileType.WHITEBOARD];
  let currencyFormatter = new CurrencyFormatter(currency);
  let resourceData = loadedResource.data;
  let pricingData = {
    [FFileType.DESIGN]: resourceData[ProductAccessTypeEnum.DESIGN].amount,
    [FFileType.SITES]: resourceData[ProductAccessTypeEnum.DESIGN].amount,
    [FFileType.FIGMAKE]: resourceData[ProductAccessTypeEnum.DESIGN].amount,
    slides: resourceData[ProductAccessTypeEnum.DESIGN].amount,
    [FFileType.COOPER]: resourceData[ProductAccessTypeEnum.DESIGN].amount,
    [FFileType.WHITEBOARD]: resourceData[ProductAccessTypeEnum.FIGJAM].amount
  };
  let iconTypes = {
    design: y1.DESIGN_AND_DEV_MODE,
    sites: y1.DESIGN_AND_DEV_MODE,
    figmake: y1.DESIGN_AND_DEV_MODE,
    slides: y1.DESIGN_AND_DEV_MODE,
    whiteboard: y1.WHITEBOARD,
    cooper: y1.COOPER
  };
  let renderProductName = fileType => {
    let productNameElement = jsx('span', {
      className: 'consumption_paywall_modals--priceRowProductName--L5rAD',
      children: _$$E(getProductAccessTypeFromFileType(fileType))
    });
    return fileType === FFileType.DESIGN ? jsxs('div', {
      className: cssBuilderInstance.flex.flexColumn.lh14.rowGap2.$,
      children: [productNameElement, jsx('span', {
        children: jsx(renderCheckoutDevModeText, {})
      })]
    }) : productNameElement;
  };
  return jsxs(Fragment, {
    children: [jsx('p', {
      className: Q,
      children: planDescription
    }), !!fileTypes.length && jsx(hK, {
      height: 16
    }), fileTypes.map(fileType => jsxs('div', {
      'className': 'consumption_paywall_modals--priceRow--HHyVo',
      'data-testid': `pricing-pro-${fileType}`,
      'children': [jsxs('span', {
        className: 'consumption_paywall_modals--priceIconAndProductName--ukBBD',
        children: [jsx('div', {
          'className': 'consumption_paywall_modals--priceIcon--x24mr',
          'data-testid': `consumption-paywall-modal-plans-pricing-inner-pricing-icon-${iconTypes[fileType]}`,
          'children': jsx(w4, {
            type: iconTypes[fileType],
            size: 32
          })
        }), renderProductName(fileType)]
      }), jsx('span', {
        className: 'consumption_paywall_modals--costUnitPrice--ckt27 text--fontPos16--oMC-G text--_fontBase--QdLsd',
        children: currencyFormatter.formatMoney(pricingData[fileType], {
          showCents: false
        })
      })]
    }, fileType))]
  });
}
function CollaboratorPricing({
  currency,
  plan,
  planDescription
}: {
  currency: any;
  plan: any;
  planDescription: string;
}) {
  let transformParams = {
    billableProductKeys: collaboratorSet,
    baseQuery: {
      currency,
      tier: getPlanTier(plan),
      renewalTerm: RenewalTermEnum.YEAR,
      unit: RenewalTermEnum.MONTH
    },
    planKey: null
  };
  let pricesTransform = setupPricesTransform(transformParams);
  let [pricesResource] = handleSuspenseRetainRelease(pricesTransform);
  let pricesData = ensureLoadedResource(pricesResource).data;
  let currencyFormatter = new CurrencyFormatter(currency);
  return jsx(TrackingProvider, {
    name: 'Pricing Component',
    properties: {
      planType: plan,
      prices: Jh(pricesData)
    },
    children: jsxs('div', {
      className: cssBuilderInstance.flex.flexColumn.justifyBetween.hFull.$,
      children: [jsx('p', {
        className: cssBuilderInstance.textBodyLarge.colorTextSecondary.$,
        children: planDescription
      }), jsx(hK, {
        height: 12
      }), jsx('div', {
        children: collaboratorSet.sort(compareProductAccessTypes).map(accessType => isNotNullish(pricesData[accessType]) && jsxs('div', {
          className: cssBuilderInstance.flex.justifyBetween.textBodyLarge.$,
          children: [jsxs('div', {
            className: cssBuilderInstance.flex.gap4.itemsCenter.$,
            children: [BC({
              type: accessType,
              size: '16',
              removeBackgroundColor: true
            }), jsx('p', {
              children: function (type) {
                switch (type) {
                  case ProductAccessTypeEnum.EXPERT:
                    return getI18nString('consumption_paywalls.expert_seat');
                  case ProductAccessTypeEnum.DEVELOPER:
                    return getI18nString('consumption_paywalls.dev_seat');
                  case ProductAccessTypeEnum.COLLABORATOR:
                    return getI18nString('consumption_paywalls.collab_seat');
                  case ProductAccessTypeEnum.CONTENT:
                    return getI18nString('consumption_paywalls.content_seat');
                  default:
                    throwTypeError(type);
                }
              }(accessType)
            })]
          }), jsx('div', {
            className: cssBuilderInstance.textBodyMedium.$,
            children: renderI18nText('consumption_paywalls.price_per_month', {
              price: jsx('span', {
                className: cssBuilderInstance.textBodyLargeStrong.$,
                children: currencyFormatter.formatMoney(pricesData[accessType].amount)
              })
            })
          })]
        }, accessType))
      })]
    })
  });
}
function UpgradeButton({
  plan,
  startUpgradeFlow,
  teamId
}) {
  let trackingDescriptor = consumptionPaywallUtils.getCtaTrackingDescriptor({
    plan
  }) ?? undefined;
  return plan === consumptionPaywallUtils.Plan.PRO || plan === consumptionPaywallUtils.Plan.ENTERPRISE || plan === consumptionPaywallUtils.Plan.ORG ? jsx(WithTrackedButtonWide, {
    variant: 'primary',
    onClick: startUpgradeFlow,
    trackingProperties: {
      teamId,
      trackingDescriptor
    },
    children: plan === consumptionPaywallUtils.Plan.ENTERPRISE ? renderI18nText('consumption_paywalls.contact_sales') : plan === consumptionPaywallUtils.Plan.ORG ? renderI18nText('consumption_paywalls.upgrade_to_organization') : renderI18nText('consumption_paywalls.upgrade_to_professional')
  }) : null;
}
function PlanBox({
  plan,
  resource,
  editorType,
  startUpgradeFlow,
  teamId,
  onStarterPlanCtaClick,
  currentPlan,
  showCta = true,
  showBillingInfo,
  currency,
  planBoxHeaderSize,
  setPlanBoxHeaderSize
}) {
  let isCampfire = _$$sx();
  let planName = function (planValue) {
    switch (planValue) {
      case consumptionPaywallUtils.Plan.STARTER:
        return getI18nString('consumption_paywalls.plan_name_starter');
      case consumptionPaywallUtils.Plan.PRO:
        return getI18nString('consumption_paywalls.plan_name_pro');
      case consumptionPaywallUtils.Plan.ORG:
        return getI18nString('consumption_paywalls.plan_name_org');
      case consumptionPaywallUtils.Plan.ENTERPRISE:
        return getI18nString('consumption_paywalls.plan_name_enterprise');
      default:
        throwTypeError(planValue);
    }
  }(plan);
  let shouldShowSeeAllFeatures = plan !== currentPlan || resource === FeatureFlag.SHARED_FONTS;
  let planDescription = isCampfire ? function (planValue) {
    switch (planValue) {
      case consumptionPaywallUtils.Plan.STARTER:
        return getI18nString('consumption_paywalls.campfire.plan_description_starter');
      case consumptionPaywallUtils.Plan.PRO:
        return getI18nString('consumption_paywalls.campfire.plan_description_pro');
      case consumptionPaywallUtils.Plan.ORG:
        return getI18nString('consumption_paywalls.campfire.plan_description_org');
      case consumptionPaywallUtils.Plan.ENTERPRISE:
        return getI18nString('consumption_paywalls.campfire.plan_description_ent');
      default:
        throwTypeError(planValue);
    }
  }(plan) : function (planValue) {
    switch (planValue) {
      case consumptionPaywallUtils.Plan.STARTER:
        return getI18nString('consumption_paywalls.plan_description_starter');
      case consumptionPaywallUtils.Plan.PRO:
        return getI18nString('consumption_paywalls.plan_description_pro_pricing_variant.seat_rename');
      case consumptionPaywallUtils.Plan.ORG:
        return getI18nString('consumption_paywalls.plan_description_org_pricing_variant');
      case consumptionPaywallUtils.Plan.ENTERPRISE:
        return getI18nString('consumption_paywalls.plan_description_enterprise_pricing_variant');
      default:
        throwTypeError(planValue);
    }
  }(plan);
  let featureList = consumptionPaywallUtils.getPaywallFeatureList(resource, plan, currentPlan, editorType as any, isCampfire);
  let featureListElement = jsxs('div', {
    className: 'consumption_paywall_modals--planFeatureList--BIvo0',
    children: [featureList.map((item, index) => jsx(PlanFeature, {
      item,
      dataTestId: `consumption-paywall-modal-plans-pricing-inner-plan-feature-${index}`,
      disabled: (item as any).disabled
    }, index)), shouldShowSeeAllFeatures && jsxs(Fragment, {
      children: [jsx(hK, {
        height: 4
      }), jsx(SeeAllFeaturesLink, {
        editorType
      })]
    })]
  });
  let ctaElement = showCta ? jsxs(Fragment, {
    children: [jsx(Spacing, {
      multiple: 3
    }), jsx(UpgradeButton, {
      'data-testid': 'consumption-paywall-modal-plans-pricing-inner-plan-box-cta',
      plan,
      resource,
      startUpgradeFlow,
      onStarterPlanCtaClick,
      teamId
    })]
  }) : null;
  let planBoxRef = useRef(null);
  let heightRef = useRef(-1);
  useEffect(() => {
    if (planBoxRef.current && heightRef.current === -1) {
      heightRef.current = planBoxRef.current.offsetHeight;
      if (heightRef.current > planBoxHeaderSize) {
        setPlanBoxHeaderSize(heightRef.current);
      }
    }
  }, [planBoxRef, heightRef, planBoxHeaderSize, setPlanBoxHeaderSize]);
  let isStarterPlan = plan === consumptionPaywallUtils.Plan.STARTER;
  return jsxs('div', {
    'className': isCampfire ? cssBuilderInstance.flex.flexColumn.justifyBetween.p24.flex1.borderBox.$ : 'consumption_paywall_modals--planBox--M-XwQ',
    'data-testid': `consumption-paywall-modal-plans-pricing-inner-plan-box-${plan}`,
    'children': [jsxs('div', {
      children: [jsxs('div', {
        ref: planBoxRef,
        style: {
          height: planBoxHeaderSize
        },
        className: cssBuilderInstance.flex.flexColumn.$,
        children: [jsxs('div', {
          className: isCampfire ? cssBuilderInstance.textHeadingLarge.flex.itemsCenter.$ : 'consumption_paywall_modals--planName--ma-56 text--fontPos18--rYXJb text--_fontBase--QdLsd',
          children: [planName, plan === currentPlan && jsx(AutoLayout, {
            verticalAlignItems: 'center',
            padding: {
              left: 8
            },
            width: 'hug-contents',
            children: jsx(Badge, {
              text: getI18nString('consumption_paywalls.badge_text'),
              color: isCampfire ? BadgeColor.DEFAULT : BadgeColor.DISABLED,
              size: BadgeSize.SMALL,
              subtle: isCampfire,
              className: isCampfire ? 'consumption_paywall_modals--currentPlanBadge--ojZ7t' : void 0
            })
          })]
        }), showBillingInfo && currency && jsxs('div', {
          className: cssBuilderInstance.flexGrow1.$,
          children: [jsx(hK, {
            height: 4
          }), isStarterPlan && (isCampfire ? jsx(CampfireStarterPlanDescription, {
            planDescription
          }) : jsx(StarterPlanDescription, {
            planDescription
          })), !isStarterPlan && jsx(Fragment, {
            children: isCampfire ? jsx(CollaboratorPricing, {
              currency,
              plan,
              planDescription
            }) : jsx(ProPlanPricing, {
              currency,
              editorType,
              planDescription,
              plan,
              isCurrentPlan: plan === currentPlan
            })
          })]
        })]
      }), jsx('div', {
        className: 'consumption_paywall_modals--planBoxDivider--E4Hnj'
      }), resource === FeatureFlag.ORG && plan === consumptionPaywallUtils.Plan.ORG && jsx('p', {
        className: cssBuilderInstance.textBodyLargeStrong.$,
        children: getI18nString('plan_comparison.campfire.everything_on_pro')
      }), featureListElement]
    }), ctaElement]
  });
}
function ModalTitle(e) {
  let t = consumptionPaywallUtils.getModalTitle(e.resource, e.action, e.multipleResources, e.editorType as any);
  return jsx(_$$N, {
    hiddenTitle: t,
    estimatedWidth: 600,
    estimatedHeight: 573
  });
}
function ConsumptionPaywallModal(e) {
  let t;
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
    hideUpsellPlanCta = false,
    modalFooter
  } = e;
  let {
    cancel,
    startProUpgradeFlow,
    startOrgUpgradeFlow,
    startEnterpriseUpgradeFlow
  } = consumptionPaywallUtils.useModalControls(team?.id ?? null);
  let w = _$$h.useTrackingContext({
    trigger: upsellSource,
    upgradePoint: _$$h.MonetizationUpgradePoint.CONSUMPTION_UPSELL_MODAL
  });
  let C = _$$sx();
  let [T, R] = useState(-1);
  let L = consumptionPaywallUtils.getModalTitle(resource, action, multipleResources, editorType as any);
  let F = consumptionPaywallUtils.getModalSubtitle(resource, action, currentPlan, editorType as any ?? FFileType.DESIGN);
  let M = consumptionPaywallUtils.getModalLearnMoreLink(resource);
  let j = consumptionPaywallUtils.getModalTrackingName(resource, action);
  let V = consumptionPaywallUtils.getModalTrackingProductType(editorType as any);
  switch (upsellPlan) {
    case consumptionPaywallUtils.Plan.PRO:
      t = () => startProUpgradeFlow(onBillingCompleteRedirectInfo, upsellSource);
      break;
    case consumptionPaywallUtils.Plan.ORG:
      t = () => {
        startOrgUpgradeFlow({
          upsellSource: upsellSource ?? UpsellModalType.UNSET
        });
      };
      break;
    case consumptionPaywallUtils.Plan.ENTERPRISE:
      t = () => startEnterpriseUpgradeFlow(resource);
      break;
    case consumptionPaywallUtils.Plan.STARTER:
      t = () => {};
      break;
    default:
      throwTypeError(upsellPlan);
  }
  let Y = !hideUpsellPlanCta;
  let q = function (planValue, shouldShowCta) {
    let contractRatesArgs = function (plan) {
      let currentPublicPlan = useCurrentPublicPlan('useContractRatesArgs');
      let [publicPlanResource] = handleSuspenseRetainRelease(currentPublicPlan);
      if (plan === consumptionPaywallUtils.Plan.STARTER) return null;
      let planData = publicPlanResource.data?.key;
      let parentId = planData?.parentId;
      return parentId ? {
        planParentId: parentId,
        planType: getPlanTier(plan) === ProductTierEnum.PRO ? FOrganizationLevelType.TEAM : FOrganizationLevelType.ORG
      } : null;
    }(planValue);

    // Only call getContractCurrency if we have valid contractRatesArgs
    if (contractRatesArgs && shouldShowCta) {
      let contractCurrency = getContractCurrency(contractRatesArgs as any, {
        enabled: true
      });
      let [currencyResource] = handleSuspenseRetainRelease(contractCurrency);
      return planValue === consumptionPaywallUtils.Plan.STARTER ? getUserCurrency() : currencyResource.data || getUserCurrency();
    }

    // Fallback to getUserCurrency if no contract rates
    return getUserCurrency();
  }(currentPlan, Y);
  let Z = getRumLoggingConfig();
  return jsx(TrackingProvider, {
    name: j,
    properties: {
      teamId: team?.id,
      action,
      product_type: V,
      inPublishDraftExp: !!onBillingCompleteRedirectInfo,
      isCampfire: C,
      planType: consumptionPaywallUtils.consumptionPlanToPlanType(currentPlan),
      ...w
    },
    trackingOptions: Z,
    children: jsxs(ModalContainer, {
      'data-testid': 'consumption-paywall-modal-plans-pricing-inner-modal',
      'title': L,
      'titleClassName': C ? 'consumption_paywall_modals--campfireLargeModalTitle--1D-kj' : 'consumption_paywall_modals--largeModalTitle--kOqov',
      'size': 600,
      'popStack': true,
      'className': 'consumption_paywall_modals--largeModal--gQbzP',
      'children': [jsx(CloseButton, {
        className: 'consumption_paywall_modals--closeButton--cGAYf close_button--modalUpperRightCorner--eKAQg',
        onClick: cancel,
        innerText: 'Close',
        trackingProperties: {
          inPublishDraftExp: !!onBillingCompleteRedirectInfo
        }
      }), jsxs('p', {
        'data-testid': 'consumption-paywall-modal-plans-pricing-inner-subtitle',
        'className': C ? cssBuilderInstance.textBodyLarge.colorTextSecondary.$ : 'consumption_paywall_modals--largeModalSubtitle--vwxPe',
        'style': styleBuilderInstance.if(C, styleBuilderInstance.add({
          marginTop: '-16px'
        })).$,
        'children': [F, M ? jsxs(Fragment, {
          children: [' ', M]
        }) : null]
      }), C && jsx(hK, {
        height: 16
      }), jsxs('div', {
        className: C ? cssBuilderInstance.flex.justifyBetween.b1.colorBorder.font13.$ : 'consumption_paywall_modals--planBoxContainer--MmvjD text--fontPos13--xW8hS text--_fontBase--QdLsd',
        style: styleBuilderInstance.if(C, styleBuilderInstance.add({
          borderRadius: '13px'
        })).$,
        children: [jsx(PlanBox, {
          currency: q,
          currentPlan,
          editorType,
          onStarterPlanCtaClick: resource === FeatureFlag.TEAM_LIBRARY ? e.onStarterPlanCtaClick : void 0,
          plan: currentPlan,
          planBoxHeaderSize: T,
          resource,
          setPlanBoxHeaderSize: R,
          showBillingInfo: Y,
          showCta: false,
          startUpgradeFlow: startProUpgradeFlow,
          teamId: team?.id ?? null,
          upsellPlan
        }), C && jsx('div', {
          className: cssBuilderInstance.bSolid.br1.colorBorder.$
        }), jsx(PlanBox, {
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
          upsellPlan
        })]
      }), hideUpsellPlanCta && jsxs('div', {
        'data-testid': 'ask-admin-to-upgrade',
        'className': 'x78zum5 x6s0dn4 xfifm61 xw7yly9',
        'children': [jsx(_$$$, {}), renderI18nText('consumption_paywalls.ask_admin_to_upgrade')]
      }), modalFooter]
    })
  });
}
function PaywallModalWrapper(e) {
  let {
    cannotUpgradeTeam,
    isLoading
  } = function (e) {
    let t = e.team?.id;
    let i = useSubscription(TeamCanEdit, {
      id: t ?? ''
    }, {
      enabled: !!t
    });
    let n = i.status === 'loading';
    let r = i.status === 'loaded' && !i.data.team?.hasPermission;
    return {
      cannotUpgradeTeam: !!t && e.currentPlan === consumptionPaywallUtils.Plan.STARTER && r,
      isLoading: n
    };
  }(e);
  let r = {
    ...e,
    hideUpsellPlanCta: e.hideUpsellPlanCta || cannotUpgradeTeam,
    team: e.team ?? null
  };
  return isLoading ? jsx(ModalTitle, {
    ...e
  }) : jsx(ConsumptionPaywallModal, {
    ...r
  });
}
export function ConsumptionPaywallModalComponent(e) {
  let t = useDispatch<AppDispatch>();
  return jsx(ErrorBoundaryCrash, {
    boundaryKey: 'ConsumptionPaywallModal',
    fallback: errorBoundaryFallbackTypes.NONE_I_KNOW_WHAT_IM_DOING,
    sentryTags: {
      area: ServiceCategories.MONETIZATION_UPGRADES
    },
    onError: () => {
      t(VisualBellActions.enqueue({
        message: getI18nString('consumption_paywalls.error.modal'),
        error: !0
      }));
    },
    children: jsx(Suspense, {
      fallback: jsx(ModalTitle, {
        ...e
      }),
      children: jsx(PaywallModalWrapper, {
        ...e
      })
    })
  });
}
export const bP = ConsumptionPaywallModalComponent;
export let ConsumptionPaywallModalPlansPricing = registerModal(ConsumptionPaywallModalComponent, 'ConsumptionPaywallModalPlansPricing');
export const DV = ConsumptionPaywallModalPlansPricing;
