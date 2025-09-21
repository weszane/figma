/**
 * Custom error class for upload-related errors.
 * Original name: n
 */
class UploadError extends Error {
  url: string
  status?: number
  responseText?: string

  /**
   * @param message Error message
   * @param url Request URL
   * @param status HTTP status code
   * @param responseText Response body text
   */
  constructor(message: string, url: string, status?: number, responseText?: string) {
    super(message)
    this.name = 'UploadError'
    this.url = url
    this.status = status
    this.responseText = responseText
  }
}

/**
 * Uploads data using a POST request.
 * Original name: $$r1
 * @param url Request URL
 * @param body Request body
 * @param options Additional options (headers, fetchOptions)
 * @returns Response object
 * @throws UploadError on failure
 */
export async function uploadRequest(
  url: string,
  body: BodyInit,
  options: {
    headers?: Record<string, string>
    fetchOptions?: RequestInit
  } = {},
): Promise<Response> {
  const {
    headers = {},
    fetchOptions = {},
  } = options

  try {
    const response = await fetch(url, {
      method: 'POST',
      body,
      headers,
      ...fetchOptions,
    })

    if (!response.ok) {
      const responseText = await response.text().catch(() => 'No response body')
      throw new UploadError(
        `HTTP Error: ${response.status} ${response.statusText}`,
        url,
        response.status,
        responseText.length <= 200
          ? responseText
          : `${responseText.substring(0, 200)}...`,
      )
    }

    return response
  }
  catch (error) {
    if (error instanceof UploadError)
      throw error
    throw new UploadError(
      `Upload Error: ${error instanceof Error ? error.message : String(error)}`,
      url,
    )
  }
}

/**
 * Uploads multiple files in parallel.
 * Original name: $$a0
 * @param uploads Array of upload objects
 * @param globalOptions Global options for all uploads
 * @returns Array of responses
 */
export async function uploadMultiple(
  uploads: Array<{
    url: string
    formData: BodyInit
    options?: {
      headers?: Record<string, string>
      fetchOptions?: RequestInit
    }
  }>,
  globalOptions: {
    headers?: Record<string, string>
    fetchOptions?: RequestInit
  } = {},
): Promise<Response[]> {
  return await Promise.all(
    uploads.map(({ url, formData, options = {} }) =>
      uploadRequest(url, formData, {
        ...globalOptions,
        ...options,
        headers: {
          ...(globalOptions.headers || {}),
          ...(options.headers || {}),
        },
        fetchOptions: {
          ...(globalOptions.fetchOptions || {}),
          ...(options.fetchOptions || {}),
        },
      }),
    ),
  )
}

// Export original variable names mapped to refactored functions
export const aB = uploadMultiple // original: aB
export const yr = uploadRequest // original: yr
