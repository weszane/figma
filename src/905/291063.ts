/**
 * Original class name: $$n0
 * Original export name: O
 *
 * AsyncJobQueue manages a queue of asynchronous jobs, processing them sequentially.
 * It ensures that jobs are executed one after another, with methods to enqueue jobs,
 * check completion status, and wait for all jobs to finish.
 */
export class AsyncJobQueue {
  private jobs: (() => Promise<void>)[] = []
  private worker: Promise<void> | undefined

  constructor() {
    this.jobs = []
  }

  /**
   * Original method name: enqueue
   * Adds a job to the queue and starts processing if not already running.
   * Waits for the current worker to complete before resetting it.
   * @param job - The asynchronous job to enqueue.
   */
  async enqueue(job: () => Promise<void>): Promise<void> {
    this.jobs.push(job)
    if (!this.worker) {
      this.worker = this.start()
    }
    await this.worker
    this.worker = undefined
  }

  /**
   * Original method name: isComplete
   * Checks if there is no active worker, indicating all jobs are complete.
   * @returns True if no worker is running, false otherwise.
   */
  isComplete(): boolean {
    return !this.worker
  }

  /**
   * Original getter name: length
   * Gets the number of jobs currently in the queue.
   * @returns The length of the jobs array.
   */
  get length(): number {
    return this.jobs.length
  }

  /**
   * Original method name: waitForCompletion
   * Returns a promise that resolves when the current worker completes, or immediately if none is running.
   * @returns A promise that resolves when processing is done.
   */
  waitForCompletion(): Promise<void> {
    return this.worker ?? Promise.resolve()
  }

  /**
   * Original method name: start
   * Processes jobs sequentially from the queue.
   * @returns A promise that resolves when all jobs are processed.
   */
  private async start(): Promise<void> {
    let job = this.jobs.shift()
    while (job) {
      await job()
      job = this.jobs.shift()
    }
  }
}

/**
 * Original export: export const O = $$n0;
 * Refactored to match the new class name.
 */
export const O = AsyncJobQueue
