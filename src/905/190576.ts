import type { PermissionAction } from '../figma_app/756995'
import { APIParameterUtils, createNoOpValidator } from '../figma_app/181241'
import { getPermissionActionKey } from '../figma_app/756995'

class TrashedFoldersAPI {
  private validator = createNoOpValidator()

  getTrashedFolders(params: {
    orgId?: string
    teamId?: string
    roleFilter?: PermissionAction
  }) {
    return this.validator.validate(async ({ xr: client }) => {
      const apiParams = APIParameterUtils.toAPIParameters({
        orgId: params.orgId || '',
        teamId: params.teamId || '',
        roleFilter: getPermissionActionKey(params.roleFilter),
      })

      return await client.get('/api/trashed_folders', apiParams)
    })
  }
}

export const trashedFoldersAPI = new TrashedFoldersAPI()
export const V = trashedFoldersAPI
