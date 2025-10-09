import { createActionCreator } from "../905/73481"
import { createOptimistThunk } from "../905/350402"
import { FlashActions } from "../905/573154"
import { orgApiValidators } from "../905/746303"
// Refactored from original minified code in 342125.ts
// Changes: Renamed variables, added TypeScript types/interfaces, improved readability, added comments, simplified promise handling, noted assumed dependencies.

// Assumed dependencies:
// - createActionCreator: function to create Redux actions
// - FlashActions: object with a flash(message: string, duration: number) action creator
// - createOptimistThunk: thunk creator for optimistic Redux actions
// - orgApiValidators: object with getOrgSamlConfig({ orgId }) returning a Promise<{ data: { meta: OrgSamlConfig }, ... }>

// Type definitions for clarity and type safety
interface OrgSamlConfig {
  // Define properties based on expected meta structure
  // Example:
  // enabled: boolean;
  // samlProvider: string;
  // ...other fields
}

interface GetOrgSamlConfigResponse {
  data: {
    meta: OrgSamlConfig
    // ...other fields
  }
  // ...other fields
}

// Action creators
export const orgSamlConfigGet = createActionCreator("ORG_SAML_CONFIG_GET")
export const orgSamlConfigSet = createActionCreator("ORG_SAML_CONFIG_SET")

// Thunk for fetching org SAML config
export const fetchOrgSamlConfig = createOptimistThunk((context) => {
  const orgId = context.getState().currentUserOrgId

  // Fetch SAML config for the current org
  orgApiValidators.getOrgSamlConfig({ orgId })
    .then((response: GetOrgSamlConfigResponse) => {
      // Dispatch action to set org SAML config in state
      context.dispatch(orgSamlConfigSet({
        orgSamlConfig: response.data.meta,
      }))
    })
    .catch((error: any) => {
      // Show error flash message
      context.dispatch(
        FlashActions.flash(
          error.data?.message || "An error occurred while fetching org saml config.",
          5000,
        ),
      )
      // Log error for debugging
      console.error(error)
    })

  // Dispatch action to indicate fetch started (optimistic)
  context.dispatch(orgSamlConfigGet())
})

// Export with original names for compatibility
export const E = orgSamlConfigGet
export const Jt = fetchOrgSamlConfig
export const hZ = orgSamlConfigSet
