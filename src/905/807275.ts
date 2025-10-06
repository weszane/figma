/**
 * A circular buffer implementation that maintains a fixed-size buffer
 * and optionally calls a callback when elements are evicted.
 *
 * Original class name: $$n0
 */
export class CircularBuffer<T> {
  maxElements: number
  callback: ((evictedElement: T) => void) | undefined
  size: number
  start: number
  end: number
  buffer: (T | undefined)[]

  /**
   * Creates a new circular buffer.
   * @param maxElements - The maximum number of elements the buffer can hold
   * @param callback - Optional callback function called when an element is evicted
   */
  constructor(maxElements: number, callback?: (evictedElement: T) => void) {
    this.maxElements = maxElements
    this.callback = callback
    this.size = 0
    this.start = 0
    this.end = 0
    this.buffer = Array.from({ length: maxElements })
  }

  /**
   * Gets the current number of elements in the buffer.
   */
  get length(): number {
    return this.size
  }

  /**
   * Gets the maximum capacity of the buffer.
   */
  get capacity(): number {
    return this.maxElements
  }

  /**
   * Adds an element to the buffer. If the buffer is full,
   * the oldest element is evicted and the callback is called (if provided).
   * @param element - The element to add to the buffer
   */
  push(element: T): void {
    if (this.maxElements === 0) {
      return
    }

    const evictedElement = this.buffer[this.end]
    this.buffer[this.end] = element
    this.end = (this.end + 1) % this.maxElements

    if (this.size === this.maxElements) {
      // Buffer is full, evict the oldest element
      if (this.callback && evictedElement !== undefined) {
        this.callback(evictedElement)
      }
      this.start = (this.start + 1) % this.maxElements
    }
    else {
      // Buffer is not full, increment size
      this.size++
    }
  }

  /**
   * Converts the buffer to an array in order from oldest to newest elements.
   * @returns A new array containing all elements in the buffer
   */
  toArray(): T[] {
    const result: T[] = Array.from({ length: this.size })
    let index = this.start

    for (let i = 0; i < this.size; i++) {
      result[i] = this.buffer[index] as T
      index = (index + 1) % this.maxElements
    }

    return result
  }

  /**
   * Clears all elements from the buffer.
   */
  clear(): void {
    this.start = 0
    this.end = 0
    this.size = 0
    this.buffer = Array.from({ length: this.maxElements })
  }

  /**
   * Gets the internal buffer array.
   * @returns The internal buffer array
   */
  getBuffer(): (T | undefined)[] {
    return this.buffer
  }
}

export const C = CircularBuffer
