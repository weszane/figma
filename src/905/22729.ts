/**
 * Manages a Web Worker for handling image I/O operations.
 * This class creates a worker from a blob script that imports the image I/O worker URL,
 * handles message passing with callbacks, and provides methods to send messages and terminate the worker.
 */
export class ImageIOWorkerManager {
  nextID: number
  callbacks: Map<number, (data: any) => void>
  worker: Worker

  constructor() {
    this.nextID = 0
    this.callbacks = new Map()

    // Create a blob with a script to import the image I/O worker
    const scriptBlob = new Blob([
      `try {
        importScripts("${new URL(Fig.imageIOWorkerURL, document.baseURI).href}");
      } catch (error) {
        console.warn("Could not load image worker blob", error);
      }`,
    ], {
      type: 'application/javascript',
    })

    this.worker = new Worker(URL.createObjectURL(scriptBlob))

    // Handle messages from the worker
    this.worker.onmessage = (event: MessageEvent) => {
      const messageData = event.data
      const callback = this.callbacks.get(messageData.id)
      this.callbacks.delete(messageData.id)
      if (callback) {
        callback(messageData)
      }
    }
  }

  /**
   * Clears all pending callbacks.
   */
  forgetCallbacks(): void {
    this.callbacks.clear()
  }

  /**
   * Sends a message to the worker and returns a promise that resolves with the response.
   * @param message - The message object to send to the worker.
   * @returns A promise that resolves with the worker's response data.
   */
  sendMessage(message: any): Promise<any> {
    return new Promise((resolve) => {
      const id = this.nextID++
      this.callbacks.set(id, resolve)
      this.worker.postMessage({
        ...message,
        id,
      })
    })
  }

  /**
   * Terminates the worker.
   */
  terminate(): void {
    this.worker.terminate()
  }
}

// Original export name maintained for compatibility
export const o = ImageIOWorkerManager
