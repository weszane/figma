import { createCortexAPI } from '../905/96041'
import { sendMetric } from '../905/485103'

interface ParsedLine {
  type: 'h1' | 'h2' | 'li' | 'p'
  content: string
}

interface ParseCallback {
  (line: ParsedLine, position: number): void
}

/**
 * Parser for processing markdown-like formatted text with custom delimiters
 * Original class name: o
 */
class NotesParser {
  onParse: ParseCallback
  state: number
  buffer: string
  cursor: number

  constructor(callback: ParseCallback) {
    this.onParse = callback
    this.state = 0 // 0: initial, 1: in notes, 2: in summary, 3: completed
    this.buffer = ''
    this.cursor = 0
  }

  /**
   * Parse a single line based on its prefix
   * @param line - The line to parse
   * @returns Parsed line object with type and content
   */
  parseLine(line: string): ParsedLine {
    if (line.startsWith('# ')) {
      const content = line.slice(2)
      return {
        type: 'h1',
        content: content.charAt(0).toUpperCase() + content.slice(1).toLowerCase(),
      }
    }

    if (line.startsWith('## ')) {
      return {
        type: 'h2',
        content: line.slice(3),
      }
    }

    if (line.startsWith('### ')) {
      return {
        type: 'h2',
        content: line.slice(4),
      }
    }

    if (line.startsWith('- ')) {
      return {
        type: 'li',
        content: line.slice(2),
      }
    }

    return {
      type: 'p',
      content: line,
    }
  }

  /**
   * Process incoming text data and parse when appropriate delimiters are found
   * @param text - Text to process
   */
  feed(text: string): void {
    this.buffer += text

    const consumeBuffer = (length: number): void => {
      this.buffer = this.buffer.slice(length)
      this.cursor += length
    }

    while (this.buffer.length > 0) {
      const newlineIndex = this.buffer.indexOf('\n')

      switch (this.state) {
        case 0: // Looking for start delimiter
          if (newlineIndex === -1)
            return
          if (this.buffer.slice(0, newlineIndex) === '--- BEGIN NOTES') {
            this.state = 1
          }
          consumeBuffer(newlineIndex + 1)
          break

        case 1: // Looking for summary body delimiter
          if (newlineIndex === -1)
            return
          if (this.buffer.slice(0, newlineIndex).startsWith('--- BEGIN SUMMARY BODY')) {
            this.state = 2
          }
          consumeBuffer(newlineIndex + 1)
          break

        case 2: // Parsing content
          if (this.buffer.startsWith('---')) {
            this.state = 3
            return
          }

          if (newlineIndex === -1) {
            // Handle last line without newline
            if (this.buffer.length >= 4) {
              const parsedLine = this.parseLine(this.buffer)
              this.onParse(parsedLine, this.cursor)
            }
            return
          }

          const line = this.buffer.slice(0, newlineIndex)
          if (line.length > 0) {
            const parsedLine = this.parseLine(line)
            this.onParse(parsedLine, this.cursor)
          }
          consumeBuffer(newlineIndex + 1)
          break

        case 3: // Completed
          return
      }
    }
  }
}

/**
 * Create a transform stream for parsing notes
 * Original function name: $$l3
 */
export function createNotesParserStream() {
  let parser: NotesParser
  let lastEntry: { start: number, primitive: ParsedLine } | undefined
  const results: ParsedLine[] = []

  return new TransformStream({
    start(controller) {
      parser = new NotesParser((line, position) => {
        if (lastEntry?.start === position) {
          // Update last entry
          results[results.length - 1] = line
        }
        else {
          // Add new entry
          results.push(line)
          lastEntry = {
            start: position,
            primitive: line,
          }
        }
        controller.enqueue([...results])
      })
    },
    transform(chunk, _controller) {
      parser.feed(chunk.delta)
    },
  })
}

/**
 * Cortex API instance with error handling
 * Original variable name: $$c2
 */
export const cortexAPI = createCortexAPI({
  onError: (route) => {
    sendMetric('web.cortex.error', {
      route,
    })
  },
})

/**
 * Async iterator wrapper for readable streams
 * Original class name: $$u0
 */
export class StreamAsyncIterator<T> {
  stream: ReadableStream<T>

  constructor(stream: ReadableStream<T>) {
    this.stream = stream
  }

  async*[Symbol.asyncIterator](): AsyncGenerator<T, void, unknown> {
    const reader = this.stream.getReader()
    try {
      while (true) {
        const { done, value } = await reader.read()
        if (done)
          break
        yield value
      }
    }
    finally {
      reader.releaseLock()
    }
  }
}

/**
 * Async iterator wrapper for readable streams with timeout
 * Original class name: $$p1
 */
export class StreamAsyncIteratorWithTimeout<T> {
  stream: ReadableStream<T>
  timeoutMs: number

  constructor(stream: ReadableStream<T>, timeoutMs: number) {
    this.stream = stream
    this.timeoutMs = timeoutMs
  }

  async*[Symbol.asyncIterator](): AsyncGenerator<T, void, unknown> {
    const reader = this.stream.getReader()
    try {
      while (true) {
        const readPromise = reader.read()
        const timeoutPromise = new Promise<never>((_, reject) => {
          setTimeout(() => {
            reject(new Error('Timeout'))
          }, this.timeoutMs)
        })

        try {
          const { done, value } = await Promise.race([readPromise, timeoutPromise])
          if (done)
            break
          yield value
        }
        catch (error) {
          if (error instanceof Error && error.message === 'Timeout') {
            break
          }
          throw error
        }
      }
    }
    finally {
      reader.releaseLock()
    }
  }
}

// Export aliases
export const c6 = StreamAsyncIterator
export const hI = StreamAsyncIteratorWithTimeout
export const Ay = cortexAPI
export const nU = createNotesParserStream
