const VALID_PRIORITIES = ['user-blocking', 'user-visible', 'background'] as const
type TaskPriority = typeof VALID_PRIORITIES[number]

/**
 * PriorityChange event for task priority changes
 * (Original name: $$$$i1)
 */
export class TaskPriorityChangeEvent extends Event {
  readonly previousPriority: TaskPriority

  constructor(type: string, init: { previousPriority: TaskPriority }) {
    if (!init || !VALID_PRIORITIES.includes(init.previousPriority)) {
      throw new TypeError(`Invalid task priority: '${init.previousPriority}'`)
    }
    super(type)
    this.previousPriority = init.previousPriority
  }
}

/**
 * PriorityController for managing task priorities
 * (Original name: $$a0)
 */
export class TaskController extends AbortController {
  private priority_: TaskPriority
  private isPriorityChanging_: boolean

  constructor(init: { priority?: TaskPriority } = {}) {
    super()

    if (typeof init !== 'object') {
      throw new TypeError('\'init\' is not an object')
    }

    const priority = init.priority ?? 'user-visible'

    if (!VALID_PRIORITIES.includes(priority)) {
      throw new TypeError(`Invalid task priority: '${priority}'`)
    }

    this.priority_ = priority
    this.isPriorityChanging_ = false

    // Setup signal properties
    const signal = this.signal as any
    Object.defineProperties(signal, {
      priority: {
        get: () => this.priority_,
        enumerable: true,
      },
      onprioritychange: {
        value: null,
        writable: true,
        enumerable: true,
      },
    })

    signal.addEventListener('prioritychange', (event: TaskPriorityChangeEvent) => {
      if (signal.onprioritychange) {
        signal.onprioritychange(event)
      }
    })
  }

  /**
   * Sets the priority of the controller
   * @param priority - The new priority to set
   */
  setPriority(priority: TaskPriority): void {
    if (!VALID_PRIORITIES.includes(priority)) {
      throw new TypeError(`Invalid task priority: ${priority}`)
    }

    if (this.isPriorityChanging_) {
      throw new DOMException('', 'NotAllowedError')
    }

    if (this.signal.priority === priority) {
      return
    }

    this.isPriorityChanging_ = true
    const previousPriority = this.priority_
    this.priority_ = priority

    const priorityChangeEvent = new TaskPriorityChangeEvent('prioritychange', {
      previousPriority,
    })

    this.signal.dispatchEvent(priorityChangeEvent)
    this.isPriorityChanging_ = false
  }
}

export const i = TaskController
export const w = TaskPriorityChangeEvent
