import { createNoOpValidator, APIParameterUtils } from "../figma_app/181241";
import { sendWithRetry } from "../905/910117";
export let $$a0 = new class {
  constructor() {
    this.SamlSchemaValidator = createNoOpValidator();
    this.ValidateCodeValidator = createNoOpValidator();
    this.TwoFactorValidator = createNoOpValidator();
  }
  getSaml(e) {
    return this.SamlSchemaValidator.validate(async ({
      xr: t
    }) => await t.get("/api/saml", APIParameterUtils.toAPIParameters({
      email: e.email
    })));
  }
  resendCode() {
    return sendWithRetry.post("api/saml/resend_code");
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
