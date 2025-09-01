import { vh, td } from "../figma_app/181241";
import { XHR } from "../905/910117";
export let $$a0 = new class {
  constructor() {
    this.SamlSchemaValidator = vh();
    this.ValidateCodeValidator = vh();
    this.TwoFactorValidator = vh();
  }
  getSaml(e) {
    return this.SamlSchemaValidator.validate(async ({
      xr: t
    }) => await t.get("/api/saml", td.toAPIParameters({
      email: e.email
    })));
  }
  resendCode() {
    return XHR.post("api/saml/resend_code");
  }
  validateCode(e) {
    return this.ValidateCodeValidator.validate(({
      xr: t
    }) => t.post("/api/saml/validate_code", {
      code: e
    }));
  }
  twoFactor(e) {
    return this.TwoFactorValidator.validate(({
      xr: t
    }) => t.post("/api/saml/two_factor", {
      code: e
    }));
  }
}();
export const k = $$a0;