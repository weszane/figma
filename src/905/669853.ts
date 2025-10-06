import md5 from 'md5';
import { encodeStringToBase64 } from '../905/561685';
import { dayjs } from '../905/920142';
import { APIParameterUtils, createNoOpValidator } from '../figma_app/181241';

// Original o - Refactored to InsertionActionType
export const InsertionActionType = {
  INSERTION: 'insertion',
  DETACHMENT: 'detachment'
} as const;

// Original l - Refactored to DetachmentActionType
export const DetachmentActionType = {
  INSERTION: 'insertion',
  DETACHMENT: 'detachment'
} as const;

// Original $$d1 - Refactored to ActionType
export const InsertionDetachment = {
  INSERTION: 'insertion',
  DETACHMENT: 'detachment'
} as const;

// Original c - Refactored to generateDSAToken with added types and documentation
interface DSATokenParams {
  [key: string]: any;
}
interface DSAToken {
  dsaToken: string;
  dsaTokenKey: string;
}

/**
 * Generates a DSA token for API authentication.
 * @param params - The parameters to include in the token generation.
 * @returns An object containing the DSA token and key.
 */
function generateDSAToken(params: DSATokenParams): DSAToken {
  const apiParams = APIParameterUtils.toAPIParameters(params) ?? {};
  const keys = Object.keys(apiParams);
  const values = keys.map(key => apiParams[key]);
  const timestamp = dayjs().utc().unix();
  const data = ['please_use_the_public_api', timestamp, ...values].join(',');
  const token = md5(data).slice(0, 10);
  const keyData = [timestamp, ...keys].join(',');
  return {
    dsaToken: token,
    dsaTokenKey: encodeStringToBase64(keyData)
  };
}

// Original $$u0 - Refactored to DSAApiService class with grouped methods, added types, documentation, and helper methods
export class DSAApiService {
  LibraryWeeklyInsertionsSchemaValidator = createNoOpValidator();
  LibraryTeamUsageSchemaValidator = createNoOpValidator();
  LibraryPublishedComponentsUsagesSchemaValidator = createNoOpValidator();
  LibraryPublishedComponentsActionsSchemaValidator = createNoOpValidator();
  LibraryOverviewSchemaValidator = createNoOpValidator();
  LibrariesSchemaValidator = createNoOpValidator();
  NumTeamsSchemaValidator = createNoOpValidator();
  StateGroupComponentsSchemaValidator = createNoOpValidator();
  ComponentFileUsageSchemaValidator = createNoOpValidator();
  ComponentSchemaValidator = createNoOpValidator();
  StateGroupSchemaValidator = createNoOpValidator();
  OrgMigrationStatusSchemaValidator = createNoOpValidator();
  LibraryStyleOverviewValidator = createNoOpValidator();
  LibraryStyleDetailsValidator = createNoOpValidator();
  LibraryVariableOverviewValidator = createNoOpValidator();
  LibraryVariableDetailsValidator = createNoOpValidator();
  RecordStylesActionValidator = createNoOpValidator();
  RecordVariablesActionValidator = createNoOpValidator();
  RecordComponentActionValidator = createNoOpValidator();

  // Library-related methods
  /**
   * Gets library weekly insertions.
   * @param params - Original e
   */
  getLibraryWeeklyInsertions(params: any) {
    return this.makeValidatedGetRequest(`/api/dsa/library/${params.fileKey}/weekly_insertions`, params, this.LibraryWeeklyInsertionsSchemaValidator);
  }

  /**
   * Gets library team usage.
   * @param params - Original e
   */
  getLibraryTeamUsage(params: any) {
    return this.makeValidatedGetRequest(`/api/dsa/library/${params.fileKey}/team_usage`, params, this.LibraryTeamUsageSchemaValidator);
  }

  /**
   * Gets library published components usages.
   * @param params - Original e
   */
  getLibraryPublishedComponentsUsages(params: any) {
    const requestParams = {
      start_ts: params.startTs,
      end_ts: params.endTs,
      org_id: params.orgIdForLogging,
      entrypoint: params.entrypointForLogging,
      library_file_key: params.libraryFileKey
    };
    return this.makeValidatedGetRequest(`/api/dsa/library/${params.libraryFileKey}/published_components_usages`, requestParams, this.LibraryPublishedComponentsUsagesSchemaValidator);
  }

  /**
   * Gets library published components actions.
   * @param params - Original e
   */
  getLibraryPublishedComponentsActions(params: any) {
    const requestParams = {
      start_ts: params.startTs,
      end_ts: params.endTs,
      org_id: params.orgIdForLogging,
      entrypoint: params.entrypointForLogging,
      library_file_key: params.libraryFileKey
    };
    return this.makeValidatedGetRequest(`/api/dsa/library/${params.libraryFileKey}/published_components_actions`, requestParams, this.LibraryPublishedComponentsActionsSchemaValidator);
  }

  /**
   * Gets library overview.
   * @param params - Original e
   */
  getLibraryOverview(params: any) {
    return this.makeValidatedGetRequest(`/api/dsa/library_overview/${params.libraryFileKey}`, params, this.LibraryOverviewSchemaValidator);
  }

  /**
   * Gets libraries.
   * @param params - Original e
   */
  getLibraries(params: any) {
    return this.makeValidatedGetRequest('/api/dsa/libraries', params, this.LibrariesSchemaValidator);
  }

  /**
   * Gets library style overview.
   * @param params - Original e
   */
  getLibraryStyleOverview(params: any) {
    return this.makeValidatedGetRequest(`/api/dsa/library/${params.libraryFileKey}/styles/overview`, params, this.LibraryStyleOverviewValidator);
  }

  /**
   * Gets library style details.
   * @param params - Original e
   */
  getLibraryStyleDetails(params: any) {
    return this.makeValidatedGetRequest(`/api/dsa/library/${params.libraryFileKey}/styles/${params.styleKey}/details`, params, this.LibraryStyleDetailsValidator);
  }

  /**
   * Gets library variable overview.
   * @param params - Original e
   */
  getLibraryVariableOverview(params: any) {
    return this.makeValidatedGetRequest(`/api/dsa/library/${params.libraryFileKey}/variables/overview`, params, this.LibraryVariableOverviewValidator);
  }

  /**
   * Gets library variable details.
   * @param params - Original e
   */
  getLibraryVariableDetails(params: any) {
    return this.makeValidatedGetRequest(`/api/dsa/library/${params.libraryFileKey}/variables/${params.variableKey}/details`, params, this.LibraryVariableDetailsValidator);
  }

  // Component-related methods
  /**
   * Gets component file usage.
   * @param params - Original e
   */
  getComponentFileUsage(params: any) {
    return this.makeValidatedGetRequest(`/api/dsa/component/${params.componentKey}/file_usage`, params, this.ComponentFileUsageSchemaValidator);
  }

  /**
   * Gets component.
   * @param params - Original e
   */
  getComponent(params: any) {
    return this.makeValidatedGetRequest(`/api/dsa/component/${params.componentKey}`, params, this.ComponentSchemaValidator);
  }

  /**
   * Records component action.
   * @param params - Original e
   */
  recordComponentAction(params: any) {
    return this.makeValidatedPostRequest('/api/dsa/record/component/action', params, this.RecordComponentActionValidator);
  }

  // State group-related methods
  /**
   * Gets state group components.
   * @param params - Original e
   */
  getStateGroupComponents(params: any) {
    return this.makeValidatedGetRequest(`/api/dsa/state_group/${params.stateGroupKey}/components`, params, this.StateGroupComponentsSchemaValidator);
  }

  /**
   * Gets state group.
   * @param params - Original e
   */
  getStateGroup(params: any) {
    return this.makeValidatedGetRequest(`/api/dsa/state_group/${params.stateGroupKey}`, params, this.StateGroupSchemaValidator);
  }

  // Organization-related methods
  /**
   * Gets number of teams.
   * @param params - Original e
   */
  getNumTeams(params: any) {
    return this.makeValidatedGetRequest('/api/dsa/num_teams', params, this.NumTeamsSchemaValidator);
  }

  /**
   * Gets organization migration status.
   * @param params - Original e
   */
  getOrgMigrationStatus(params: any) {
    return this.OrgMigrationStatusSchemaValidator.validate(async ({
      xr
    }) => await xr.get(`/api/dsa/migration_status/${params.orgId}`));
  }

  // Record action methods
  /**
   * Records styles action.
   * @param params - Original e
   */
  recordStylesAction(params: any) {
    return this.makeValidatedPostRequest('/api/dsa/record/style/action', params, this.RecordStylesActionValidator);
  }

  /**
   * Records variables action.
   * @param params - Original e
   */
  recordVariablesAction(params: any) {
    return this.makeValidatedPostRequest('/api/dsa/record/variable/action', params, this.RecordVariablesActionValidator);
  }

  // Helper methods for common API call patterns
  makeValidatedGetRequest(endpoint: string, params: any, validator: any) {
    const token = generateDSAToken(params);
    return validator.validate(async ({
      xr
    }: any) => await xr.get(endpoint, APIParameterUtils.toAPIParameters({
      ...params,
      ...token
    })));
  }
  makeValidatedPostRequest(endpoint: string, params: any, validator: any) {
    return validator.validate(async ({
      xr
    }: any) => await xr.post(endpoint, APIParameterUtils.toAPIParameters(params)));
  }
}
export const DSAApiServiceInstance = new DSAApiService();
export const PT = DSAApiServiceInstance;
export const Wc = InsertionDetachment;
