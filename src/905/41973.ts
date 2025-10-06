import { getInitialOptions } from "../figma_app/169182"
import { deprecatedXHRBindings } from "../figma_app/763686"

// Network request handler class
export class NetworkRequestHandler {
  /**
   * Sends an HTTP request with the provided configuration
   * @param requestConfig - Configuration object for the request
   */
  public sendRequest(requestConfig: any): void {
    const xhr = new XMLHttpRequest()

    // Set up response handler
    xhr.onloadend = () => {
      deprecatedXHRBindings?.receiveResponse({
        promiseID: requestConfig.promiseID,
        status: xhr.status,
        contentType: xhr.getResponseHeader("Content-Type"),
        data: xhr.response ? new Uint8Array(xhr.response) : null,
      })
    }

    // Configure request
    xhr.open(requestConfig.method, requestConfig.url)
    xhr.responseType = "arraybuffer"

    // Set headers
    for (const headerName in requestConfig.headers) {
      xhr.setRequestHeader(headerName, requestConfig.headers[headerName])
    }

    // Add user ID header if available
    const userId = getInitialOptions().user_data?.id
    if (userId) {
      xhr.setRequestHeader("X-Figma-User-ID", userId)
    }

    // Send request with form data or raw buffer
    if (requestConfig.formData) {
      const formData = new FormData()

      for (const field of requestConfig.formData) {
        if (field.data !== null && field.data !== undefined) {
          formData.append(field.name, field.data)
        }
        else {
          const blobData = requestConfig.buffer.subarray(field.dataStart, field.dataEnd)
          formData.append(field.name, new Blob([blobData], {
            type: field.mimeType,
          }))
        }
      }

      xhr.send(formData)
    }
    else {
      xhr.send(requestConfig.buffer)
    }
  }
}

// Instance management
export let deprecatedXHRSendBindingsInstance: NetworkRequestHandler

/**
 * Initializes the network request handler instance
 */
export function initializeNetworkRequestHandler(): void {
  deprecatedXHRSendBindingsInstance = new NetworkRequestHandler()
}

export const ae = initializeNetworkRequestHandler
export const yx = deprecatedXHRSendBindingsInstance
