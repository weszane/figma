import type { TaskController as TaskControllerType, TaskPriority } from "../figma_app/946103"
import { requestDeferredExecution } from "../905/561433"
import { throwTypeError } from "../figma_app/465776"
import { webAsyncCallback } from "../figma_app/763686"

type CancelItem = { type: "timeout", id: number } | { type: "postTask", controller: TaskControllerType }

class WebAsyncTaskScheduler {
  cancelMap = new Map<string, CancelItem>()

  postUserBlockingTask(id: string, delay = 0) {
    return this.postTask("user-blocking", id, delay)
  }

  postUserVisibleTask(id: string, delay = 0) {
    return this.postTask("user-visible", id, delay)
  }

  postBackgroundTask(id: string, delay = 0) {
    return this.postTask("background", id, delay)
  }

  postTask(priority: TaskPriority, id: string, delay: number) {
    const controller = new TaskController({ priority })
    const promise = scheduler.postTask(() => {
      this.cancelMap.delete(id)
      return true
    }, { signal: controller.signal, delay })

    this.cancelMap.set(id, { type: "postTask", controller })
    return promise
  }

  cancel(id: string) {
    const item = this.cancelMap.get(id)
    if (!item)
      return

    if (item.type === "timeout")
      clearTimeout(item.id)
    else if (item.type === "postTask")
      item.controller.abort()
    else throwTypeError(item)

    this.cancelMap.delete(id)
  }

  setTimeout(callbackId: string, ms: number) {
    const id = setTimeout(() => webAsyncCallback?.timeoutCallback(callbackId), ms)
    this.cancelMap.set(callbackId, { type: "timeout", id })
    return id
  }

  clearTimeout(id: number) {
    clearTimeout(id)
  }

  requestAnimationFrame() {
    requestDeferredExecution()
  }
}

export const WebAsyncInstance = new WebAsyncTaskScheduler()
export const F = WebAsyncInstance
