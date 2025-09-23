// Import the types we need
import type { TaskPriority } from '../src/figma_app/946103'

// Extend AbortSignal interface to include priority property
declare global {
  interface AbortSignal {
    readonly priority: TaskPriority
    onprioritychange: ((event: Event) => void) | null
  }
}

export { }
