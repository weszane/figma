import { createNoOpValidator } from "src/figma_app/181241";
import { XHR } from "src/905/910117";
import { isAddressEmpty } from "src/figma_app/831101";
import { AccessLevelEnum } from "src/905/557142";
export let $$o0 = new class {
  constructor() {
    this.MembersSchemaValidator = createNoOpValidator();
    this.TeamUsersSchemaValidator = createNoOpValidator();
    this.TeamSchemaValidator = createNoOpValidator();
    this.DeletedSchemaValidator = createNoOpValidator();
    this.TeamNameSchemaValidator = createNoOpValidator();
    this.SubscriptionStatusSchemaValidator = createNoOpValidator();
    this.UsersLastActiveSchemaValidator = createNoOpValidator();
    this.FoldersSchemaValidator = createNoOpValidator();
    this.TeamAdminsSchemaValidator = createNoOpValidator();
    this.TeamDeletionFileCountSchemaValidator = createNoOpValidator();
    this.HasPublishedSiteSchemaValidator = createNoOpValidator();
    this.TeamUserInvariantBackfillStatsSchemaValidator = createNoOpValidator();
    this.TeamRoleRequestSchemaValidator = createNoOpValidator();
    this.showDanglingTeamUserBackfillBannerSchemaValidator = createNoOpValidator();
  }
  getMembers(e) {
    return this.MembersSchemaValidator.validate(async ({
      xr: t
    }) => await t.get(`/api/teams/${e.teamId}/members`));
  }
  getTeamUsers(e) {
    return this.TeamUsersSchemaValidator.validate(async ({
      xr: t
    }) => await t.get(`/api/teams/${e.teamId}/team_users`));
  }
  getTeam(e) {
    return this.TeamSchemaValidator.validate(async ({
      xr: t
    }) => await t.get(`/api/teams/${e.teamId}`));
  }
  getDeleted(e) {
    return this.DeletedSchemaValidator.validate(async ({
      xr: t
    }) => await t.get(`/api/teams/deleted/${e.teamId}`));
  }
  getTeamName(e) {
    return this.TeamNameSchemaValidator.validate(async ({
      xr: t
    }) => await t.get(`/api/teams/${e.teamId}/team_name`));
  }
  getSubscriptionStatus(e) {
    return this.SubscriptionStatusSchemaValidator.validate(async ({
      xr: t
    }) => await t.get(`/api/teams/${e.teamId}/subscription_status`));
  }
  getUsersLastActive(e) {
    return this.UsersLastActiveSchemaValidator.validate(async ({
      xr: t
    }) => await t.get(`/api/teams/${e.teamId}/users/${e.teamMemberId}/last_active`));
  }
  getFolders(e) {
    return this.FoldersSchemaValidator.validate(async ({
      xr: t
    }) => await t.get(`/api/teams/${e.teamId}/folders`));
  }
  getTeamAdmins(e) {
    return this.TeamAdminsSchemaValidator.validate(async ({
      xr: t
    }) => await t.get(`/api/teams/${e.teamId}/team_admins`));
  }
  getDeletionFileCount(e) {
    return this.TeamDeletionFileCountSchemaValidator.validate(async ({
      xr: t
    }) => await t.get(`/api/teams/${e.teamId}/deletion_file_count`));
  }
  getHasPublishedSite(e) {
    return this.HasPublishedSiteSchemaValidator.validate(async ({
      xr: t
    }) => await t.get(`/api/teams/${e.teamId}/has_published_site`));
  }
  fetchTeamUserInvariantBackfillStats(e) {
    return this.TeamUserInvariantBackfillStatsSchemaValidator.validate(async ({
      xr: t
    }) => await t.get(`/api/teams/${e.teamId}/num_backfilled_team_user`));
  }
  requestTeamRole(e) {
    return this.TeamRoleRequestSchemaValidator.validate(async ({
      xr: t
    }) => await t.post("/api/team_role_requests", {
      team_id: e.teamId,
      level: AccessLevelEnum.VIEWER
    }));
  }
  showDanglingTeamUserBackfillBanner(e) {
    return this.showDanglingTeamUserBackfillBannerSchemaValidator.validate(async ({
      xr: t
    }) => await t.get(`/api/teams/${e.teamId}/show_dangling_team_user_backfill_banner`));
  }
  updateAiFeaturesDisabled(e) {
    return this.TeamSchemaValidator.validate(async ({
      xr: t
    }) => await t.put(`/api/teams/${e.teamId}`, {
      ai_features_disabled: e.aiFeaturesDisabled
    }));
  }
  updateTeamName(e) {
    return this.TeamSchemaValidator.validate(async ({
      xr: t
    }) => await t.put(`/api/teams/${e.teamId}`, {
      name: e.updatedDisplayName,
      legal_name: e.updatedLegalName
    }));
  }
  updateDisplayName(e) {
    return this.TeamSchemaValidator.validate(async ({
      xr: t
    }) => await t.put(`/api/teams/${e.teamId}`, {
      name: e.updatedDisplayName
    }));
  }
  updateShippingAddress(e) {
    return this.TeamSchemaValidator.validate(async ({
      xr: t
    }) => await t.put(`/api/teams/${e.teamId}`, {
      shipping_address: e.shippingAddress,
      legal_name: e.updatedLegalName
    }));
  }
  updatePresetsDisabled(e) {
    return this.TeamSchemaValidator.validate(async ({
      xr: t
    }) => await t.put(`/api/teams/${e.teamId}`, {
      figma_provided_libraries_disabled: e.presetsDisabled
    }));
  }
  updateAiDataSharing(e) {
    return XHR.put(`/api/teams/${e.teamId}/ai_data_sharing`, {
      enabled: e.enabled
    });
  }
  validateAddresses(e) {
    return this.TeamSchemaValidator.validate(async ({
      xr: t
    }) => await t.post("/api/validate_address", {
      billing_address: isAddressEmpty(e.billingAddress) ? null : e.billingAddress,
      shipping_address: isAddressEmpty(e.shippingAddress) ? null : e.shippingAddress,
      team_id: e.teamId,
      is_checkout: e.isCheckout
    }));
  }
  validateCurrency(e) {
    return this.TeamSchemaValidator.validate(async ({
      xr: t
    }) => await t.post("/api/validate_currency", {
      team_id: e.teamId,
      currency: e.currency,
      is_checkout: e.isCheckout,
      billing_address: isAddressEmpty(e.billingAddress) ? null : e.billingAddress,
      shipping_address: isAddressEmpty(e.shippingAddress) ? null : e.shippingAddress
    }));
  }
}();
export const $ = $$o0;
