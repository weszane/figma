import { resolveMessage } from "../905/231762"
import { getI18nString } from "../905/303541"
import { uploadRequest } from "../905/827765"
import { detectMimeType } from "../905/970229"
import { filePutAction, renameFileOptimistic } from "../figma_app/78808"
import { templateService } from "../figma_app/446378"
import { trimOrEmpty } from "../figma_app/740025"

interface TemplateValidationErrors {
  name?: string
  description?: string
}

interface TemplateData {
  name: string
  description: string
  publish_scope: string
}

interface UploadTemplateParams {
  fileKey: string
  name: string
  description: string
  publishScope: string
  customThumbnail?: {
    buffer: Uint8Array<ArrayBuffer>
  } | null
  shouldRenameFile: boolean
  onErrorsChanged: (errors: TemplateValidationErrors) => void
  onSuccess: () => void
  onFailure: (error: string) => void
  dispatch: (action: any) => void
}

/**
 * Validates template data before publishing
 * Original function: $$c1
 * @param data - Template data to validate
 * @returns Validation errors object
 */
export function validateTemplateData(data: Partial<TemplateData>): TemplateValidationErrors {
  const errors: TemplateValidationErrors = {}
  const nameLength = trimOrEmpty(data.name || null).length

  if (nameLength === 0) {
    errors.name = getI18nString("community.publishing.name_must_not_be_empty")
  }
  else if (nameLength > 100) {
    errors.name = getI18nString("community.publishing.name_must_be_at_most_100_characters_long")
  }

  if (trimOrEmpty(data.description || null).length > 10000) {
    errors.description = getI18nString("community.publishing.description_must_be_at_most_10000_characters_long")
  }

  return errors
}

/**
 * Publishes a template to the server
 * Original function: $$u0
 * @param params - Upload parameters
 */
export async function uploadTemplate({
  fileKey,
  name,
  description,
  publishScope,
  customThumbnail,
  shouldRenameFile,
  onErrorsChanged,
  onSuccess,
  onFailure,
  dispatch,
}: UploadTemplateParams): Promise<void> {
  if (!fileKey) {
    onFailure("Missing `fileKey`")
    return
  }

  const templateData: TemplateData = {
    name,
    description,
    publish_scope: publishScope,
  }

  const validationErrors = validateTemplateData(templateData)
  onErrorsChanged(validationErrors)

  // If there are validation errors, stop the process
  if (Object.keys(validationErrors).length > 0) {
    return
  }

  // Rename file optimistically if needed
  if (shouldRenameFile) {
    dispatch(renameFileOptimistic({
      file: {
        key: fileKey,
      },
      name,
    }))
  }

  try {
    let signature: string | null = null

    // Handle custom thumbnail upload
    if (customThumbnail && "buffer" in customThumbnail) {
      const { data: { status, meta } } = await templateService.uploadTemplateCoverImage({
        fileKey,
      })

      if (status !== 200) {
        onFailure(getI18nString("templates.actions.error_connecting_to_server_to_upload_file_thumbnail"))
        return
      }

      const { cover_image_upload_url, fields = {} } = meta
      signature = meta.signature

      const formData = new FormData()

      // Append form fields
      Object.entries<any>(fields).forEach(([key, value]) => {
        formData.append(key, value)
      })

      // Set content type and append file
      formData.set("content-type", detectMimeType(customThumbnail.buffer) ?? "image/png")
      formData.append("file", new Blob([customThumbnail.buffer]))

      try {
        await uploadRequest(cover_image_upload_url, formData)
      }
      catch (error) {
        onFailure(resolveMessage(error, getI18nString("templates.actions.error_connecting_to_server_to_upload_file_thumbnail")))
        return
      }
    }

    // Prepare additional parameters
    const additionalParams: Record<string, string> = {}
    if (customThumbnail || signature) {
      additionalParams.cover_image_uploaded = "true"
    }
    if (signature) {
      additionalParams.signature = signature
    }

    // Upload template data
    await templateService.upsertTemplate({
      fileKey,
      payload: templateData,
      params: additionalParams,
    })

    // Update file state and call success callback
    dispatch(filePutAction({
      file: {
        key: fileKey,
        is_team_template: true,
      },
    }))

    onSuccess()
  }
  catch (error) {
    onFailure(error.message)
  }
}

export const l = uploadTemplate
export const s = validateTemplateData
