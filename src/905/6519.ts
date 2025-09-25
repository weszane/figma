import type { Payment } from '../../types/app'
import classNames from 'classnames'
import { noop } from 'lodash-es'
import W from 'lodash-es/mapValues'
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Fragment, jsx, jsxs } from 'react/jsx-runtime'
import { BillingPriceSource, ensureLoadedResource, setupActiveRatesTransform } from '../905/84777'
import { KindEnum } from '../905/129884'
import { showModalHandler } from '../905/156213'
import { UpsellModalType } from '../905/165519'
import { CurrencySwitcherDropdown } from '../905/251759'
import { getI18nString, renderI18nText } from '../905/303541'
import { designSet } from '../905/332483'
import { UpgradeAction } from '../905/370443'
import { SalesUpsellModalType } from '../905/380801'
import { trackEventAnalytics } from '../905/449184'
import { ChartFeatureDetailsMap, getPlanButtonText, OrgChartFeatureKeys, PlanComparisonTiers, PlanDetailsConfig, PlanHighlightBadgeText, PlanHighlightBadgeType, StarterChartFeatureKeys, StudentChartFeatureKeys, StudentComparisonTiers, SubscriptionPlans, UpgradePlanTiers } from '../905/472146'
import { ProductAccessTypeEnum } from '../905/513035'
import { In as renderIcon } from '../905/672640'
import { ProductTierEnum, RenewalTermEnum } from '../905/712921'
import { SvgComponent } from '../905/714743'
import { IntersectionSentinel } from '../905/925868'
import { styleBuilderInstance } from '../905/941192'
import { TextWithTruncation } from '../905/984674'
import { A as SVG } from '../6828/871993'
import { cssBuilderInstance } from '../cssbuilder/589278'
import { lk } from '../figma_app/109538'
import { isStudentValidated } from '../figma_app/141320'
import { FPlanNameType } from '../figma_app/191312'
import { trackContextViewed } from '../figma_app/314264'
import { PRICING_URL } from '../figma_app/345997'
import { renderCheckoutDevModeText } from '../figma_app/361869'
import { throwTypeError } from '../figma_app/465776'
import { CurrencyFormatter, getAllowedCartCurrencies, getUserCurrency, isNonUsdUserCurrency } from '../figma_app/514043'
import { handleSuspenseRetainRelease } from '../figma_app/566371'
import { ButtonBasePrimary, ButtonBasePrimaryTracked, ButtonSecondaryTracked, linkWithTracking } from '../figma_app/637027'
import { isNonAllowedDomainEmail } from '../figma_app/698052'
import { PlanType, SubscriptionType } from '../figma_app/831101'
import { TrackingProvider } from '../figma_app/831799'
import { isDevHandoffEditorType } from '../figma_app/976749'

/**
 * BillingToggle - Renders the billing period toggle UI.
 * @param props.currentPlan - Current selected plan type.
 * @param props.setCurrentPlan - Callback to set the selected plan type.
 */
function BillingToggle({
  currentPlan,
  setCurrentPlan,
}: {
  currentPlan: string
  setCurrentPlan: (plan: string) => void
}) {
  /**
   * handleToggle - Handles billing period toggle click.
   * @param event - Click event from toggle button.
   */
  const handleToggle = (event: React.MouseEvent<HTMLButtonElement>) => {
    const newDisplay = event.currentTarget.id
    trackEventAnalytics('Toggled Billing Display', {
      prevDisplay: currentPlan,
      newDisplay,
    })
    setCurrentPlan(newDisplay)
  }

  return jsxs('div', {
    className: 'billing_toggle--container--X2E7D',
    children: [
      jsx(BillingToggleButton, {
        id: PlanType.MONTHLY,
        selected: currentPlan === PlanType.MONTHLY,
        onClick: handleToggle,
        children: renderI18nText('plan_comparison.billing_toggle.monthly_billing'),
      }),
      jsx(BillingToggleButton, {
        id: PlanType.ANNUAL,
        selected: currentPlan === PlanType.ANNUAL,
        onClick: handleToggle,
        children: renderI18nText('plan_comparison.billing_toggle.yearly_billing', {
          saveMessage: jsx('strong', {
            className: 'billing_toggle--saveMessage--OSfKi',
            children: renderI18nText('plan_comparison.billing_toggle.yearly_billing_save_message', {
              saveAmount: 40,
            }),
          }),
        }),
      }),
    ],
  })
}

/**
 * BillingToggleButton - Button for billing period selection.
 * @param props.id - PlanType id.
 * @param props.children - Button label.
 * @param props.selected - Is this button selected.
 * @param props.onClick - Click handler.
 */
function BillingToggleButton({
  id,
  children,
  selected,
  onClick,
}: {
  id: string
  children: React.ReactNode
  selected: boolean
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
}) {
  return jsx('button', {
    'role': 'tab',
    id,
    'className': classNames('billing_toggle--toggle--SK77Z', {
      'billing_toggle--toggle__selected---odLE': selected,
    }),
    'aria-selected': selected,
    'aria-controls': `${id}-tab`,
    onClick,
    children,
  })
}

const PLAN_COMPARISON_CHART_NAME = 'Plan comparison chart'

const SubscriptionTypeToPlanType: Record<string, string> = {
  [SubscriptionType.UNSPECIFIED]: PlanType.ANNUAL,
  [SubscriptionType.MONTHLY]: PlanType.MONTHLY,
  [SubscriptionType.ANNUAL]: PlanType.ANNUAL,
  [SubscriptionType.STUDENT]: PlanType.ANNUAL,
}

const PlanTypeToSubscriptionType = {
  [PlanType.MONTHLY]: SubscriptionType.MONTHLY,
  [PlanType.ANNUAL]: SubscriptionType.ANNUAL,
}

/**
 * getHighlightedPlan - Determines which plan should be highlighted.
 */
function getHighlightedPlan({
  overrideHighlightedPlan,
  isProCurrent,
}: {
  overrideHighlightedPlan?: string
  isProCurrent?: boolean
}) {
  return overrideHighlightedPlan
    ? overrideHighlightedPlan === 'none'
      ? null
      : overrideHighlightedPlan
    : isProCurrent
      ? FPlanNameType.ORG
      : FPlanNameType.PRO
}

/**
 * getOrderedPlans - Returns the ordered plan tiers for comparison.
 */
function getOrderedPlans({
  isProCurrent,
  isStudentUser,
}: {
  isProCurrent?: boolean
  isStudentUser?: boolean
}) {
  return isProCurrent
    ? UpgradePlanTiers
    : isStudentUser
      ? StudentComparisonTiers
      : PlanComparisonTiers
}

/**
 * getFeatureKeys - Returns the feature keys for the chart.
 */
function getFeatureKeys({
  isProCurrent,
  featureList,
  shouldShowDevModePlanComparison,
}: {
  isProCurrent?: boolean
  featureList?: string[]
  shouldShowDevModePlanComparison?: boolean
}) {
  return featureList
    || (isProCurrent
      ? OrgChartFeatureKeys
      : shouldShowDevModePlanComparison
        ? StudentChartFeatureKeys
        : StarterChartFeatureKeys)
}

/**
 * getCurrentPlanTier - Returns the current plan tier.
 */
function getCurrentPlanTier({
  isProCurrent,
}: {
  isProCurrent?: boolean
}) {
  return isProCurrent ? FPlanNameType.PRO : FPlanNameType.STARTER
}

/**
 * getBillingPeriod - Returns the billing period for the chart.
 */
function getBillingPeriod({
  isStudentUser,
  payment,
  subscriptionPlan,
}: {
  isStudentUser?: boolean
  payment: Payment
  subscriptionPlan: string
}) {
  return isStudentUser && payment.billingPeriod === SubscriptionType.STUDENT
    ? SubscriptionType.STUDENT
    : PlanTypeToSubscriptionType[subscriptionPlan]
}

/**
 * getPlanComparisonChartData - Returns all derived chart data for rendering.
 */
function getPlanComparisonChartData(params: {
  isProCurrent?: boolean
  isStudentUser?: boolean
  shouldShowDevModePlanComparison?: boolean
  overrideHighlightedPlan?: string
  featureList?: string[]
  payment: Payment
  subscriptionPlan: string
}) {
  const seeMoreLinkText = renderI18nText('plan_details.see_all_features')
  return {
    orderedPlans: getOrderedPlans(params),
    orderedFeatures: getFeatureKeys(params),
    currentPlan: getCurrentPlanTier(params),
    highlightedPlan: getHighlightedPlan(params),
    billingPeriod: getBillingPeriod(params),
    seeMoreLinkText,
  }
}

/**
 * EnterprisePlanBanner - Banner for enterprise plan upsell.
 */
function EnterprisePlanBanner() {
  const dispatch = useDispatch<AppDispatch>()
  return jsxs('div', {
    'className': 'enterprise_plan_banner--bannerContainer--33XIO',
    'data-testid': 'enterprise_plan_banner',
    'children': [
      jsx('div', {
        className: 'enterprise_plan_banner--bannerIcon--x7Rua',
        children: jsx(renderIcon, {
          icon: 'org-32',
        }),
      }),
      jsxs('div', {
        className: 'enterprise_plan_banner--bannerTextContainer--ArcyT',
        children: [
          jsx('h2', {
            className: 'enterprise_plan_banner--bannerHeader--p-9bR',
            children: renderI18nText('universal_upgrade.enterpise_plan_banner.banner_header'),
          }),
          jsx('span', {
            className: 'enterprise_plan_banner--bannerTextBody--MlQOd',
            children: renderI18nText('universal_upgrade.enterpise_plan_banner.banner_body_text'),
          }),
        ],
      }),
      jsx(ButtonSecondaryTracked, {
        className: 'enterprise_plan_banner--contactSalesCTA--WGqtx',
        onClick: () =>
          dispatch(
            showModalHandler({
              type: lk,
              data: {
                source: SalesUpsellModalType.PLAN_COMPARISON,
              },
            }),
          ),
        trackingProperties: {
          trackingDescriptor: UpgradeAction.ENTERPRISE_PLAN_BANNER_CONTACT_SALES,
        },
        children: renderI18nText('universal_upgrade.enterpise_plan_banner.contact_sales'),
      }),
    ],
  })
}

const mapValues = W
const PLAN_INFORMATION_BUTTON_CLASS = 'plan_information--button---7EXI'

/**
 * PlanInformationHeader - Renders plan header and badge.
 */
function PlanInformationHeader({
  planTier,
  isProCurrent,
  isProTrial,
  isHighlighted,
  overrideHighlightedBadgeText,
  upsellSource,
}: {
  planTier: string
  isProCurrent?: boolean
  isProTrial?: boolean
  isHighlighted?: boolean
  overrideHighlightedBadgeText?: string
  upsellSource?: string
}) {
  const { name, description } = PlanDetailsConfig[planTier]
  return jsxs('div', {
    children: [
      jsxs('h2', {
        className: cssBuilderInstance.font16.fontSemiBold.flex.flexWrap.itemsCenter.$,
        children: [
          name(),
          ' ',
          jsx(PlanHighlightBadge, {
            planTier,
            isProCurrent,
            isProTrial,
            isHighlighted,
            overrideHighlightedBadgeText,
            upsellSource,
          }),
        ],
      }),
      jsxs('p', {
        className: cssBuilderInstance.mt8.colorTextSecondary.$,
        children: [
          description(),
          ' ',
          isProCurrent && planTier !== FPlanNameType.PRO
            ? renderI18nText('plan_comparison.plans.billed_yearly')
            : null,
        ],
      }),
    ],
  })
}

/**
 * PlanHighlightBadge - Renders badge for highlighted plan.
 */
function PlanHighlightBadge({
  planTier,
  isProCurrent,
  isProTrial,
  isHighlighted,
  overrideHighlightedBadgeText,
  upsellSource,
}: {
  planTier: string
  isProCurrent?: boolean
  isProTrial?: boolean
  isHighlighted?: boolean
  overrideHighlightedBadgeText?: string
  upsellSource?: string
}) {
  const { highlightBadgeText } = PlanDetailsConfig[planTier]
  const badgeClass = cssBuilderInstance.ml8.fontMedium.font11.colorTextBrand.$
  const isFreeUser = useSelector<AppState>(state => state.isFreeUser)

  // Starter plan badge
  if (planTier === FPlanNameType.STARTER) {
    if (upsellSource === UpsellModalType.CREATE_NEW_PAID_TEAM && isFreeUser) {
      return jsx('strong', {
        className: cssBuilderInstance.ml8.fontMedium.font11.colorTextSecondary.$,
        children: renderI18nText('plan_comparison.plans.starter.current_plan'),
      })
    }
  }
  // Pro trial badge
  if (planTier === FPlanNameType.PRO && isProTrial) {
    return jsx('strong', {
      className: badgeClass,
      children: jsx(TextWithTruncation, {
        children: renderI18nText('plan_comparison.plans.current_trial'),
      }),
    })
  }
  // Highlighted badge
  if (isHighlighted && highlightBadgeText) {
    const badgeText = overrideHighlightedBadgeText
      ? PlanHighlightBadgeText[overrideHighlightedBadgeText]()
      : highlightBadgeText?.(
          isProCurrent
            ? PlanHighlightBadgeType.RECOMMENDED
            : PlanHighlightBadgeType.MOST_VALUED,
        )
    return jsx('strong', {
      className: badgeClass,
      children: badgeText,
    })
  }
  return null
}

/**
 * PlanInformationPrice - Renders price information for a plan.
 */
function PlanInformationPrice({
  currentSubscriptionPlan,
  setCurrentSubscriptionPlan,
  currency,
  planTier,
  isCurrentPlan,
  showFullCurrencyFormat,
}: {
  currentSubscriptionPlan: string
  setCurrentSubscriptionPlan: (plan: string) => void
  currency: string
  planTier: string
  isCurrentPlan: boolean
  showFullCurrencyFormat: boolean
}) {
  if (isCurrentPlan || planTier === FPlanNameType.STARTER)
    return null
  const { hasAnnualOnlyMessage } = PlanDetailsConfig[planTier]
  if (currentSubscriptionPlan !== PlanType.ANNUAL && hasAnnualOnlyMessage) {
    return jsx('p', {
      children: renderI18nText('plan_comparison.plans.org.annual_only_message', {
        billingToggle: jsx('button', {
          'data-testid': 'plan-information-toggle-billing',
          'className': 'plan_information--annualToggleButton--UnCMk blue_link--blueLink--9rlnd',
          'onClick': () => setCurrentSubscriptionPlan(PlanType.ANNUAL),
          'children': renderI18nText('plan_comparison.plans.button.annual_billing_toggle'),
        }),
      }),
    })
  }
  return jsx(PlanPriceDetails, {
    currentSubscriptionPlan,
    currency,
    planTier,
    showFullCurrencyFormat,
  })
}

/**
 * PlanPriceDetails - Renders detailed price rows for a plan.
 */
function PlanPriceDetails({
  currentSubscriptionPlan,
  currency,
  planTier,
  showFullCurrencyFormat,
}: {
  currentSubscriptionPlan: string
  currency: string
  planTier: FPlanNameType
  showFullCurrencyFormat: boolean
}) {
  const isFigmaPlan
    = [FPlanNameType.STUDENT, FPlanNameType.PRO, FPlanNameType.ORG, FPlanNameType.ENTERPRISE].includes(planTier)
  const isOrgOrEnterprise
    = [FPlanNameType.ORG, FPlanNameType.ENTERPRISE].includes(planTier)
  const designSetConfig = isOrgOrEnterprise
    ? designSet
    : designSet.exclude([ProductAccessTypeEnum.DEV_MODE])
  const productTier = (() => {
    switch (planTier) {
      case FPlanNameType.ENTERPRISE:
        return ProductTierEnum.ENTERPRISE
      case FPlanNameType.ORG:
        return ProductTierEnum.ORG
      case FPlanNameType.PRO:
      case FPlanNameType.STUDENT:
        return ProductTierEnum.PRO
      default:
        throwTypeError(planTier)
    }
  })()
  const renewalTerm
    = currentSubscriptionPlan === PlanType.ANNUAL
      ? RenewalTermEnum.YEAR
      : RenewalTermEnum.MONTH
  const unit = RenewalTermEnum.MONTH
  const billableProducts = designSetConfig.dict(key => ({
    currency,
    billableProductKey: key,
    billableProductVariantKey: null,
    tier: productTier,
    renewalTerm,
    unit,
  }))
  const ratesResource = setupActiveRatesTransform(billableProducts, BillingPriceSource.UPSELL_MODALS)
  const [rates] = handleSuspenseRetainRelease(ratesResource)
  const loadedRates = ensureLoadedResource(rates)
  const formatter = new CurrencyFormatter(currency)
  const formattedPrices = mapValues(loadedRates.data, rate =>
    formatter.formatMoney(rate.amount, { showFullFormat: showFullCurrencyFormat }))
  const rowClass = cssBuilderInstance.flex.justifyBetween.itemsCenter.gap6.$
  const labelClass = cssBuilderInstance.fontMedium.font11.colorText.$
  const columnStyle = styleBuilderInstance.flex.flexColumn.add({ maxWidth: '50%' }).$
  const priceClass = cssBuilderInstance.fontSemiBold.font16.colorText.$
  const noWrapClass = cssBuilderInstance.noWrap.$

  return jsxs('div', {
    className: 'plan_information--priceContainer--vjnZv',
    children: [
      jsxs('div', {
        'className': rowClass,
        'data-testid': 'design-price-row',
        'children': [
          jsxs('div', {
            style: columnStyle,
            children: [
              jsx('p', {
                className: labelClass,
                children: renderI18nText('plan_details.figma'),
              }),
              isFigmaPlan
              && jsx('p', {
                className: noWrapClass,
                children: jsx(renderCheckoutDevModeText, {}),
              }),
            ],
          }),
          jsx('p', {
            className: noWrapClass,
            children: renderI18nText('plan_details.price_editor_mo.seat_rename', {
              price: jsx('strong', {
                className: priceClass,
                children: formattedPrices[ProductAccessTypeEnum.DESIGN],
              }),
            }),
          }),
        ],
      }),
      isOrgOrEnterprise
      && ProductAccessTypeEnum.DEV_MODE in formattedPrices
      && jsxs('div', {
        'className': rowClass,
        'data-testid': 'dev-mode-price-row',
        'children': [
          jsx('div', {
            style: columnStyle,
            children: jsx('p', {
              className: labelClass,
              children: renderI18nText('plan_details.dev_mode_only'),
            }),
          }),
          jsx('p', {
            className: noWrapClass,
            children: renderI18nText('plan_details.price_editor_mo.seat_rename', {
              price: jsx('strong', {
                className: priceClass,
                children: formattedPrices[ProductAccessTypeEnum.DEV_MODE],
              }),
            }),
          }),
        ],
      }),
      jsxs('div', {
        'className': rowClass,
        'data-testid': 'whiteboard-price-row',
        'children': [
          jsx('p', {
            className: labelClass,
            children: renderI18nText('plan_details.fig_jam'),
          }),
          jsx('p', {
            className: noWrapClass,
            children: renderI18nText('plan_details.price_editor_mo.seat_rename', {
              price: jsx('strong', {
                className: priceClass,
                children: formattedPrices[ProductAccessTypeEnum.FIGJAM],
              }),
            }),
          }),
        ],
      }),
    ],
  })
}

/**
 * PlanActionButton - Renders the action button for a plan.
 */
function PlanActionButton({
  planTier,
  chooseStarterPlan,
  chooseProPlan,
  chooseOrgPlan,
  isCurrentPlan,
  upsellSource,
}: {
  planTier: FPlanNameType
  chooseStarterPlan?: () => void
  chooseProPlan?: () => void
  chooseOrgPlan?: () => void
  isCurrentPlan: boolean
  upsellSource?: UpsellModalType
}) {
  const dispatch = useDispatch<AppDispatch>()
  const teamCreationLoading = useSelector<AppState>(state => state.teamCreation.loading)

  // Disabled button for current plan
  if (isCurrentPlan && !chooseStarterPlan) {
    const isStarterLimitReached = upsellSource === UpsellModalType.CREATE_NEW_PAID_TEAM
    return jsx(ButtonBasePrimary, {
      'className': PLAN_INFORMATION_BUTTON_CLASS,
      'data-testid': `plan-information-${planTier}-button`,
      'data-tooltip': isStarterLimitReached
        ? getI18nString('plan_comparison.plans.starter.you_already_have_a_starter_team')
        : undefined,
      'data-tooltip-max-width': 200,
      'data-tooltip-offset-y': -8,
      'data-tooltip-show-above': true,
      'data-tooltip-show-immediately': true,
      'data-tooltip-type': KindEnum.TEXT,
      'disabled': true,
      'onClick': noop,
      'style': styleBuilderInstance.wFull.h32.$,
      'children': isStarterLimitReached
        ? renderI18nText('plan_comparison.plans.starter.limit_reached')
        : renderI18nText('plan_comparison.plans.button.current_plan'),
    })
  }

  const { buttonText, trackingDescriptor } = PlanDetailsConfig[planTier]
  const isSecondary
    = (isCurrentPlan && !!chooseStarterPlan) || planTier === FPlanNameType.ENTERPRISE
  const isLoading
    = planTier === FPlanNameType.STARTER
      && upsellSource === UpsellModalType.CREATE_NEW_PAID_TEAM
      && teamCreationLoading

  const actionHandlers: Record<string, () => void> = {
    [FPlanNameType.STARTER]: chooseStarterPlan ?? noop,
    [FPlanNameType.PRO]: chooseProPlan ?? noop,
    [FPlanNameType.ORG]: chooseOrgPlan ?? noop,
    [FPlanNameType.STUDENT]: chooseProPlan ?? noop,
    [FPlanNameType.ENTERPRISE]: () =>
      dispatch(
        showModalHandler({
          type: lk,
          data: {
            source: SalesUpsellModalType.PLAN_COMPARISON,
          },
        }),
      ),
  }

  const ButtonComponent = isSecondary ? ButtonSecondaryTracked : ButtonBasePrimaryTracked

  return jsx(ButtonComponent, {
    'style': styleBuilderInstance.wFull.h32.$,
    'className': PLAN_INFORMATION_BUTTON_CLASS,
    'onClick': actionHandlers[planTier],
    'disabled': isLoading,
    'data-testid': `plan-information-${planTier}-button`,
    'trackingProperties': {
      trackingDescriptor,
      upsellSource,
    },
    'children': getPlanButtonText({
      planTier,
      upsellSource,
      buttonText,
    }),
  })
}

/**
 * PlanContactSalesOrUpgrade - Renders contact sales or upgrade existing team links.
 */
function PlanContactSalesOrUpgrade({
  planTier,
  withUpgradeExistingTeamOption,
}: {
  planTier: string
  withUpgradeExistingTeamOption?: () => void
}) {
  const dispatch = useDispatch<AppDispatch>()
  const { canContactSales, additionalMessage } = PlanDetailsConfig[planTier]
  return jsxs('div', {
    className: cssBuilderInstance.alignCenter.$,
    children: [
      canContactSales
      && jsx('p', {
        children: renderI18nText('plan_comparison.plans.or_contact_sales', {
          contactSalesLink: jsx(linkWithTracking, {
            'className': cssBuilderInstance.noWrap.cursorDefault.$,
            'onClick': () =>
              dispatch(
                showModalHandler({
                  type: lk,
                  data: {
                    source: SalesUpsellModalType.PLAN_COMPARISON,
                  },
                }),
              ),
            'data-testid': 'plan-information-contact-sales',
            'trusted': true,
            'children': renderI18nText('plan_details.contact_sales'),
          }),
        }),
      }),
      !!withUpgradeExistingTeamOption
      && jsx('p', {
        children: jsx(linkWithTracking, {
          'onClick': withUpgradeExistingTeamOption,
          'data-testid': 'plan-information-upgrade-existing',
          'trackingProperties': {
            trackingDescriptor: UpgradeAction.UPGRADE_EXISTING_TEAM,
          },
          'trusted': true,
          'children': renderI18nText('plan_comparison.plans.pro.upgrade_an_existing_team'),
        }),
      }),
      additionalMessage
      && jsx('p', {
        children: additionalMessage(),
      }),
    ],
  })
}
let ed = 'comparison_chart--highlighted--8Inf9'
let ec = 'comparison_chart--planInformationContainer--ZaSLe'
let eu = 'comparison_chart--featureContainer--55YGy'
/**
 * PlanComparisonChart - Main component for rendering the plan comparison chart.
 * @param props.currency - Current currency.
 * @param props.chooseStarterPlan - Handler for choosing starter plan.
 * @param props.chooseProPlan - Handler for choosing pro plan.
 * @param props.chooseOrgPlan - Handler for choosing org plan.
 * @param props.updateCurrency - Handler for updating currency.
 * @param props.isProTrial - Is user on pro trial.
 * @param props.upsellSource - Source for upsell modal.
 * @param props.isProCurrent - Is user on pro plan.
 * @param props.overrideHighlightedPlan - Override highlighted plan.
 * @param props.overrideHighlightedBadgeText - Override highlighted badge text.
 * @param props.featureList - List of features to show.
 * @param props.parentRef - Ref to parent container.
 * @param props.withUpgradeExistingTeamOption - Handler for upgrading existing team.
 */
export function PlanComparisonChart({
  currency,
  chooseStarterPlan,
  chooseProPlan,
  chooseOrgPlan,
  updateCurrency,
  isProTrial,
  upsellSource,
  isProCurrent,
  overrideHighlightedPlan,
  overrideHighlightedBadgeText,
  featureList,
  parentRef,
  withUpgradeExistingTeamOption,
}: {
  currency: string
  chooseStarterPlan?: () => void
  chooseProPlan?: (billingPeriod: string) => void
  chooseOrgPlan?: () => void
  updateCurrency?: (currency: string) => void
  isProTrial?: boolean
  upsellSource?: string
  isProCurrent?: boolean
  overrideHighlightedPlan?: string
  overrideHighlightedBadgeText?: string
  featureList?: string[]
  parentRef?: React.RefObject<HTMLDivElement>
  withUpgradeExistingTeamOption?: (billingPeriod: string) => void
}) {
  const dropdownShown = useSelector((state: AppState) => state.dropdownShown)
  const user = useSelector((state: AppState) => state.user)
  const payment = useSelector((state: AppState) => state.payment)
  const [currentSubscriptionPlan, setCurrentSubscriptionPlan] = useState(
    payment.billingPeriod ? SubscriptionTypeToPlanType[payment.billingPeriod] : PlanType.ANNUAL,
  )

  /**
   * usePlanComparisonChartData - Memoized chart data for rendering.
   */
  const {
    highlightedPlan,
    orderedFeatures,
    orderedPlans,
    currentPlan,
    billingPeriod,
    seeMoreLinkText,
  } = usePlanComparisonChartData({
    isProCurrent,
    featureList,
    overrideHighlightedPlan,
    subscriptionPlan: currentSubscriptionPlan,
  })

  const showEnterpriseBanner = !isProCurrent && isNonAllowedDomainEmail(user)

  /**
   * useBottomIntersectionSentinel - Tracks when bottom of chart is visible.
   */
  const bottomIntersectionSentinel = useBottomIntersectionSentinel(parentRef)

  return jsx(TrackingProvider, {
    name: PLAN_COMPARISON_CHART_NAME,
    properties: {
      highlightedPlan,
      currentPlan,
    },
    children: jsxs('div', {
      'className': 'comparison_chart--container--TQFzy',
      'data-testid': 'comparison-chart',
      'children': [
        !isProCurrent && jsx('div', {
          className: 'comparison_chart--billingToggleContainer--yBLn9',
          children: jsx(BillingToggle, {
            currentPlan: currentSubscriptionPlan,
            setCurrentPlan: setCurrentSubscriptionPlan,
          }),
        }),
        isNonUsdUserCurrency() && jsx('div', {
          className: 'comparison_chart--currencySwitcherContainer--wyBip',
          children: jsx(CurrencySwitcherDropdown, {
            currency,
            dropdownShown,
            supportedCurrencies: getAllowedCartCurrencies(),
            changeCurrency: updateCurrency,
            shortFormDisplay: false,
          }),
        }),
        jsxs('div', {
          className: 'comparison_chart--tableContainer--qO9-w',
          role: 'tabpanel',
          id: `${currentSubscriptionPlan}-tab`,
          children: [
            jsxs('table', {
              className: 'comparison_chart--table--68WLi',
              children: [
                jsxs('colgroup', {
                  children: [
                    jsx('col', { span: 1 }),
                    orderedPlans.map(plan =>
                      jsx('col', { span: 1 }, plan),
                    ),
                  ],
                }),
                jsxs('thead', {
                  children: [
                    // Plan headers
                    jsxs('tr', {
                      children: [
                        jsx('th', { className: eu }),
                        orderedPlans.map(plan =>
                          jsx('th', {
                            className: classNames(ec, cssBuilderInstance.pt24.pb12.$, {
                              [ed]: plan === highlightedPlan,
                            }),
                            children: jsx(PlanInformationHeader, {
                              planTier: plan,
                              isProCurrent,
                              isProTrial,
                              isHighlighted: plan === highlightedPlan,
                              upsellSource,
                              overrideHighlightedBadgeText,
                            }),
                          }, plan),
                        ),
                      ],
                    }),
                    // Plan prices
                    jsxs('tr', {
                      children: [
                        jsx('th', { className: eu }),
                        orderedPlans.map(plan =>
                          jsx('th', {
                            className: classNames(ec, cssBuilderInstance.pt12.pb12.$, {
                              [ed]: plan === highlightedPlan,
                            }),
                            children: jsx(PlanInformationPrice, {
                              planTier: plan,
                              currency,
                              currentSubscriptionPlan,
                              setCurrentSubscriptionPlan,
                              isCurrentPlan: plan === currentPlan,
                              showFullCurrencyFormat: currency === 'usd' && getUserCurrency() === 'cad',
                            }),
                          }, plan),
                        ),
                      ],
                    }),
                    // Plan action buttons
                    jsxs('tr', {
                      children: [
                        jsx('th', { className: eu }),
                        orderedPlans.map(plan =>
                          jsx('th', {
                            className: classNames(ec, cssBuilderInstance.pt12.$, {
                              [ed]: plan === highlightedPlan,
                            }),
                            children: jsx(PlanActionButton, {
                              planTier: plan,
                              chooseStarterPlan,
                              chooseProPlan: () => chooseProPlan?.(billingPeriod),
                              chooseOrgPlan,
                              isCurrentPlan: plan === currentPlan,
                              upsellSource,
                            }),
                          }, plan),
                        ),
                      ],
                    }),
                    // Contact sales or upgrade existing team
                    jsxs('tr', {
                      children: [
                        jsx('th', { className: eu }),
                        orderedPlans.map(plan =>
                          jsx('th', {
                            className: classNames(ec, cssBuilderInstance.pt8.pb12.$, {
                              [ed]: plan === highlightedPlan,
                            }),
                            children: jsx(PlanContactSalesOrUpgrade, {
                              planTier: plan,
                              withUpgradeExistingTeamOption:
                                plan === FPlanNameType.PRO && withUpgradeExistingTeamOption
                                  ? () => withUpgradeExistingTeamOption(billingPeriod)
                                  : undefined,
                            }),
                          }, plan),
                        ),
                      ],
                    }),
                  ],
                }),
                jsxs('tbody', {
                  children: [
                    orderedFeatures.map(feature =>
                      jsx(PlanComparisonFeatureRow, {
                        feature,
                        orderedPlans,
                        highlightedPlan,
                      }, feature),
                    ),
                    bottomIntersectionSentinel,
                  ],
                }),
              ],
            }),
            bottomIntersectionSentinel,
            jsx(SeeAllFeaturesLink, {
              linkText: seeMoreLinkText,
            }),
            showEnterpriseBanner && jsx(EnterprisePlanBanner, {}),
          ],
        }),
      ],
    }),
  })
}

/**
 * usePlanComparisonChartData - Custom hook for chart data.
 */
function usePlanComparisonChartData({
  overrideHighlightedPlan,
  featureList,
  isProCurrent,
  subscriptionPlan,
}: {
  overrideHighlightedPlan?: string
  featureList?: string[]
  isProCurrent?: boolean
  subscriptionPlan: string
}) {
  const shouldShowDevModePlanComparison = isDevHandoffEditorType()
  const isStudentUser = useSelector((state: AppState) => !!state.user && isStudentValidated(state.user))
  const payment = useSelector((state: AppState) => state.payment)
  return useMemo(
    () =>
      getPlanComparisonChartData({
        isProCurrent,
        isStudentUser,
        shouldShowDevModePlanComparison,
        overrideHighlightedPlan,
        featureList,
        payment,
        subscriptionPlan,
      }),
    [isProCurrent, isStudentUser, shouldShowDevModePlanComparison, overrideHighlightedPlan, featureList, payment, subscriptionPlan],
  )
}

/**
 * useBottomIntersectionSentinel - Tracks bottom visibility for analytics.
 */
function useBottomIntersectionSentinel(parentRef?: React.RefObject<HTMLDivElement>) {
  const [active, setActive] = useState(true)
  const trackBottomVisible = useCallback(() => {
    trackContextViewed({
      name: PLAN_COMPARISON_CHART_NAME,
      action: 'scrolled',
    })
  }, [])
  useEffect(() => {
    const ref = parentRef?.current
    if (ref) {
      if (active) {
        ref.addEventListener('scroll', trackBottomVisible, { once: true })
      }
      else {
        ref.removeEventListener('scroll', trackBottomVisible)
      }
    }
    return () => {
      ref?.removeEventListener('scroll', trackBottomVisible)
    }
  }, [parentRef, trackBottomVisible, active])
  return active
    ? jsx(IntersectionSentinel, {
        onIntersectionChange: ({ isIntersecting }) => {
          if (isIntersecting) {
            trackContextViewed({
              name: PLAN_COMPARISON_CHART_NAME,
              action: 'bottom_visible',
            })
            setActive(false)
          }
        },
      })
    : null
}

/**
 * PlanComparisonFeatureRow - Renders a feature row in the comparison chart.
 * @param props.feature - Feature key.
 * @param props.orderedPlans - Ordered plan tiers.
 * @param props.highlightedPlan - Highlighted plan tier.
 */
function PlanComparisonFeatureRow({
  feature,
  orderedPlans,
  highlightedPlan,
}: {
  feature: string
  orderedPlans: string[]
  highlightedPlan: string
}) {
  const [hasViewed, setHasViewed] = useState(false)
  const timeoutRef = useRef<number>()
  const hasSpecialTooltip = ChartFeatureDetailsMap[feature].tooltipSpecialKey !== undefined
  const tooltipType = hasSpecialTooltip ? KindEnum.SPECIAL : KindEnum.TEXT
  const tooltipContent = hasSpecialTooltip
    ? ChartFeatureDetailsMap[feature].tooltipSpecialKey
    : ChartFeatureDetailsMap[feature].details?.()

  return jsxs('tr', {
    children: [
      jsx('td', {
        'className': eu,
        'data-tooltip-type': tooltipType,
        'data-tooltip': tooltipContent,
        'data-tooltip-show-right': true,
        'data-tooltip-show-immediately': true,
        'data-tooltip-light-mode': true,
        'onMouseEnter': () => {
          if (!hasViewed) {
            timeoutRef.current = window.setTimeout(() => {
              setHasViewed(true)
              trackEventAnalytics('Plan Comparison Feature Viewed', {
                featureName: ChartFeatureDetailsMap[feature].id,
              })
            }, 1000)
          }
        },
        'onMouseLeave': () => {
          clearTimeout(timeoutRef.current)
        },
        'children': jsx('p', {
          className: 'comparison_chart--featureName--JQmtJ',
          children: ChartFeatureDetailsMap[feature].name(),
        }),
      }),
      orderedPlans.map(plan =>
        jsx('td', {
          className: classNames('comparison_chart--planFeature--Y4s5T', {
            [ed]: plan === highlightedPlan,
          }),
          children: jsx(PlanFeatureCell, {
            plan,
            feature,
          }, plan),
        }, plan),
      ),
    ],
  })
}

/**
 * PlanFeatureCell - Renders a cell for a feature in a plan.
 * @param props.plan - Plan tier.
 * @param props.feature - Feature key.
 */
function PlanFeatureCell({
  plan,
  feature,
}: {
  plan: string
  feature: string
}) {
  const value = SubscriptionPlans[plan][feature]
  return typeof value === 'boolean'
    ? value
      ? jsx(SvgComponent, {
          svg: SVG,
          className: 'comparison_chart--featureIcon--KVLwL',
          title: getI18nString('plan_comparison.chart.included'),
        })
      : null
    : jsx(Fragment, {
        children: value(),
      })
}

/**
 * SeeAllFeaturesLink - Link to see all features.
 * @param props.linkText - Link text.
 */
function SeeAllFeaturesLink({ linkText }: { linkText: string }) {
  return jsx(linkWithTracking, {
    'className': 'comparison_chart--allFeaturesLink--XNOLR',
    'href': PRICING_URL,
    'target': '_blank',
    'trusted': true,
    'data-testid': 'comparison-chart-see-all-features-link',
    'children': linkText,
  })
}

// Export refactored main chart component
export const O = PlanComparisonChart
