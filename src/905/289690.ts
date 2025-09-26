import { z } from 'zod'
import { fileEntityModel } from '../905/806985'
import { sendWithRetry } from '../905/910117'
import { repositoryDefinition } from '../905/954314'
import { OrganizationUserSchemaAlias } from '../figma_app/35887'
import { getInitialOptions } from '../figma_app/169182'
import { APIParameterUtils, createMetaValidator } from '../figma_app/181241'
import { ignore } from '../figma_app/709165'

/**
 * RecentFilesOrgIdSchemaValidator schema definition.
 */
const RecentFilesOrgIdSchema = z.object({
  recent_files: fileEntityModel.array(),
  recent_repos: z.object({
    repo: repositoryDefinition,
    files: ignore(fileEntityModel.array()),
    timestamp: z.string(),
  }).array(),
  org_drafts_owners: OrganizationUserSchemaAlias.array(),
})

/**
 * Provides methods for recent files operations.
 */
class RecentFilesService {
  public RecentFilesOrgIdSchemaValidator;

  constructor() {
    // Original: this.RecentFilesOrgIdSchemaValidator
    this.RecentFilesOrgIdSchemaValidator = createMetaValidator(
      'RecentFilesOrgIdSchemaValidator',
      RecentFilesOrgIdSchema,
      null,
      false
    )
  }

  /**
   * Fetches recent files for the current user.
   * @param params - Additional parameters for the API call.
   * @returns Promise resolving to recent files data.
   */
  async getRecentFiles(params: Record<string, any>) {
    // Original: getRecentFiles
    return this.RecentFilesOrgIdSchemaValidator.validate(async ({ xr }) =>
      await xr.get(
        '/api/recent_files',
        APIParameterUtils.toAPIParameters({
          ...params,
          fuid: getInitialOptions().user_data?.id,
        })
      )
    )
  }

  /**
   * Removes recent files by file keys.
   * @param params - Object containing fileKeys array.
   * @returns Promise resolving to deletion result.
   */
  async removeRecentFiles(params: { fileKeys: string[] }) {
    // Original: removeRecentFiles
    return sendWithRetry.del('/api/files_batch/view', {
      file_keys: params.fileKeys,
    })
  }
}

export const f = new RecentFilesService()
