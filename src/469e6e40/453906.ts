import { z } from "../905/239603";
import { vh, YV, td } from "../figma_app/181241";
var $$i3 = (e => (e.DAILY = "daily", e.WEEKLY = "weekly", e.MONTHLY = "monthly", e))($$i3 || {});
var $$r2 = (e => (e.ALL_ADMINS = "all_admins", e.SPECIFIC_ADMINS = "specific_admins", e))($$r2 || {});
var $$l5 = (e => (e.TEAM = "team", e.ORGANIZATION = "organization", e))($$l5 || {});
var $$o4 = (e => (e.NEW_EDITOR_NOTIFICATION = "new_editor_notification", e))($$o4 || {});
var $$d1 = (e => (e.VIEWER = "viewer", e.VIEWER_RESTRICTED = "viewer_restricted", e.FULL = "full", e))($$d1 || {});
let c = z.object({
  strings: z.object({
    team_admin_billing_cost_banner: z.object({
      banner_description: z.string()
    }),
    cart_banner: z.object({
      cart_banner_info: z.string(),
      cart_banner_edu_info: z.string()
    })
  }).partial()
}).optional();
let $$_0 = new class {
  constructor() {
    this.NotificationSettingsSchemaValidator = vh();
    this.MaintenancePoc1Validator = YV("MaintenancePoc1", c, null);
    this.PlanPropertiesSchemaValidator = vh();
  }
  getNotificationSettings(e) {
    return this.NotificationSettingsSchemaValidator.validate(async ({
      xr: t
    }) => (await t.get("/api/billing/notification_settings", td.toAPIParameters({
      plan_id: e.planId,
      plan_type: e.planType,
      notification_type: e.notificationType
    }))) ?? null);
  }
  getPlanProperties(e) {
    return this.PlanPropertiesSchemaValidator.validate(async ({
      xr: t
    }) => (await t.get(`/api/billing/${e.planType}/${e.planId}/plan_properties`, td.toAPIParameters({
      desired_properties: ["default_paid_status_design", "default_paid_status_whiteboard"].toString()
    }))) ?? null);
  }
  updatePlanProperties(e) {
    return this.PlanPropertiesSchemaValidator.validate(async ({
      xr: t
    }) => (await t.put(`/api/billing/${e.planType}/${e.planId}/plan_properties`, e.properties)) ?? null);
  }
  maintenancePoc1() {
    return this.MaintenancePoc1Validator.validate(async ({
      xr: e
    }) => await e.get("/api/billing/maintenance_846b4c12"));
  }
}();
export const Cn = $$_0;
export const JO = $$d1;
export const UI = $$r2;
export const X4 = $$i3;
export const by = $$o4;
export const fm = $$l5;