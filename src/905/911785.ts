export class MarkdownBuilder {
  private data: string[]

  constructor() {
    this.data = []
  }

  /**
   * Appends a string element to the data array
   * @param element - The string element to append
   * @returns The current instance for chaining
   */
  append(element: string): this {
    this.data.push(element)
    return this
  }

  /**
   * Adds a code fence block with specified content and language
   * @param contentFn - Function that returns the code content
   * @param language - The programming language for syntax highlighting (default: 'jsx')
   * @returns The current instance for chaining
   */
  codefence(contentFn: () => string, language: string = 'jsx'): this {
    this.data.push('```')
    this.data.push(language)
    this.data.push('\n')
    this.data.push(contentFn())
    this.data.push('\n')
    this.data.push('```')
    return this
  }

  /**
   * Adds a newline character to the data array
   * @returns The current instance for chaining
   */
  newline(): this {
    this.data.push('\n')
    return this
  }

  /**
   * Converts the data array to a string with optional separator
   * @param separator - The separator to use when joining elements (default: '')
   * @returns The joined string representation
   */
  toString(separator: string = ''): string {
    return this.data.join(separator)
  }
}

export const f = MarkdownBuilder
