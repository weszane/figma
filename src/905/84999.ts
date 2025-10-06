import { z } from "zod"
import { Ip } from "../905/239603"
import { customHistory } from "../905/612521"
import { OrganizationUserSchemaAlias } from "../figma_app/35887"
import { createMetaValidator } from "../figma_app/181241"


// FileMetadataSchemaValidator validates file metadata responses
const FileMetadataSchemaValidator = createMetaValidator(
  "FileMetadataSchemaValidator",
  z.object({
    script: z.string(),
    name: z.string(),
    file_key: z.string(),
    source_file_key: z.string().nullable(),
    needs_upgrade: z.boolean(),
    org_drafts_owners: z.array(OrganizationUserSchemaAlias),
    prefix: z.string(),
    shared_fonts: Ip.ignore(),
    feature_flags: Ip.ignore(),
    is_community_duplicate: z.boolean(),
    file_repo: Ip.ignore(),
    can_edit: z.boolean(),
    current_team_user: Ip.ignore(),
    redirect_to_password_auth: z.boolean().optional(),
    last_published_at: z.string().nullable(),
    team: Ip.ignore(),
    is_team_template: z.boolean(),
    jubilee_tentative_plan_eligibility: z.boolean(),
    jubilee_tentative_user_eligibility: z.boolean(),
    jubilee_b: z.boolean(),
    jubilee_eligibility_s: z.number().nullable(),
  }),
  null,
  false,
)

/**
 * FileMetadataService handles fetching and validating file metadata
 */
class FileMetadataService {
  validator = FileMetadataSchemaValidator

  /**
   * Fetches file metadata for a given file key
   * @param params - Object containing fileKey
   * @returns Validated file metadata
   */
  async getFileMetadata(params: { fileKey: string }) {
    // Extract query parameters from current location
    const searchParams = new URLSearchParams(customHistory.location.search)
    const forwardParams = new URLSearchParams()

    // Forward specific query parameters
    const forceIncremental = searchParams.get("force-incremental") || ""
    if (forceIncremental !== "") {
      forwardParams.append("force-incremental", forceIncremental)
    }

    const preload = searchParams.get("preload") || ""
    if (preload !== "") {
      forwardParams.append("preload", preload)
    }

    // Validate and fetch file metadata
    return this.validator.validate(async ({ xr }) => {
      const basePath = `/api/file_metadata/${params.fileKey}`
      const queryString = forwardParams.toString()
      const url = queryString === "" ? basePath : `${basePath}?${queryString}`
      return await xr.get(url)
    })
  }
}

export const fileMetadataService = new FileMetadataService()
export const m = fileMetadataService
