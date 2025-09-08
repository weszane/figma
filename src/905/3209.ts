import { XHR } from '../905/910117';
import { APIParameterUtils, createNoOpValidator } from '../figma_app/181241';

// Types
interface OrgWhitelistParams {
  orgId: string;
  [key: string]: any;
}
interface PluginVersionsParams {
  pluginId: string;
}
interface PluginsParams {
  [key: string]: any;
}
interface ProfileParams {
  profileId: string;
  [key: string]: any;
}
interface OrgParams {
  orgId: string;
}
interface InstallStatusParams {
  [key: string]: any;
}

/**
 * Plugin API Service
 * Handles all plugin-related API endpoints with proper validation
 */
export class PluginAPIService {
  private readonly orgWhitelistValidator = createNoOpValidator();
  private readonly versionsValidator = createNoOpValidator();
  private readonly pluginsValidator = createNoOpValidator();
  private readonly profileValidator = createNoOpValidator();
  private readonly orgValidator = createNoOpValidator();
  private readonly installStatusValidator = createNoOpValidator();
  private readonly unpublishedPluginsValidator = createNoOpValidator();

  /**
   * Gets the organization whitelist for plugins
   */
  async getOrgWhitelist(params: OrgWhitelistParams) {
    return this.orgWhitelistValidator.validate(async ({
      xr
    }) => {
      const {
        orgId,
        ...queryParams
      } = params;
      return await xr.get(`/api/plugins/org/${orgId}/whitelist`, APIParameterUtils.toAPIParameters(queryParams));
    });
  }

  /**
   * Gets versions for a specific plugin
   */
  async getVersions(params: PluginVersionsParams) {
    return this.versionsValidator.validate(async ({
      xr
    }) => await xr.get(`/api/plugins/${params.pluginId}/ver sions`));
  }

  /**
   * Gets plugins with optional filtering parameters
   */
  async getPlugins(params: PluginsParams) {
    return this.pluginsValidator.validate(async ({
      xr
    }) => await xr.get('/api/plugins', APIParameterUtils.toAPIParameters(params)));
  }

  /**
   * Gets profile information for a specific profile
   */
  async getProfile(params: ProfileParams) {
    const {
      profileId,
      ...queryParams
    } = params;
    return this.profileValidator.validate(async ({
      xr
    }) => await xr.get(`/api/plugins/profile/${profileId}`, APIParameterUtils.toAPIParameters(queryParams)));
  }

  /**
   * Gets organization information
   */
  async getOrg(params: OrgParams) {
    return this.orgValidator.validate(async ({
      xr
    }) => await xr.get(`/api/plugins/org/${params.orgId}`));
  }

  /**
   * Gets install status for plugins
   */
  async getInstallStatus(params: InstallStatusParams) {
    return this.installStatusValidator.validate(async ({
      xr
    }) => await xr.get('/api/plugins/install_status', APIParameterUtils.toAPIParameters(params)));
  }

  /**
   * Gets unpublished plugins
   */
  async getUnpublishedPlugins() {
    return this.unpublishedPluginsValidator.validate(async ({
      xr
    }) => await xr.get('/api/plugins/unpublished'));
  }

  /**
   * Posts plugin batch request
   * @param pluginIds - Array of plugin IDs
   * @param orgId - Organization ID (optional)
   */
  async postPluginsBatch(pluginIds: string[], orgId?: string) {
    return await XHR.post('/api/plugins/batch', {
      ids: pluginIds,
      org_id: orgId
    });
  }
}

// Create and export singleton instance
export const pluginAPIService = new PluginAPIService();

// Legacy export for backward compatibility
export const V = pluginAPIService;

// Named export for better clarity
export { pluginAPIService as PluginAPI };