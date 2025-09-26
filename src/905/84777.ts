import { mapValues } from 'lodash-es'
import { reportError } from '../905/11'
import { ServiceCategories } from '../905/165054'
import { ProductPricesSchema } from '../905/712921'
import { liveStoreInstance, setupResourceAtomHandler } from '../905/713695'
import { resourceUtils } from '../905/989992'
import { isNullish } from '../figma_app/95419'
import { createMetaValidator } from '../figma_app/181241'
import { y as _$$y } from '../figma_app/681090'
/**
 * Types for plan and pricing queries
 */
export interface PlanKey {
  type: string
  parentId: string | null
}

export interface ContractRatesParams {
  planType: string
  planParentId: string
}

export interface AdminTeamPricesParams extends ContractRatesParams {
  renewalTerm: string
  nextInvoiceInterval: string
}

export interface ResourceAtomOptions {
  enabled?: boolean
  [key: string]: any
}

/**
 * RatesService - encapsulates pricing API calls and schema validation
 */
class RatesService {
  public RatesSchemaValidator: ReturnType<typeof createMetaValidator>

  constructor() {
    // RatesSchemaValidator
    this.RatesSchemaValidator = createMetaValidator('RatesSchemaValidator', ProductPricesSchema, null)
  }

  /**
   * getRates - fetches current rates
   */
  async getRates(params?: { parentId?: string, type?: string }) {
    return this.RatesSchemaValidator.validate(async ({ xr }) =>
      await xr.get('/api/pricing/rates', params
        ? {
            plan_parent_id: params.parentId,
            plan_type: params.type,
          }
        : {}),
    )
  }

  /**
   * getContractRates - fetches contract rates
   */
  async getContractRates({ planType, planParentId }: ContractRatesParams) {
    return this.RatesSchemaValidator.validate(async ({ xr }) =>
      await xr.get('/api/pricing/contract_rates', {
        plan_parent_id: planParentId,
        plan_type: planType,
      }),
    )
  }

  /**
   * getAdminContractRates - fetches admin contract rates
   */
  async getAdminContractRates({ planType, planParentId }: ContractRatesParams) {
    return this.RatesSchemaValidator.validate(async ({ xr }) =>
      await xr.get('/api/admin/pricing/contract_rates', {
        plan_parent_id: planParentId,
        plan_type: planType,
      }),
    )
  }

  /**
   * getPricesAtContractRenewal - fetches prices at contract renewal
   */
  async getPricesAtContractRenewal({ planType, planParentId }: ContractRatesParams) {
    return this.RatesSchemaValidator.validate(async ({ xr }) =>
      await xr.get('/api/pricing/prices_at_contract_renewal', {
        plan_parent_id: planParentId,
        plan_type: planType,
      }),
    )
  }

  /**
   * getAdminPricesAtContractRenewal - fetches admin prices at contract renewal
   */
  async getAdminPricesAtContractRenewal({ planType, planParentId }: ContractRatesParams) {
    return this.RatesSchemaValidator.validate(async ({ xr }) =>
      await xr.get('/api/admin/pricing/prices_at_contract_renewal', {
        plan_parent_id: planParentId,
        plan_type: planType,
      }),
    )
  }

  /**
   * getAdminTeamPricesAtNextInvoice - fetches admin team prices at next invoice
   */
  async getAdminTeamPricesAtNextInvoice(params: AdminTeamPricesParams) {
    return this.RatesSchemaValidator.validate(async ({ xr }) =>
      await xr.get('/api/admin/pricing/team_prices_at_next_invoice', {
        plan_parent_id: params.planParentId,
        plan_type: params.planType,
        renewal_term: params.renewalTerm,
        next_invoice_interval: params.nextInvoiceInterval,
      }),
    )
  }
}

const ratesService = new RatesService()

/**
 * BillingPriceStatus - enum for billing price status
 */
export enum BillingPriceStatus {
  CURRENT = 'current',
  AT_NEXT_RENEWAL = 'atNextRenewal',
}

/**
 * BillingPriceSource - enum for billing price sources
 */
export enum BillingPriceSource {
  ADMIN_SETTINGS = 'admin-settings',
  ORG_CART = 'org-cart',
  PRO_CART = 'pro-cart',
  UPSELL_MODALS = 'upsell-modals',
  UPSELL_MODALS_CONTRACT = 'upsell-modals-contract',
}

/**
 * reportBillingError - error reporter for billing
 */
function reportBillingError(error: any) {
  reportError(ServiceCategories.BILLING, error, (t) => {
    t.setExtras({ error })
    return t
  })
}

/**
 * activeRatesQuery - query for active rates
 */
export const activeRatesQuery = liveStoreInstance.Query({
  fetch: (params: any) =>
    ratesService.getRates(params).then(res => res.data.meta).catch((err) => {
      reportBillingError(err)
      return err
    }),
  key: 'billing_prices_active_rates',
})

/**
 * contractRatesQuery - query for contract rates
 */
export const contractRatesQuery = liveStoreInstance.Query({
  fetch: (params: ContractRatesParams) =>
    ratesService.getContractRates(params).then(res => res.data.meta).catch((err) => {
      reportBillingError(err)
      return err
    }),
  key: 'billing_prices_contract_rates',
})

/**
 * currentContractRatesQuery - query for current contract rates
 */
export const currentContractRatesQuery = liveStoreInstance.Query({
  fetch: async ({ planKey }: { planKey: PlanKey }) => {
    try {
      return (await ratesService.getContractRates({
        planType: planKey.type,
        planParentId: planKey.parentId || '',
      })).data.meta
    }
    catch (err) {
      reportBillingError(err)
      return err
    }
  },
  enabled: ({ planKey }: { planKey: PlanKey }) => planKey.parentId !== null && planKey.parentId !== '',
  key: 'billing_prices_current_contract_rates',
})

/**
 * contractRenewalQuery - query for prices at contract renewal
 */
export const contractRenewalQuery = liveStoreInstance.Query({
  fetch: async ({ planKey }: { planKey: PlanKey }) => {
    try {
      return (await ratesService.getPricesAtContractRenewal({
        planType: planKey.type,
        planParentId: planKey.parentId || '',
      })).data.meta
    }
    catch (err) {
      reportBillingError(err)
      return err
    }
  },
  enabled: ({ planKey }: { planKey: PlanKey }) => planKey.parentId !== null,
  key: 'billing_prices_at_contract_renewal',
})

/**
 * transformResource - transforms resource using mapping
 */
function transformResource(resource: any, mapping: any) {
  try {
    return resource.transform((data: any) => mapValues(mapping, key => _$$y(data, key)))
  }
  catch (err) {
    reportError(ServiceCategories.BILLING, err)
    return resourceUtils.errorSuspendable(err, { release: () => {} })
  }
}

/**
 * setupResourceTransform - sets up resource atom handler and transforms
 */
export function setupResourceTransform(mapping: any, resource: any, query: any, options: ResourceAtomOptions = {}) {
  const [atom] = setupResourceAtomHandler(query, options)
  return transformResource(atom, resource)
}

/**
 * setupActiveRatesTransform - sets up resource atom handler for active rates
 */
export function setupActiveRatesTransform(mapping: any, t:any, options: ResourceAtomOptions = {}) {
  const query = activeRatesQuery(null)
  const [atom] = setupResourceAtomHandler(query, options)
  return transformResource(atom, mapping)
}

/**
 * getContractCurrency - gets contract currency from contract rates
 */
export function getContractCurrency(params: ContractRatesParams, options: ResourceAtomOptions = {}) {
  if (!(params.planParentId !== '' && !isNullish(params.planType))) {
    (options as ResourceAtomOptions).enabled = false
  }
  const [atom] = setupResourceAtomHandler(contractRatesQuery(params), options)
  return atom.transform(({ product_prices }) => product_prices[0]?.currency ?? null)
}

/**
 * setupCurrentContractRatesTransform - sets up resource atom handler for current contract rates
 */
export function setupCurrentContractRatesTransform(mapping: any, params: ContractRatesParams, query: any, options: ResourceAtomOptions) {
  return setupResourceTransform(mapping, params, currentContractRatesQuery({
    planKey: {
      type: params.planType,
      parentId: params.planParentId,
    },
  }), options)
}

/**
 * Admin queries
 */
liveStoreInstance.Query({
  fetch: async ({ planKey }: { planKey: PlanKey }) => {
    try {
      return (await ratesService.getAdminContractRates({
        planType: planKey.type,
        planParentId: planKey.parentId || '',
      })).data.meta
    }
    catch (err) {
      reportBillingError(err)
      return err
    }
  },
  enabled: ({ planKey }: { planKey: PlanKey }) => planKey.parentId !== null,
  key: 'billing_prices_admin_current_contract_rates',
})

liveStoreInstance.Query({
  fetch: async ({ planKey }: { planKey: PlanKey }) => {
    try {
      return (await ratesService.getAdminPricesAtContractRenewal({
        planType: planKey.type,
        planParentId: planKey.parentId || '',
      })).data.meta
    }
    catch (err) {
      reportBillingError(err)
      return err
    }
  },
  enabled: ({ planKey }: { planKey: PlanKey }) => planKey.parentId !== null,
  key: 'billing_prices_admin_at_contract_renewal',
})

liveStoreInstance.Query({
  fetch: async ({ planKey, renewalTerm, nextInvoiceInterval }: { planKey: PlanKey, renewalTerm: string, nextInvoiceInterval: string }) => {
    try {
      return (await ratesService.getAdminTeamPricesAtNextInvoice({
        planType: planKey.type,
        planParentId: planKey.parentId || '',
        renewalTerm,
        nextInvoiceInterval,
      })).data.meta
    }
    catch (err) {
      reportBillingError(err)
      return err
    }
  },
  enabled: ({ planKey }: { planKey: PlanKey }) => planKey.parentId !== null,
  key: 'billing_prices_admin_team_at_next_invoice',
})

/**
 * PriceInferenceError - error for inferring price values
 */
class PriceInferenceError extends Error {}

/**
 * inferPriceValue - infers a value from price data
 */
function inferPriceValue(prices: any[], key: string) {
  const value = prices[0]?.[key]
  if (value && prices.every(price => price[key] === value)) {
    return value
  }
  throw new PriceInferenceError(`Could not infer value for ${key} from price data`)
}

/**
 * getCurrencyFromPrices - gets currency from prices
 */
export function getCurrencyFromPrices(prices: Record<string, any>) {
  return inferPriceValue(Object.values(prices), 'currency')
}

/**
 * transformPrices - transforms prices with mapping and inference
 */
function transformPrices(resource: any, mapping: any, base: any, requireNonEmpty?: boolean) {
  try {
    return resource.transform((data: any) => {
      if (requireNonEmpty && data.product_prices.length === 0)
        return null
      const currency = 'currency' in base ? base.currency : inferPriceValue(data.product_prices, 'currency')
      const tier = 'tier' in base ? base.tier : inferPriceValue(data.product_prices, 'tier')
      const result = mapping.dict((key: string) => {
        const params = {
          billableProductKey: key,
          billableProductVariantKey: null,
          ...base,
          currency,
          tier,
        }
        try {
          return _$$y(data, params)
        }
        catch (err) {
          reportError(ServiceCategories.BILLING, err)
        }
      })
      Object.keys(result).forEach((key) => {
        if (isNullish(result[key]))
          delete result[key]
      })
      if (Object.keys(result).length === 0)
        throw new Error('No prices found')
      return result
    })
  }
  catch (err) {
    reportError(ServiceCategories.BILLING, err)
    return resourceUtils.errorSuspendable(err, { release: () => {} })
  }
}

/**
 * setupPricesTransform - sets up resource atom handler for prices
 */
export function setupPricesTransform({
  billableProductKeys,
  baseQuery,
  planKey,
  options = {},
}: {
  billableProductKeys: any
  baseQuery: any
  planKey: PlanKey | null
  options?: ResourceAtomOptions
}) {
  const query = activeRatesQuery(planKey ?? null)
  const [atom] = setupResourceAtomHandler(query, options)
  return transformPrices(atom, billableProductKeys, baseQuery)
}

/**
 * setupCurrentContractPricesTransform - sets up resource atom handler for current contract prices
 */
export function setupCurrentContractPricesTransform(planKey: PlanKey, mapping: any, base: any, options: ResourceAtomOptions = {}) {
  const query = currentContractRatesQuery({ planKey })
  const [atom] = setupResourceAtomHandler(query, options)
  return transformPrices(atom, mapping, base, true)
}

/**
 * setupContractRenewalPricesTransform - sets up resource atom handler for contract renewal prices
 */
export function setupContractRenewalPricesTransform(planKey: PlanKey, mapping: any, base: any, options: ResourceAtomOptions = {}) {
  const query = contractRenewalQuery({ planKey })
  const [atom] = setupResourceAtomHandler(query, options)
  return transformPrices(atom, mapping, base, true)
}

/**
 * ensureLoadedResource - ensures resource is loaded or throws error
 */
export function ensureLoadedResource(resource: any) {
  if (resource.status === 'loaded')
    return resource
  if (resource.status === 'errors') {
    const error = [resource.errors].flat()[0]
    if (error)
      throw error
  }
  throw new Error(`Unexpected result status: ${JSON.stringify(resource)}`)
}

// Exported aliases for refactored names
export const Y$ = BillingPriceStatus
export const Fq = BillingPriceSource
export const I8 = activeRatesQuery
export const cw = contractRatesQuery
export const Tc = getCurrencyFromPrices
export const SK = setupActiveRatesTransform
export const ic = setupCurrentContractRatesTransform
export const SG = setupContractRenewalPricesTransform
export const vK = getContractCurrency
export const jv = setupPricesTransform
export const Ln = setupCurrentContractPricesTransform

export const vu = ensureLoadedResource
export const yF = setupResourceTransform
