import { APIParameterUtils, createNoOpValidator } from "../figma_app/181241"
// Origin: $$r0 (from /src/905/746303.ts)
// Refactored: Renamed variables and methods, added TypeScript types/interfaces, improved readability, added comments, simplified destructuring, and added explanatory comments.

// Assumed dependencies:
// - createNoOpValidator: returns an object with a `validate` method that takes a function returning a Promise.
// - APIParameterUtils: has a static method `toAPIParameters` for converting objects to API parameters.

// Type definitions for API context and parameters
interface APIContext {
  xr: {
    get: (url: string, params?: Record<string, any>) => Promise<any>
  }
}

interface OrgSamlConfigParams {
  orgId: string
}

interface ContactsParams {
  orgId: string
  [key: string]: any // Additional contact query parameters
}

interface ExperimentCohortParams {
  orgId: string
  [key: string]: any // Additional cohort query parameters
}

class OrgApiValidators {
  // Validators for each schema
  private orgSamlConfigValidator = createNoOpValidator()
  private contactsValidator = createNoOpValidator()
  private experimentCohortValidator = createNoOpValidator()

  /**
   * Fetches the SAML configuration for an organization.
   * @param params - Organization SAML config parameters
   */
  getOrgSamlConfig(params: OrgSamlConfigParams): Promise<any> {
    // The validator wraps the async API call for validation
    return this.orgSamlConfigValidator.validate(async (context: APIContext) => {
      return await context.xr.get(`/api/org/${params.orgId}/org_saml_config`)
    })
  }

  /**
   * Fetches contacts for an organization.
   * @param params - Contacts query parameters (orgId and others)
   */
  getContacts(params: ContactsParams): Promise<any> {
    const { orgId, ...queryParams } = params
    return this.contactsValidator.validate(async (context: APIContext) => {
      return await context.xr.get(
        `/api/org/${orgId}/contacts`,
        APIParameterUtils.toAPIParameters(queryParams),
      )
    })
  }

  /**
   * Fetches experiment cohort data for an organization.
   * @param params - Experiment cohort query parameters (orgId and others)
   */
  getExperimentCohort(params: ExperimentCohortParams): Promise<any> {
    const { orgId, ...queryParams } = params
    return this.experimentCohortValidator.validate(async (context: APIContext) => {
      return await context.xr.get(
        `/api/orgs/${orgId}/experiment_cohort`,
        APIParameterUtils.toAPIParameters(queryParams),
      )
    })
  }
}

// Export with original names for compatibility
export const orgApiValidators = new OrgApiValidators()
export const P = orgApiValidators
