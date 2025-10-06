import { APIParameterUtils, createNoOpValidator } from '../figma_app/181241'

class WidgetAPIClient {
  validators = {
    orgWhitelist: createNoOpValidator(),
    versions: createNoOpValidator(),
    widgets: createNoOpValidator(),
    profile: createNoOpValidator(),
    org: createNoOpValidator(),
    installStatus: createNoOpValidator(),
    unpublishedWidgets: createNoOpValidator()
  }

  getUnpublishedWidgets<T = any>() {
    return this.validators.unpublishedWidgets.validate<T>(async ({
      xr: client,
    }) => await client.get('/api/widgets/unpublished'))
  }

  getOrgWhitelist<T = any>({ orgId, ...params }) {
    return this.validators.orgWhitelist.validate<T>(async ({
      xr: client,
    }) => await client.get(`/api/widgets/org/${orgId}/whitelist`, APIParameterUtils.toAPIParameters(params)))
  }

  getVersions<T = any>({ widgetId }) {
    return this.validators.versions.validate<T>(async ({
      xr: client,
    }) => await client.get(`/api/widgets/${widgetId}/versions`, {}, {
      retryCount: 1,
    }))
  }

  getWidgets<T = any>(params) {
    return this.validators.widgets.validate<T>(async ({
      xr: client,
    }) => await client.get('/api/widgets', APIParameterUtils.toAPIParameters(params)))
  }

  getProfile<T = any>({ profileId, ...params }) {
    return this.validators.profile.validate<T>(async ({
      xr: client,
    }) => await client.get(`/api/widgets/profile/${profileId}`, APIParameterUtils.toAPIParameters(params)))
  }

  getOrg<T = any>({ orgId }) {
    return this.validators.org.validate<T>(async ({
      xr: client,
    }) => await client.get(`/api/widgets/org/${orgId}`))
  }

  getInstallStatus<T = any>(params) {
    return this.validators.installStatus.validate<T>(async ({
      xr: client,
    }) => await client.get('/api/widgets/install_status', APIParameterUtils.toAPIParameters(params)))
  }
}

export const widgetAPIClient = new WidgetAPIClient()
export const U = widgetAPIClient
