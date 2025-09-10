import { createNoOpValidator, APIParameterUtils, defaultValidator } from "src/figma_app/181241";
import { r as _$$r } from "src/905/324611";
export let $$a0 = new class {
  constructor() {
    this.UnverifiedSchemaValidator = createNoOpValidator();
    this.BackupCodesSchemaValidator = createNoOpValidator();
    this.StateSchemaValidator = createNoOpValidator();
    this.UserTeamsSchemaValidator = createNoOpValidator();
    this.TeamsSchemaValidator = createNoOpValidator();
    this.UserSchemaValidator = createNoOpValidator();
    this.EmailFeaturesSchemaValidator = createNoOpValidator();
    this.UserAuthedSchemaValidator = createNoOpValidator();
    this.ScimProvisionedStatusSchemaValidator = createNoOpValidator();
    this.DevTokenSchemaValidator = createNoOpValidator();
    this.PlansSchemaValidator = createNoOpValidator();
    this.ChatbotMetaValidator = createNoOpValidator();
    this.PlansForAuthedUsersSchemaValidator = createNoOpValidator();
  }
  getUnverified() {
    return this.UnverifiedSchemaValidator.validate(async ({
      xr: e
    }) => await e.get("/api/user/unverified"));
  }
  getBackupCodes(e) {
    return this.BackupCodesSchemaValidator.validate(async ({
      xr: t
    }) => await t.get("/api/user/backup_codes", {
      password_verify_token: e.passwordVerifyToken
    }));
  }
  getState(e, t) {
    let i = {};
    t && t > 0 && (i = {
      retryCount: t
    });
    _$$r();
    return this.StateSchemaValidator.validate(async ({
      xr: t
    }) => await t.get("/api/user/state", APIParameterUtils.toAPIParameters({
      redact: "org_billing_data",
      ...e
    }), i));
  }
  getUserTeams(e) {
    return this.UserTeamsSchemaValidator.validate(async ({
      xr: t
    }) => await t.get(`/api/user/${e.userId}/teams`));
  }
  getTeams(e) {
    let {
      userId,
      ...i
    } = e;
    return this.TeamsSchemaValidator.validate(async ({
      xr: e
    }) => await e.get(`/api/user/${userId}/teams`, APIParameterUtils.toAPIParameters(i)));
  }
  getUser(e) {
    return this.UserSchemaValidator.validate(async ({
      xr: t
    }) => await t.get(`/api/user/${e.userId}`));
  }
  putUser(e) {
    return this.UserSchemaValidator.validate(async ({
      xr: t
    }) => await t.put("/api/user", e.user));
  }
  setOnboardingSignal(e) {
    return defaultValidator.validate(async ({
      xr: t
    }) => await t.put("/api/user", e));
  }
  setFileViewHistoryPreference(e) {
    return defaultValidator.validate(async ({
      xr: t
    }) => await t.put("/api/user", e));
  }
  getEmailFeatures() {
    return this.EmailFeaturesSchemaValidator.validate(async ({
      xr: e
    }) => await e.get("/api/user/email_features"));
  }
  getAuthedUser() {
    _$$r();
    return this.UserAuthedSchemaValidator.validate(async ({
      xr: e
    }) => await e.get("/api/user"));
  }
  getScimProvisionedStatus(e) {
    return this.ScimProvisionedStatusSchemaValidator.validate(async ({
      xr: t
    }) => await t.get(`/api/user/${e.userId}/scim_provisioned_status`));
  }
  createDevToken(e) {
    return this.DevTokenSchemaValidator.validate(({
      xr: t
    }) => t.post("/api/user/dev_tokens", e));
  }
  getPlans() {
    return this.PlansSchemaValidator.validate(({
      xr: e
    }) => e.get("/api/user/plans"));
  }
  getChatbotMeta() {
    return this.ChatbotMetaValidator.validate(({
      xr: e
    }) => e.get("/api/user/help-center"));
  }
  async getPlansForAuthedUsers() {
    try {
      let {
        data: {
          meta: {
            plans_by_user_id,
            orgs,
            teams
          }
        }
      } = await this.PlansForAuthedUsersSchemaValidator.validate(({
        xr: e
      }) => e.get("/api/authed_users/plans"));
      return {
        plansByUserId: plans_by_user_id,
        teams,
        orgs
      };
    } catch (e) {
      return Promise.reject(e);
    }
  }
  migrateAllPersonalDrafts(e) {
    return defaultValidator.validate(({
      xr: t
    }) => t.post(`/api/user/migrate_personal_drafts/${e}`));
  }
  deleteAllPersonalDrafts() {
    return defaultValidator.validate(({
      xr: e
    }) => e.post("/api/user/delete_all_personal_drafts"));
  }
}();
export const k = $$a0;
