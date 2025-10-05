import type { DesignIssue } from "../905/49095"

// Refactored enum for better readability (original: $$n2)
export enum ChangeType {
  ADDED = "ADDED",
  REMOVED = "REMOVED",
}

// Refactored function to create code block objects (original: $$i4)
export interface CodeBlock {
  code: string
  indent?: number
  hint?: DesignIssue
  matchingVars?: any
}

export function createCodeBlock(
  code: string,
  indent: number = 0,
  hint?: DesignIssue,
  matchingVars?: any,
): CodeBlock {
  const block: CodeBlock = {
    code,
    matchingVars,
  }

  if (hint !== undefined) {
    block.hint = hint
  }

  if (indent > 0) {
    block.indent = indent
  }

  return block
}

// Refactored function to join code blocks (original: $$a3)
export function joinCodeBlocks(blocks: CodeBlock[], includeIndentation: boolean = false): string {
  return blocks
    .map(block =>
      includeIndentation ? `${getIndentString(block)}${block.code}` : block.code,
    )
    .join("\n")
}

// Refactored helper function for indentation (original: $$s1)
export function getIndentString(block: CodeBlock): string {
  if (block.indent && block.indent > 0) {
    return "  ".repeat(block.indent)
  }
  return ""
}

// Refactored function to determine language from file extension (original: $$o0)
export function getLanguageFromFileExtension(filename: string): string {
  if (!filename || typeof filename !== "string") {
    return "plaintext"
  }

  const extension = filename.split(".").pop()?.toLowerCase()

  switch (extension) {
    case "ts":
    case "tsx":
      return "typescript"
    case "js":
    case "jsx":
      return "javascript"
    case "css":
      return "css"
    case "json":
      return "json"
    case "html":
    case "htm":
      return "html"
    case "md":
      return "markdown"
    case "py":
      return "python"
    case "rb":
      return "ruby"
    case "go":
      return "go"
    case "cpp":
    case "cc":
    case "cxx":
    case "h":
    case "hpp":
      return "cpp"
    case "yml":
    case "yaml":
      return "yaml"
    case "xml":
      return "xml"
    case "swift":
      return "swift"
    case "kt":
    case "kts":
      return "kotlin"
    case "rs":
      return "rust"
    default:
      return "plaintext"
  }
}

// Export aliases for backward compatibility
export const $e = getLanguageFromFileExtension
export const Gj = getIndentString
export const j5 = ChangeType
export const kt = joinCodeBlocks
export const n8 = createCodeBlock
