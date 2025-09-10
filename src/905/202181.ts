import { createNoOpValidator } from "../figma_app/181241";
import { r as _$$r } from "../905/324611";
export let $$a0 = new class {
  constructor() {
    this.StateSchemaValidator = createNoOpValidator();
    this.SsoConfigSchemaValidator = createNoOpValidator();
    this.LogoutAllUsersValidator = createNoOpValidator();
    this.LogoutOneUserValidator = createNoOpValidator();
    this.getSessionsValidator = createNoOpValidator();
    this.deleteSessionsValidator = createNoOpValidator();
    this.sendValidationEmailValidator = createNoOpValidator();
  }
  getState(e) {
    _$$r();
    let t = {};
    e && e > 0 && (t = {
      retryCount: e
    });
    return this.StateSchemaValidator.validate(async ({
      xr: e
    }) => await e.get("/api/session/state", void 0, t));
  }
  getSsoConfig(e) {
    return this.SsoConfigSchemaValidator.validate(async ({
      xr: t
    }) => await t.get("/api/session/sso_config", e));
  }
  logoutAllUsers() {
    return this.LogoutAllUsersValidator.validate(async ({
      xr: e
    }) => await e.post("/api/session/logout"));
  }
  logoutOneUser(e) {
    return this.LogoutOneUserValidator.validate(async ({
      xr: t
    }) => await t.post(`/api/session/logout/${e}`));
  }
  getSessions() {
    return this.getSessionsValidator.validate(async ({
      xr: e
    }) => await e.get("/api/session/sessions"));
  }
  deleteSession(e) {
    return this.deleteSessionsValidator.validate(async ({
      xr: t
    }) => await t.del(`/api/session/sessions/${e}`));
  }
  sendValidationEmail() {
    return this.sendValidationEmailValidator.validate(async ({
      xr: e
    }) => await e.post("/api/validation/email/send"));
  }
}();
export const H = $$a0;
