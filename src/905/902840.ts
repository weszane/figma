import { CodeNode } from '@lexical/code'
import { createHeadlessEditor } from '@lexical/headless'
import { $generateHtmlFromNodes } from '@lexical/html'
import { LinkNode } from '@lexical/link'
import { ListItemNode, ListNode } from '@lexical/list'
import { $convertFromMarkdownString, $convertToMarkdownString, BOLD_ITALIC_STAR, BOLD_ITALIC_UNDERSCORE, BOLD_STAR, BOLD_UNDERSCORE, CODE, HEADING, INLINE_CODE, ITALIC_STAR, ITALIC_UNDERSCORE, LINK, ORDERED_LIST, STRIKETHROUGH, UNORDERED_LIST } from '@lexical/markdown'
import { HeadingNode } from '@lexical/rich-text'
import { $createParagraphNode, $createTextNode, $getRoot, TextNode } from 'lexical'
import { convertHtmlToEditorState } from '../905/122084'

// Markdown transformer presets used for Lexical conversions (original: p)
const MARKDOWN_TRANSFORMERS = [
  UNORDERED_LIST,
  ORDERED_LIST,
  BOLD_ITALIC_STAR,
  BOLD_ITALIC_UNDERSCORE,
  BOLD_STAR,
  BOLD_UNDERSCORE,
  STRIKETHROUGH,
  ITALIC_STAR,
  ITALIC_UNDERSCORE,
  CODE,
  HEADING,
  INLINE_CODE,
  LINK,
]

// Headless editor configuration (original: m)
const HEADLESS_EDITOR_CONFIG = {
  nodes: [TextNode, ListNode, ListItemNode, LinkNode, CodeNode, HeadingNode],
}

// Root node for conversion APIs where undefined means use the editor root (original: h)
const MARKDOWN_ROOT: undefined = undefined

/**
 * Normalize code fences in markdown by removing unnecessary whitespace after ```
 * (original function: $$g2)
 */
export function normalizeMarkdown(input: string): string {
  const sanitized = input.replace(/(```)\s+/, '$1')
  const editor = createHeadlessEditor(HEADLESS_EDITOR_CONFIG)
  let normalized = ''
  editor.update(() => {
    $convertFromMarkdownString(sanitized, MARKDOWN_TRANSFORMERS, MARKDOWN_ROOT, true)
    normalized = $convertToMarkdownString(MARKDOWN_TRANSFORMERS, MARKDOWN_ROOT, true)
  })
  return normalized
}

/**
 * Convert a serialized editor state (string) to markdown
 * (original function: $$f1)
 */
export function editorStateToMarkdown(editorStateSerialized: string): string {
  const editor = createHeadlessEditor(HEADLESS_EDITOR_CONFIG)
  const state = editor.parseEditorState(editorStateSerialized)
  editor.setEditorState(state)

  let markdown = ''
  editor.update(
    () => {
      markdown = $convertToMarkdownString(MARKDOWN_TRANSFORMERS, MARKDOWN_ROOT, true)
    },
    { discrete: true },
  )
  return markdown
}

/**
 * Convert HTML string to a Lexical editor state serialized for markdown workflows
 * (original function: $$_3)
 */
export function htmlToEditorState(html: string): string {
  const editor = createHeadlessEditor(HEADLESS_EDITOR_CONFIG)
  return convertHtmlToEditorState(html, editor, 'markdown', MARKDOWN_TRANSFORMERS)
}

// Emphasis correction patterns and transforms (original: A)
interface EmphasisPattern {
  regex: RegExp
  textNodeTransform: (node: TextNode) => void
}

const EMPHASIS_CORRECTION_PATTERNS: EmphasisPattern[] = [
  {
    regex: /^([^*_]*)(\*|_)([^*_]+)(\*{1,3}|_{1,3})([^*_]+)(\4)(\2)([^*_]*)$/,
    textNodeTransform: (node) => {
      if (!node.hasFormat('italic'))
        node.toggleFormat('italic')
    },
  },
  {
    regex: /^([^*_]*)(\*\*|__)([^*_]+)(\*{1,3}|_{1,3})([^*_]+)(\4)(\2)([^*_]*)$/,
    textNodeTransform: (node) => {
      if (!node.hasFormat('bold'))
        node.toggleFormat('bold')
    },
  },
  {
    regex: /^([^*_]*)(\*\*\*|___)([^*_]+)(\*{1,3}|_{1,3})([^*_]+)(\4)(\2)([^*_]*)$/,
    textNodeTransform: (node) => {
      if (!node.hasFormat('italic'))
        node.toggleFormat('italic')
      if (!node.hasFormat('bold'))
        node.toggleFormat('bold')
    },
  },
]

// Helper: try to extract emphasis interior and surrounding text from a match
function getEmphasisMatch(regex: RegExp, text: string): null | {
  fullText: string
  interiorText: string
  textBeforeMarkdown: string
  textAfterMarkdown: string
} {
  const match = text.match(regex)
  if (!match)
    return null

  const [fullText, textBeforeMarkdown, open1, interiorLeft, open2, interiorRight, close2, close1, textAfterMarkdown] = match
  // ensure pairs match (e.g., ** pairs with **, _ with _)
  if (
    fullText
    && open1
    && interiorLeft
    && open2
    && interiorRight
    && close2
    && close1
    && open1 === close1
    && open2 === close2
  ) {
    return {
      fullText,
      interiorText: interiorLeft + open2 + interiorRight + close2,
      textBeforeMarkdown,
      textAfterMarkdown,
    }
  }
  return null
}

// Helper: apply emphasis corrections to a TextNode in place
function applyEmphasisTransformsToTextNode(node: TextNode): void {
  const originalFormat = node.getFormat()
  const content = node.getTextContent()

  for (const pattern of EMPHASIS_CORRECTION_PATTERNS) {
    const match = getEmphasisMatch(pattern.regex, content)
    if (!match)
      continue

    const { interiorText, textBeforeMarkdown, textAfterMarkdown } = match

    const tempParagraph = $createParagraphNode()
    $convertFromMarkdownString(interiorText, MARKDOWN_TRANSFORMERS, tempParagraph, true)

    const textNodes = tempParagraph.getAllTextNodes()
    // retain original formats and apply pattern-specific transform
    textNodes.forEach((n) => {
      const combined = n.getFormat() | originalFormat
      n.setFormat(combined)
      pattern.textNodeTransform(n)
    })

    const replacementNodes: TextNode[] = []
    if (textBeforeMarkdown) {
      const before = $createTextNode(textBeforeMarkdown)
      before.setFormat(originalFormat)
      replacementNodes.unshift(before)
    }
    replacementNodes.push(...textNodes)
    if (textAfterMarkdown) {
      const after = $createTextNode(textAfterMarkdown)
      after.setFormat(originalFormat)
      replacementNodes.push(after)
    }
    if (!replacementNodes.length || !replacementNodes[0])
      continue

    // replace current node with first, then insert remaining after
    let anchor = node.replace(replacementNodes[0])
    replacementNodes.slice(1).forEach((node) => {
      anchor = anchor.insertAfter(node) as TextNode
    })
  }
}

/**
 * Convert markdown to both Lexical serialized state and HTML, enforcing link rel/target
 * and correcting emphasis formatting in text nodes
 * (original function: $$y0)
 */
export function renderMarkdownToLexicalAndHtml(markdown: string): { lexical: string, html: string } {
  const editor = createHeadlessEditor(HEADLESS_EDITOR_CONFIG)
  let lexicalJSON = ''
  let html = ''

  // Ensure all links open in new tab with safe rel
  editor.registerNodeTransform(LinkNode, (link) => {
    const desired = {
      target: '_blank',
      rel: 'noreferrer noopener nofollow ugc',
    }
    if (link.__rel !== desired.rel)
      link.__rel = desired.rel
    if (link.__target !== desired.target)
      link.__target = desired.target
  })

  // Load markdown into editor
  editor.update(
    () => {
      $convertFromMarkdownString(markdown, MARKDOWN_TRANSFORMERS, MARKDOWN_ROOT, true)
    },
    { discrete: true },
  )

  // Apply emphasis corrections
  editor.update(() => {
    for (const textNode of $getRoot().getAllTextNodes()) {
      applyEmphasisTransformsToTextNode(textNode)
    }
  })

  // Read out serialized state and HTML
  editor.read(() => {
    lexicalJSON = JSON.stringify(editor.getEditorState().toJSON())
    html = $generateHtmlFromNodes(editor)
  })

  return { lexical: lexicalJSON, html }
}

// Maintain existing named exports mapped to new refactored names
export const Kq = renderMarkdownToLexicalAndHtml
export const cd = editorStateToMarkdown
export const nB = normalizeMarkdown
export const zb = htmlToEditorState
