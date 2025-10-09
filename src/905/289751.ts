/**
 * Reads the bytes of an image file as an ArrayBuffer.
 * @param file - The image file to read.
 * @returns A promise that resolves with the image bytes as ArrayBuffer.
 * @throws If the file is not provided or reading fails.
 * Original function name: $$n0
 */
export function readImageBytes(file: Blob): Promise<ArrayBuffer> {
  return new Promise((resolve, reject) => {
    if (!file) {
      reject(new Error('Failed to load image bytes without file object'))
      return
    }

    const fileReader = new FileReader()

    /**
     * Handles FileReader events for load, abort, and error.
     * @param event - The FileReader event.
     * Original inner function name: r
     */
    const handleEvent = (event: ProgressEvent<FileReader>) => {
      if (
        event.type !== 'load'
        || typeof fileReader.result === 'string'
        || !fileReader.result
      ) {
        reject(new Error(`Failed to load image bytes: event=${event.type}`))
        return
      }
      resolve(fileReader.result as ArrayBuffer)
    }

    fileReader.addEventListener('load', handleEvent)
    fileReader.addEventListener('abort', handleEvent)
    fileReader.addEventListener('error', handleEvent)
    fileReader.readAsArrayBuffer(file)
  })
}

// Refactored export name for import consistency
export const c = readImageBytes
