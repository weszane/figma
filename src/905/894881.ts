import { S8 } from "../figma_app/876459";
import { vh, td } from "../figma_app/181241";
import { XHR } from "../905/910117";
export let $$s0 = new class {
  constructor() {
    this.UpdatedNotificationSchemaValidator = vh();
    this.MarkNotificationAsReadSchemaValidator = vh();
    this.AcceptNotificationSchemaValidator = vh();
    this.RejectNotificationSchemaValidator = vh();
    this.CommunityServerDrivenSchemaValidator = vh();
    this.ServerDrivenPlanSchemaValidator = vh();
    this.WebTokenRegistrationSchemaValidator = vh();
    this.DesktopTokenRegistrationSchemaValidator = vh();
  }
  updateNotification(e) {
    return this.UpdatedNotificationSchemaValidator.validate(({
      xr: t
    }) => t.put("/api/user_notifications", td.toAPIParameters({
      id: e.notification_id,
      currentView: e.currentView,
      medium: S8 ? "desktop_bell" : "web",
      appVersion: "1",
      clientType: "web",
      ["resolve" === e.notification_action ? "resolvedAt" : "rejectedAt"]: "true"
    }, ["currentView"])));
  }
  markNotificationAsRead(e) {
    return this.MarkNotificationAsReadSchemaValidator.validate(({
      xr: t
    }) => t.put("/api/user_notifications/read", {
      id: e.notification_id,
      currentView: e.currentView,
      medium: S8 ? "desktop_bell" : "web",
      appVersion: "1",
      clientType: "web"
    }));
  }
  acceptNotification(e) {
    return this.AcceptNotificationSchemaValidator.validate(({
      xr: t
    }) => t.put("/api/user_notifications/accept", {
      id: e.notification_id,
      currentView: e.currentView,
      medium: S8 ? "desktop_bell" : "web",
      appVersion: "1",
      clientType: "web"
    }));
  }
  rejectNotification(e) {
    return this.RejectNotificationSchemaValidator.validate(({
      xr: t
    }) => t.put("/api/user_notifications/reject", {
      id: e.notification_id,
      currentView: e.currentView,
      medium: S8 ? "desktop_bell" : "web",
      appVersion: "1",
      clientType: "web"
    }));
  }
  getCommunityServerDriven(e) {
    return this.CommunityServerDrivenSchemaValidator.validate(async ({
      xr: t
    }) => await t.get("/api/user_notifications/community/server_driven", td.toAPIParameters({
      currentView: e.currentView,
      clientType: "web",
      appVersion: "1"
    }, ["currentView"])));
  }
  getServerDrivenPlan(e) {
    return this.ServerDrivenPlanSchemaValidator.validate(async ({
      xr: t
    }) => await t.get("/api/user_notifications/server_driven/plan", td.toAPIParameters({
      ...e,
      appVersion: "1",
      clientType: "web"
    }, ["currentView"])));
  }
  recordNotificationClicked(e) {
    return XHR.post("/api/user_notification/clicked", {
      id: e.id,
      currentView: e.currentView,
      medium: e.medium
    });
  }
  enrollUserInStatusChange(e) {
    return XHR.post(`/api/user_notifications/status_change_signup/${e.fileKey}`);
  }
  updateStatusChangePreferences(e) {
    return XHR.post(`/api/user_notifications/status_change_optin/${e.fileKey}`, {
      opt_in: e.optIn
    });
  }
  sendFirebaseToken(e) {
    return this.WebTokenRegistrationSchemaValidator.validate(({
      xr: t
    }) => t.post("/api/web_token_registration", td.toAPIParameters({
      firebaseToken: e.firebaseToken
    }, [])));
  }
  sendDesktopToken(e) {
    return this.DesktopTokenRegistrationSchemaValidator.validate(({
      xr: t
    }) => t.post("/api/desktop_token_registration", td.toAPIParameters({
      firebaseToken: e.firebaseToken,
      version: e.version
    }, [])));
  }
}();
export const sr = $$s0;