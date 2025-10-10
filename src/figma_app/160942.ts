// Refactored from /Users/allen/github/fig/src/figma_app/160942.ts
// Changes: Renamed functions and variables for clarity, added TypeScript interfaces and types for type safety, improved readability with comments, simplified logic where possible while preserving functionality. No bugs or performance issues identified beyond potential null checks (already handled with throws).

import { BillingPriceSource, ensureLoadedResource, setupActiveRatesTransform } from "../905/84777"
import { designSet } from "../905/332483"
import { ProductAccessTypeEnum } from "../905/513035"
import { ProductTierEnum, RenewalTermEnum } from "../905/712921"
import { handleSuspenseRetainRelease } from "../figma_app/566371"
import { SubscriptionType, UpgradeSteps } from "../figma_app/831101"


interface PricingCalculators {
  getDesignUnitCost: (subscriptionType: SubscriptionType) => number
  getWhiteboardUnitCost: (subscriptionType: SubscriptionType) => number
  estimatedDesignCost: (userCount: number, subscriptionType: SubscriptionType) => number
  estimatedWhiteboardCost: (userCount: number, subscriptionType: SubscriptionType) => number
}

// Original function name: $$d1
// Checks if the current view is eligible for promo review or team upgrade with promo
export function isEligibleForPromoReviewOrTeamUpgradeWithPromo(viewState: any, promoState: any): boolean {
  return viewState.view === "promoReview"
    || (viewState.view === "teamUpgrade" && viewState.paymentStep === UpgradeSteps.CONFIRM_PAY && promoState.promo)
}

// Original function name: $$c0
// Sets up pricing calculators for design and whiteboard (FigJam) based on currency
export function getPricingCalculators({ currency }: { currency: string }): PricingCalculators {
  // Get billable products excluding Dev Mode
  const billableProducts = designSet.exclude([ProductAccessTypeEnum.DEV_MODE])

  // Create pricing objects for annual subscriptions (billed yearly, unit monthly)
  const annualPricingObjects = billableProducts.dict(product => ({
    currency,
    billableProductKey: product,
    billableProductVariantKey: null,
    tier: ProductTierEnum.PRO,
    renewalTerm: RenewalTermEnum.YEAR,
    unit: RenewalTermEnum.MONTH,
  }))

  // Create pricing objects for monthly subscriptions
  const monthlyPricingObjects = billableProducts.dict(product => ({
    currency,
    billableProductKey: product,
    billableProductVariantKey: null,
    tier: ProductTierEnum.PRO,
    renewalTerm: RenewalTermEnum.MONTH,
    unit: RenewalTermEnum.MONTH,
  }))

  // Set up transforms for pricing data
  const annualTransform = setupActiveRatesTransform(annualPricingObjects, BillingPriceSource.PRO_CART)
  const monthlyTransform = setupActiveRatesTransform(monthlyPricingObjects, BillingPriceSource.PRO_CART)

  // Handle suspense and retain/release for the transforms
  const [annualResource, monthlyResource] = handleSuspenseRetainRelease(annualTransform, monthlyTransform)

  // Ensure resources are loaded
  const annualData = ensureLoadedResource(annualResource)
  const monthlyData = ensureLoadedResource(monthlyResource)

  // Throw if data is null (handles potential null checks)
  if (!annualData.data || !monthlyData.data) {
    throw new Error("Prices data was null")
  }

  // Extract amounts for design and whiteboard
  const annualDesignAmount = annualData.data[ProductAccessTypeEnum.DESIGN].amount
  const annualWhiteboardAmount = annualData.data[ProductAccessTypeEnum.FIGJAM].amount
  const monthlyDesignAmount = monthlyData.data[ProductAccessTypeEnum.DESIGN].amount
  const monthlyWhiteboardAmount = monthlyData.data[ProductAccessTypeEnum.FIGJAM].amount

  // Function to get design unit cost based on subscription type
  const getDesignUnitCost = (subscriptionType: SubscriptionType): number => {
    switch (subscriptionType) {
      case SubscriptionType.ANNUAL:
        return annualDesignAmount
      case SubscriptionType.MONTHLY:
        return monthlyDesignAmount
      case SubscriptionType.STUDENT:
        return 0
      default:
        throw new Error(`Unknown plan type: ${subscriptionType}`)
    }
  }

  // Function to get whiteboard unit cost based on subscription type
  const getWhiteboardUnitCost = (subscriptionType: SubscriptionType): number => {
    switch (subscriptionType) {
      case SubscriptionType.ANNUAL:
        return annualWhiteboardAmount
      case SubscriptionType.MONTHLY:
        return monthlyWhiteboardAmount
      case SubscriptionType.STUDENT:
        return 0
      default:
        throw new Error(`Unknown plan type: ${subscriptionType}`)
    }
  }

  // Return calculators object
  return {
    getDesignUnitCost,
    getWhiteboardUnitCost,
    // Estimated cost for design: user count * unit cost * (12 if annual, else 1)
    estimatedDesignCost: (userCount: number, subscriptionType: SubscriptionType): number =>
      userCount * getDesignUnitCost(subscriptionType) * (subscriptionType === SubscriptionType.ANNUAL ? 12 : 1),
    // Estimated cost for whiteboard: user count * unit cost * (12 if annual, else 1)
    estimatedWhiteboardCost: (userCount: number, subscriptionType: SubscriptionType): number =>
      userCount * getWhiteboardUnitCost(subscriptionType) * (subscriptionType === SubscriptionType.ANNUAL ? 12 : 1),
  }
}

// Exports with original names on left, refactored names on right
export const p = isEligibleForPromoReviewOrTeamUpgradeWithPromo
export const m = getPricingCalculators
