import { getCurrentLiveGraphClient } from "../905/761735"
import { sendWithRetry } from "../905/910117"
import { APIParameterUtils, createNoOpValidator } from "../figma_app/181241"

class WorkspaceApiClient {
  TeamsSchemaValidator = createNoOpValidator()
  constructor() {
  }

  /**
   * Updates the workspace image
   * Original: updateImage
   */
  updateImage({
    workspaceId,
    img_url,
    img_url_500_500,
    onfulfilled,
    onrejected,
  }: {
    workspaceId: string
    img_url: string
    img_url_500_500: string
    onfulfilled?: (value: any) => any
    onrejected?: (reason: any) => any
  }): Promise<any> {
    return sendWithRetry.put(`/api/workspace/${workspaceId}/update_image`, {
      img_url,
      img_url_500_500,
    }).then(onfulfilled, onrejected)
  }

  /**
   * Updates the workspace color configuration
   * Original: updateColor
   */
  updateColor({
    workspaceId,
    colors,
    onfulfilled,
    onrejected,
  }: {
    workspaceId: string
    colors: Record<string, any>
    onfulfilled?: (value: any) => any
    onrejected?: (reason: any) => any
  }): Promise<any> | undefined {
    const requestPromise = sendWithRetry.put(`/api/workspace/${workspaceId}`, {
      colors,
    }).then(onfulfilled, onrejected)

    return getCurrentLiveGraphClient()?.optimisticallyUpdate({
      Workspace: {
        [workspaceId]: {
          colorConfig: {
            colors,
          },
        },
      },
    }, requestPromise)
  }

  /**
   * Updates the workspace description
   * Original: updateDescription
   */
  async updateDescription({
    workspaceId,
    description,
  }: {
    workspaceId: string
    description: string
  }): Promise<void> {
    await sendWithRetry.put(`/api/workspace/${workspaceId}`, {
      description,
    })
  }

  /**
   * Deletes default teams from workspace
   * Original: deleteDefaultTeams
   */
  async deleteDefaultTeams({
    workspaceId,
    removedTeamIds,
  }: {
    workspaceId: string
    removedTeamIds: string[]
  }): Promise<void> {
    await sendWithRetry.del(`/api/workspace/${workspaceId}/default_teams`, {
      team_ids: removedTeamIds,
    })
  }

  /**
   * Adds default teams to workspace
   * Original: addDefaultTeams
   */
  async addDefaultTeams({
    workspaceId,
    addedTeamIds,
  }: {
    workspaceId: string
    addedTeamIds: string[]
  }): Promise<void> {
    await sendWithRetry.post(`/api/workspace/${workspaceId}/default_teams`, {
      team_ids: addedTeamIds,
    })
  }

  /**
   * Updates public link controls setting for workspace
   * Original: updatePublicLinkControlsSetting
   */
  updatePublicLinkControlsSetting({
    workspaceId,
    publicLinkControlsSetting,
    publicLinkControlsMaxExpiration,
  }: {
    workspaceId: string
    publicLinkControlsSetting: any
    publicLinkControlsMaxExpiration: number
  }): Promise<any> {
    return sendWithRetry.put(`/api/workspace/${workspaceId}/settings`, {
      public_link_controls_setting: publicLinkControlsSetting,
      public_link_controls_max_expiration: publicLinkControlsMaxExpiration,
    })
  }

  /**
   * Updates AI controls setting (currently a no-op)
   * Original: updateAiControls
   */
  updateAiControls({
    workspaceId,
    aiControlsSetting,
  }: {
    workspaceId: string
    aiControlsSetting: any
  }): Promise<{ workspaceId: string, aiControlsSetting: any }> {
    return Promise.resolve({
      workspaceId,
      aiControlsSetting,
    })
  }

  /**
   * Exports workspace members as CSV
   * Original: getMemberCSVExport
   */
  getMemberCSVExport({ workspaceId }: { workspaceId: string }): Promise<any> {
    return sendWithRetry.post(`/api/workspace/${workspaceId}/export_members`)
  }

  /**
   * Gets teams for a workspace
   * Original: getTeams
   */
  getTeams({
    workspaceId,
    includeSecretTeams,
  }: {
    workspaceId: string
    includeSecretTeams?: boolean
  }): Promise<any> {
    return this.TeamsSchemaValidator.validate(async ({
      xr: client,
    }) => await client.get(`/api/workspace/${workspaceId}/teams`, APIParameterUtils.toAPIParameters({
      includeSecretTeams,
    })))
  }
}

export let workspaceApiService = new WorkspaceApiClient()
export const u = workspaceApiService
