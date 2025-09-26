import { fileEntityModel } from '../905/806985'
import { sendWithRetry } from '../905/910117'
import { APIParameterUtils, createMetaValidator, createNoOpValidator } from '../figma_app/181241'

/**
 * Validators and API handlers for file-related operations.
 * Original class: $$s0
 */
export interface FileApiParams {
  fileKey?: string
  args?: any
  includePerms?: boolean
  currentFileKey?: string
  branchFileKey?: string
  openFileKey?: string
  sha1?: string
  hexHash?: string
  includeFolderTeamCanEdit?: boolean
  file?: { key: string }
  fileKeys?: string[]
  fileTags?: string[]
  currentOrgId?: string
  currentTeamId?: string
  shouldRecreate?: boolean
}



export class FileApiHandler {
  /** Validator for related links schema (RelatedLinksSchemaValidator) */
  RelatedLinksSchemaValidator = createNoOpValidator()
  /** Validator for files schema (FilesSchemaValidator) */
  FilesSchemaValidator = createNoOpValidator()
  /** Validator for files schema with permissions (FilesSchemaValidatorWithPerms) */
  FilesSchemaValidatorWithPerms = createNoOpValidator()
  /** Validator for videos schema (VideosSchemaValidator) */
  VideosSchemaValidator = createNoOpValidator()
  /** Validator for realtime token schema (RealtimeTokenSchemaValidator) */
  RealtimeTokenSchemaValidator = createNoOpValidator()
  /** Validator for source checkpoint created at schema (SourceCheckpointCreatedAtSchemaValidator) */
  SourceCheckpointCreatedAtSchemaValidator = createNoOpValidator()
  /** Validator for source file updated info schema (SourceFileUpdatedInfoSchemaValidator) */
  SourceFileUpdatedInfoSchemaValidator = createNoOpValidator()
  /** Validator for meta schema (MetaSchemaValidator) */
  MetaSchemaValidator = createNoOpValidator()
  /** Validator for last interaction schema (LastInteractionSchemaValidator) */
  LastInteractionSchemaValidator = createNoOpValidator()
  /** Validator for videos upload schema (VideosUploadSchemaValidator) */
  VideosUploadSchemaValidator = createNoOpValidator()
  /** Validator for video download schema (VideoDownloadSchemaValidator) */
  VideoDownloadSchemaValidator = createNoOpValidator()
  /** Validator for include folder team can edit schema (IncludeFolderTeamCanEditSchemaValidator) */
  IncludeFolderTeamCanEditSchemaValidator = createNoOpValidator()
  /** Validator for page checkpoint thumbnails schema (PageCheckpointThumbnailsSchemaValidator) */
  PageCheckpointThumbnailsSchemaValidator = createNoOpValidator()
  /** Validator for hub file duplicates schema (GetHubFileDuplicatesSchemaValidator) */
  GetHubFileDuplicatesSchemaValidator = createNoOpValidator()
  /** Validator for tagged user file schema (GetTaggedUserFileSchemaValidator) */
  GetTaggedUserFileSchemaValidator = createNoOpValidator()
  /** Validator for page WAF validator schema (PageWAFValidatorSchemaValidator) */
  PageWAFValidatorSchemaValidator = createNoOpValidator()
  /** Validator for copy file schema (CopyFileSchemaValidator) */
  CopyFileSchemaValidator = createMetaValidator('CopyFileSchemaValidator', fileEntityModel, null)

  /**
   * Get related links for a file.
   * Original: getRelatedLinks
   */
  getRelatedLinks(params: FileApiParams): Promise<any> {
    const { fileKey, ...rest } = params
    return this.RelatedLinksSchemaValidator.validate(async ({ xr }) =>
      await xr.get(`/api/files/${fileKey}/related_links`, APIParameterUtils.toAPIParameters(rest)),
    )
  }

  /**
   * Get files, optionally with permissions.
   * Original: getFiles
   */
  getFiles(params: FileApiParams): Promise<any> {
    const { fileKey, args, ...rest } = params
    return params.includePerms
      ? this.FilesSchemaValidatorWithPerms.validate(async ({ xr }) =>
        await xr.get(`/api/files/${fileKey}`, APIParameterUtils.toAPIParameters(rest), args),
      )
      : this.FilesSchemaValidator.validate(async ({ xr }) =>
        await xr.get(`/api/files/${fileKey}`, APIParameterUtils.toAPIParameters(rest), args),
      )
  }

  /**
   * Get videos for a file.
   * Original: getVideos
   */
  getVideos(params: FileApiParams): Promise<any> {
    return this.VideosSchemaValidator.validate(async ({ xr }) =>
      await xr.get(`/api/files/${params.fileKey}/videos`),
    )
  }

  /**
   * Get realtime token for a file.
   * Original: getRealtimeToken
   */
  getRealtimeToken(params: FileApiParams): Promise<any> {
    return this.RealtimeTokenSchemaValidator.validate(async ({ xr }) =>
      await xr.get(`/api/files/${params.fileKey}/realtime_token`),
    )
  }

  /**
   * Get source checkpoint created at for a file.
   * Original: getSourceCheckpointCreatedAt
   */
  getSourceCheckpointCreatedAt(params: FileApiParams): Promise<any> {
    return this.SourceCheckpointCreatedAtSchemaValidator.validate(async ({ xr }) =>
      await xr.get(`/api/files/${params.currentFileKey}/source_checkpoint_created_at`),
    )
  }

  /**
   * Get source file updated info for a branch file.
   * Original: getSourceFileUpdatedInfo
   */
  getSourceFileUpdatedInfo(params: FileApiParams): Promise<any> {
    return this.SourceFileUpdatedInfoSchemaValidator.validate(async ({ xr }) =>
      await xr.get(`/api/files/${params.branchFileKey}/source_file_updated_info`),
    )
  }

  /**
   * Get meta information for a file.
   * Original: getMeta
   */
  getMeta(params: FileApiParams): Promise<any> {
    return this.MetaSchemaValidator.validate(async ({ xr }) =>
      await xr.get(`/api/files/${params.fileKey}/meta`),
    )
  }

  /**
   * Get last interaction for a file.
   * Original: getLastInteraction
   */
  getLastInteraction(params: FileApiParams): Promise<any> {
    return this.LastInteractionSchemaValidator.validate(async ({ xr }) =>
      await xr.get(`/api/files/${params.openFileKey}/last_interaction`),
    )
  }

  /**
   * Get videos upload endpoint for a file.
   * Original: getVideosUpload
   */
  getVideosUpload(params: FileApiParams): Promise<any> {
    return this.VideosUploadSchemaValidator.validate(async ({ xr }) =>
      await xr.get(`/api/files/${params.fileKey}/videos/${params.sha1}/upload`),
    )
  }

  /**
   * Get videos download endpoint for a file.
   * Original: getVideosDownload
   */
  getVideosDownload(params: FileApiParams): Promise<any> {
    return this.VideoDownloadSchemaValidator.validate(({ xr }) =>
      xr.get(`/api/files/${params.fileKey}/videos/${params.hexHash}`),
    )
  }

  /**
   * Get include folder team can edit for a file.
   * Original: getIncludeFolderTeamCanEdit
   */
  getIncludeFolderTeamCanEdit(params: FileApiParams): Promise<any> {
    return this.IncludeFolderTeamCanEditSchemaValidator.validate(async ({ xr }) =>
      await xr.get(
        `/api/files/${params.fileKey}`,
        APIParameterUtils.toAPIParameters({
          includeFolderTeamCanEdit: params.includeFolderTeamCanEdit ? 1 : 0,
        }),
      ),
    )
  }

  /**
   * Put file data.
   * Original: putFile
   */
  putFile(params: FileApiParams): Promise<any> {
    return sendWithRetry.put(`/api/files/${params.file?.key}`, params.file)
  }

  /**
   * Update page checkpoint thumbnails for a file.
   * Original: updatePageCheckpointThumbnails
   */
  updatePageCheckpointThumbnails(params: FileApiParams): Promise<any> {
    return this.PageCheckpointThumbnailsSchemaValidator.validate(async ({ xr }) =>
      await xr.post(`/api/files/${params.fileKey}/page_thumbnails`),
    )
  }

  /**
   * Get hub file duplicates.
   * Original: getHubFileDuplicates
   */
  getHubFileDuplicates(params: FileApiParams): Promise<any> {
    return this.GetHubFileDuplicatesSchemaValidator.validate(async ({ xr }) =>
      await xr.post(
        '/api/files/hub_file_duplicates',
        APIParameterUtils.toAPIParameters({ fileKeys: params.fileKeys }),
      ),
    )
  }

  /**
   * Get tagged user files.
   * Original: getTaggedUserFiles
   */
  getTaggedUserFiles(params: FileApiParams): Promise<any> {
    return this.GetTaggedUserFileSchemaValidator.validate(async ({ xr }) =>
      await xr.post(
        '/api/tagged_file',
        APIParameterUtils.toAPIParameters({
          fileTags: params.fileTags,
          currentOrgId: params.currentOrgId,
          currentTeamId: params.currentTeamId,
          shouldRecreate: params.shouldRecreate,
        }),
      ),
    )
  }

  /**
   * Get WAF validator.
   * Original: getWAFValidator
   */
  getWAFValidator(): Promise<any> {
    return this.PageWAFValidatorSchemaValidator.validate(async ({ xr }) =>
      await xr.get('/waf-validation-captcha'),
    )
  }

  /**
   * Copy a file.
   * Original: copyFile
   */
  copyFile(fileKey: string, options?: Record<string, any>): Promise<any> {
    return this.CopyFileSchemaValidator.validate(async ({ xr }) =>
      await xr.post(
        `/api/multiplayer/${fileKey}/copy`,
        APIParameterUtils.toAPIParameters({ ...(options || {}) }),
      ),
    )
  }
}

export const fileApiHandler = new FileApiHandler()
export const S = fileApiHandler
