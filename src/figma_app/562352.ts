/**
 * Resolves an array of promises and returns their results with status.
 * Original name: $$n3
 */
export async function resolveAllWithStatus<T>(promises: Promise<T>[]): Promise<Array<{ type: 'resolve' | 'reject', resolve?: T, reject?: any }>> {
  return new Promise((resolve) => {
    const results: Array<{ type: 'resolve' | 'reject', resolve?: T, reject?: any }> = Array.from({ length: promises.length })
    let remaining = promises.length

    const checkDone = () => {
      if (remaining === 0)
        resolve(results)
    }

    promises.forEach((promise, idx) => {
      promise.then(
        (value) => {
          results[idx] = { type: 'resolve', resolve: value, reject: undefined }
          remaining--
          checkDone()
        },
        (error) => {
          results[idx] = { type: 'reject', resolve: undefined, reject: error }
          remaining--
          checkDone()
        },
      )
    })

    checkDone()
  })
}

/**
 * Runs up to `concurrency` async functions from the array, collecting their results with status.
 * Original name: $$i0
 */
export function runWithConcurrency<T>(
  tasks: Array<() => Promise<T>>,
  concurrency: number,
): Promise<Array<{ type: 'resolve' | 'reject', resolve?: T, reject?: any }>> {
  return new Promise((resolve) => {
    let current = 0
    let remaining = tasks.length
    const results: Array<{ type: 'resolve' | 'reject', resolve?: T, reject?: any }> = Array.from({ length: tasks.length })

    const checkDone = () => {
      if (remaining === 0)
        resolve(results)
    }

    const runTask = (idx: number) => {
      const task = tasks[idx]
      if (task) {
        task().then(
          (value) => {
            results[idx] = { type: 'resolve', resolve: value, reject: undefined }
            remaining--
            scheduleNext()
            checkDone()
          },
          (error) => {
            results[idx] = { type: 'reject', resolve: undefined, reject: error }
            remaining--
            scheduleNext()
            checkDone()
          },
        )
      }
    }

    const scheduleNext = () => {
      if (current < tasks.length) {
        runTask(current)
        current++
      }
    }

    for (let i = 0; i < concurrency && current < tasks.length; i++) {
      scheduleNext()
    }

    checkDone()
  })
}

/**
 * Creates a singleton async function that caches its result until rejected.
 * Original name: $$a1
 */
export function singletonAsync<T>(fn: () => Promise<T>): () => Promise<T> {
  let cached: Promise<T> | null = null
  return () => {
    if (cached === null) {
      cached = fn().catch(() => {
        cached = null
        throw new Error('Singleton async function failed')
      })
    }
    return cached
  }
}

/**
 * Retries an async function up to `retries` times with delay `delayMs` between attempts.
 * Original name: $$s2
 */
export async function retryAsync<T>(
  fn: () => Promise<T>,
  retries: number,
  delayMs: number,
): Promise<T> {
  return new Promise((resolve, reject) => {
    let lastError: any

    const attempt = () => {
      if (retries === 0) {
        reject(lastError)
        return
      }
      fn()
        .then(resolve)
        .catch((error) => {
          retries--
          lastError = error
          setTimeout(attempt, delayMs)
        })
    }

    attempt()
  })
}

// Export aliases for backward compatibility
export const Ed = runWithConcurrency
export const Kt = singletonAsync
export const OF = retryAsync
export const _7 = resolveAllWithStatus
