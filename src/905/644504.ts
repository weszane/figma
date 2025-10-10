// Refactored code: Renamed variables, added types, improved readability

import { sendWithRetry } from "../905/910117"
import { APIParameterUtils, createNoOpValidator } from "../figma_app/181241"

// Define interfaces for better type safety
interface SamlRequest {
  email: string
}

// Original code name: $$a0
class SamlAuthenticationService {
  samlSchemaValidator = createNoOpValidator()
  validateCodeValidator = createNoOpValidator()
  twoFactorValidator = createNoOpValidator()
  constructor() {
  }

  /**
   * Fetch SAML configuration based on user email
   */
  getSaml(request: SamlRequest) {
    return this.samlSchemaValidator.validate(async ({ xr }) =>
      await xr.get("/api/saml", APIParameterUtils.toAPIParameters({
        email: request.email,
      })),
    )
  }

  /**
   * Resend SAML authentication code
   */
  resendCode() {
    return sendWithRetry.post("api/saml/resend_code")
  }

  /**
   * Validate the SAML authentication code
   */
  validateCode(code: string) {
    return this.validateCodeValidator.validate(({ xr }) =>
      xr.post("/api/saml/validate_code", {
        code,
      }),
    )
  }

  /**
   * Handle two-factor authentication for SAML
   */
  twoFactor(code: string) {
    return this.twoFactorValidator.validate(({ xr }) =>
      xr.post("/api/saml/two_factor", {
        code,
      }),
    )
  }
}

export const samlAuthenticationService = new SamlAuthenticationService()
export const k = samlAuthenticationService
