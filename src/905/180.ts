import { createNoOpValidator, APIParameterUtils } from "../figma_app/181241";
import { XHR } from "../905/910117";
export let $$a0 = new class {
  constructor() {
    this.BuyerPortalSchemaValidator = createNoOpValidator();
    this.BuyerActivePaymentsSchemaValidator = createNoOpValidator();
    this.BuyerPaymentMethodsSchemaValidator = createNoOpValidator();
    this.BuyerTaxSchemaValidator = createNoOpValidator();
    this.TagsAutocompleteSchemaValidator = createNoOpValidator();
    this.BuyerPurchasesSchemaValidator = createNoOpValidator();
    this.BuyerAssociatedPurchasesSchemaValidator = createNoOpValidator();
    this.RecentFilesSchemaValidator = createNoOpValidator();
    this.getRecentFiles = e => this.RecentFilesSchemaValidator.validate(async ({
      xr: t
    }) => e.isWidget ? await t.get(`/api/widgets/${e.extensionId}/recent_files`) : await t.get(`/api/plugins/${e.extensionId}/recent_files`));
    this.CommunityUserTaxInfoValidator = createNoOpValidator();
    this.getCommunityUserTaxInfo = e => this.CommunityUserTaxInfoValidator.validate(async ({
      xr: t
    }) => await t.get("/api/community/monetization/tax_info", {
      user_id: e.userId
    }));
    this.updateBillingDetails = e => XHR.post("/api/community/monetization/update_user_tax_info", e);
    this.CmtyCreatorPayoutStatementsSchemaValidator = createNoOpValidator();
    this.getCmtyCreatorPayoutStatements = e => this.CmtyCreatorPayoutStatementsSchemaValidator.validate(async ({
      xr: t
    }) => await t.get("/api/community/seller/payout_statements", {
      user_id: e.userId
    }));
    this.updateSlideTemplateCommunityUsageCount = e => XHR.post(`/api/hub_files/${e.hubFileId}/use_hub_file`);
  }
  getBuyerPortal(e) {
    return this.BuyerPortalSchemaValidator.validate(async ({
      xr: t
    }) => await t.get("/api/community/buyer/portal", APIParameterUtils.toAPIParameters(e)));
  }
  getBuyerActivePayments() {
    return this.BuyerActivePaymentsSchemaValidator.validate(async ({
      xr: e
    }) => await e.get("/api/community/buyer/active_payments"));
  }
  getBuyerPaymentMethods(e) {
    return this.BuyerPaymentMethodsSchemaValidator.validate(async ({
      xr: t
    }) => await t.get("/api/community/buyer/payment_methods", {
      user_id: e.userId
    }));
  }
  getBuyerTax(e) {
    return this.BuyerTaxSchemaValidator.validate(async ({
      xr: t
    }) => await t.get(`/api/community/buyer/${e.resourceId}/tax`, APIParameterUtils.toAPIParameters(e)));
  }
  getTagsAutocomplete(e) {
    return this.TagsAutocompleteSchemaValidator.validate(async ({
      xr: t
    }) => await t.get(`/api/community/tags/${e.tagPrefix}/autocomplete`, {
      existing_tags: e.existingTags
    }));
  }
  getBuyerPurchases(e) {
    return this.BuyerPurchasesSchemaValidator.validate(async ({
      xr: t
    }) => await t.getPaginated("/api/community/buyer/purchases", {
      purchase_type: e.purchaseType,
      page_size: e.pageSize,
      cursor: e.cursor
    }));
  }
  getBuyerAssociatedPurchases(e) {
    return this.BuyerAssociatedPurchasesSchemaValidator.validate(async ({
      xr: t
    }) => await t.get(`/api/community/buyer/associated_purchases/${e.id}`));
  }
}();
export const C = $$a0;