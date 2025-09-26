import { sendWithRetry } from '../905/910117'
import { APIParameterUtils, createNoOpValidator } from '../figma_app/181241'

/**
 * Types for API parameter objects
 */
interface RecentFilesParams {
  isWidget: boolean
  extensionId: string
}

interface CommunityUserTaxInfoParams {
  userId: string
}

interface CmtyCreatorPayoutStatementsParams {
  userId: string
}

interface SlideTemplateCommunityUsageParams {
  hubFileId: string
}

interface BuyerPortalParams {
  // Add relevant fields as needed
  [key: string]: any
}

interface BuyerPaymentMethodsParams {
  userId: string
}

interface BuyerTaxParams {
  resourceId: string
  // Add relevant fields as needed
  [key: string]: any
}

interface TagsAutocompleteParams {
  tagPrefix: string
  existingTags: string[]
}

interface BuyerPurchasesParams {
  purchaseType: string
  pageSize: number
  cursor?: string
}

interface BuyerAssociatedPurchasesParams {
  id: string
}

/**
 * Buyer API Handler (original: $$a0)
 */
export const BuyerAPIHandler = new class {
  BuyerPortalSchemaValidator = createNoOpValidator()
  BuyerActivePaymentsSchemaValidator = createNoOpValidator()
  BuyerPaymentMethodsSchemaValidator = createNoOpValidator()
  BuyerTaxSchemaValidator = createNoOpValidator()
  TagsAutocompleteSchemaValidator = createNoOpValidator()
  BuyerPurchasesSchemaValidator = createNoOpValidator()
  BuyerAssociatedPurchasesSchemaValidator = createNoOpValidator()
  RecentFilesSchemaValidator = createNoOpValidator()
  CommunityUserTaxInfoValidator = createNoOpValidator()
  CmtyCreatorPayoutStatementsSchemaValidator = createNoOpValidator()

  constructor() {

  }

  /**
   * Get Buyer Portal (original: getBuyerPortal)
   */
  getBuyerPortal(params: BuyerPortalParams): Promise<any> {
    return this.BuyerPortalSchemaValidator.validate(async ({ xr }) =>
      await xr.get('/api/community/buyer/portal', APIParameterUtils.toAPIParameters(params)),
    )
  }

  /**
   * Get Buyer Active Payments (original: getBuyerActivePayments)
   */
  getBuyerActivePayments(): Promise<any> {
    return this.BuyerActivePaymentsSchemaValidator.validate(async ({ xr }) =>
      await xr.get('/api/community/buyer/active_payments'),
    )
  }

  /**
   * Get Buyer Payment Methods (original: getBuyerPaymentMethods)
   */
  getBuyerPaymentMethods(params: BuyerPaymentMethodsParams): Promise<any> {
    return this.BuyerPaymentMethodsSchemaValidator.validate(async ({ xr }) =>
      await xr.get('/api/community/buyer/payment_methods', { user_id: params.userId }),
    )
  }

  /**
   * Get Buyer Tax (original: getBuyerTax)
   */
  getBuyerTax(params: BuyerTaxParams): Promise<any> {
    return this.BuyerTaxSchemaValidator.validate(async ({ xr }) =>
      await xr.get(`/api/community/buyer/${params.resourceId}/tax`, APIParameterUtils.toAPIParameters(params)),
    )
  }

  /**
   * Get Tags Autocomplete (original: getTagsAutocomplete)
   */
  getTagsAutocomplete(params: TagsAutocompleteParams): Promise<any> {
    return this.TagsAutocompleteSchemaValidator.validate(async ({ xr }) =>
      await xr.get(`/api/community/tags/${params.tagPrefix}/autocomplete`, { existing_tags: params.existingTags }),
    )
  }

  /**
   * Get Buyer Purchases (original: getBuyerPurchases)
   */
  getBuyerPurchases(params: BuyerPurchasesParams): Promise<any> {
    return this.BuyerPurchasesSchemaValidator.validate(async ({ xr }) =>
      await xr.getPaginated('/api/community/buyer/purchases', {
        purchase_type: params.purchaseType,
        page_size: params.pageSize,
        cursor: params.cursor,
      }),
    )
  }

  /**
   * Get Buyer Associated Purchases (original: getBuyerAssociatedPurchases)
   */
  getBuyerAssociatedPurchases(params: BuyerAssociatedPurchasesParams): Promise<any> {
    return this.BuyerAssociatedPurchasesSchemaValidator.validate(async ({ xr }) =>
      await xr.get(`/api/community/buyer/associated_purchases/${params.id}`),
    )
  }

  /**
   * Get Recent Files (original: getRecentFiles)
   */
  getRecentFiles = (params: RecentFilesParams): Promise<any> =>
    this.RecentFilesSchemaValidator.validate(async ({ xr }) =>
      params.isWidget
        ? await xr.get(`/api/widgets/${params.extensionId}/recent_files`)
        : await xr.get(`/api/plugins/${params.extensionId}/recent_files`),
    )

  /**
   * Get Community User Tax Info (original: getCommunityUserTaxInfo)
   */
  getCommunityUserTaxInfo = (params: CommunityUserTaxInfoParams): Promise<any> =>
    this.CommunityUserTaxInfoValidator.validate(async ({ xr }) =>
      await xr.get('/api/community/monetization/tax_info', { user_id: params.userId }),
    )

  /**
   * Update Billing Details (original: updateBillingDetails)
   */
  updateBillingDetails = (params: any): Promise<any> =>
    sendWithRetry.post('/api/community/monetization/update_user_tax_info', params)

  /**
   * Get Community Creator Payout Statements (original: getCmtyCreatorPayoutStatements)
   */
  getCmtyCreatorPayoutStatements = (params: CmtyCreatorPayoutStatementsParams): Promise<any> =>
    this.CmtyCreatorPayoutStatementsSchemaValidator.validate(async ({ xr }) =>
      await xr.get('/api/community/seller/payout_statements', { user_id: params.userId }),
    )

  /**
   * Update Slide Template Community Usage Count (original: updateSlideTemplateCommunityUsageCount)
   */
  updateSlideTemplateCommunityUsageCount = (params: SlideTemplateCommunityUsageParams): Promise<any> =>
    sendWithRetry.post(`/api/hub_files/${params.hubFileId}/use_hub_file`)
}()

export const C = BuyerAPIHandler
