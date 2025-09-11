import type { LexicalEditor } from 'lexical'
import { CodeNode } from '@lexical/code'
import { createHeadlessEditor } from '@lexical/headless'
import { $generateHtmlFromNodes } from '@lexical/html'
import { LinkNode } from '@lexical/link'
import { ListItemNode, ListNode } from '@lexical/list'
import { HeadingNode } from '@lexical/rich-text'
import dompurify from 'dompurify'
import { $getRoot, TextNode } from 'lexical'
import { sanitizeHtml, sanitizeHtmlWithForbiddenAttributes } from '../905/69245'

/**
 * Original: $$_2
 * Collection of Lexical nodes used by the headless editor.
 */
export const lexicalNodes = [TextNode, ListNode, ListItemNode, LinkNode, CodeNode, HeadingNode]

/**
 * Original: $$h1
 * Generate sanitized HTML from a Lexical editor state, applying Quill-compatible
 * transformations for code blocks and lists.
 */
export function generateSanitizedHtmlFromLexicalEditor(editor: LexicalEditor): string {
  const rawHtml = $generateHtmlFromNodes(editor)
  const sanitized = sanitizeHtmlWithForbiddenAttributes(rawHtml, ['class', 'dir'])

  // Apply transformations: code blocks and list normalization (Quill-compatible)
  const withCodeBlocks = transformPreToQuillCodeBlocks(sanitized)
  const withNormalizedLists = normalizeUlOlLists(withCodeBlocks)
  return withNormalizedLists
}

/**
 * Original (inline helper): transforms <pre>...</pre> blocks into
 * Quill-compatible code block containers.
 */
function transformPreToQuillCodeBlocks(html: string): string {
  const doc = new DOMParser().parseFromString(html, 'text/html')
  doc.querySelectorAll('pre').forEach((pre) => {
    const container = document.createElement('div')
    container.classList.add('ql-code-block-container')
    container.setAttribute('spellcheck', 'false')
    // Convert <br> to newline before splitting into lines
    const lines = pre.innerHTML.replace(/<br\s*\/?>/gi, '\n').split('\n')
    lines.forEach((line) => {
      const div = document.createElement('div')
      div.classList.add('ql-code-block')
      div.innerHTML = dompurify().sanitize(line)
      container.appendChild(div)
    })
    pre.replaceWith(container)
  })
  return doc.body.innerHTML
}

/**
 * Original (inline helper): converts UL to OL and sets data-list attributes to match
 * the expected Quill format.
 */
function normalizeUlOlLists(html: string): string {
  const doc = new DOMParser().parseFromString(html, 'text/html')

  // Mark ordered items
  doc.querySelectorAll('ol > li').forEach((li) => {
    li.setAttribute('data-list', 'ordered')
  })

  // Convert unordered lists into ordered containers and mark items as bullet
  doc.querySelectorAll('ul').forEach((ul) => {
    const ol = document.createElement('ol')
    ol.innerHTML = dompurify().sanitize(ul.innerHTML)
    ul.replaceWith(ol)
    ol.querySelectorAll('li').forEach((li) => {
      li.setAttribute('data-list', 'bullet')
    })
  })

  return doc.body.innerHTML
}

/**
 * Original: $$g3
 * Detect whether a string is a serialized Lexical editor state (JSON)
 * or plain HTML.
 */
export function detectEditorStateFormat(input: string): 'lexical' | 'html' {
  try {
    JSON.parse(input)
    const editor = createHeadlessEditor({ nodes: lexicalNodes })
    editor.setEditorState(editor.parseEditorState(input))
    return 'lexical'
  }
  catch {
    return 'html'
  }
}

/**
 * Original: $$f0
 * Parse a given Lexical editor state (string) and return the plain text content.
 */
export function parseEditorStateToPlainText(input: string): string {
  const editor = createHeadlessEditor({
    nodes: lexicalNodes,
    onError: (e: unknown) => console.error(e),
  })
  return editor.parseEditorState(input).read(() => $getRoot().getTextContent())
}

/**
 * Original: E
 * Normalize HTML by:
 * - Wrapping stray text nodes into <p>
 * - Wrapping inline-only elements into <p>
 * - Removing empty text nodes
 * - Converting newlines to <br>
 */
function normalizeHtmlParagraphs(html: string | null | undefined): string {
  if (!html)
    return ''

  const doc = new DOMParser().parseFromString(html, 'text/html')
  doc.body.childNodes.forEach((node) => {
    if (node.nodeType === Node.TEXT_NODE) {
      const text = node.textContent
      if (!text || text.trim() === '') {
        node.remove()
        return
      }
      const prev = node.previousSibling
      if (prev?.nodeType === Node.ELEMENT_NODE && (prev as Element).nodeName === 'P') {
        ;(prev as Element).innerHTML = dompurify().sanitize((prev as Element).innerHTML + text)
        node.remove()
        return
      }
      const next = node.nextSibling
      if (next?.nodeType === Node.ELEMENT_NODE && (next as Element).nodeName === 'P') {
        ;(next as Element).innerHTML = dompurify().sanitize(text + (next as Element).innerHTML)
        node.remove()
        return
      }
      const p = document.createElement('p')
      p.textContent = text.trim()
      node.replaceWith(p)
      return
    }

    if (
      node.nodeType === Node.ELEMENT_NODE
      && ['STRONG', 'I', 'EM', 'S', 'CODE', 'BR'].includes((node as Element).tagName)
    ) {
      const p = document.createElement('p')
      node.replaceWith(p)
      p.appendChild(node)
    }
  })

  return doc.body.innerHTML.replace(/(\r\n|\n|\r)/g, '<br>')
}

/**
 * Original (helper m): Build a list container (ol/ul) from a set of <li> elements,
 * with safe innerHTML.
 */
function buildListContainer(items: Element[], type: string | null): HTMLElement {
  const list = document.createElement(type === 'ordered' ? 'ol' : 'ul')
  const inner = items.map(e => (e as HTMLElement).outerHTML).join('')
  list.innerHTML = dompurify().sanitize(inner)
  return list
}

/**
 * Original: $$y4
 * Sanitize HTML, normalize paragraph structure, handle Quill code blocks and
 * normalize ordered lists grouped by data-list values, and return a Document.
 */
export function sanitizeAndNormalizeHtmlToDocument(html: string): Document {
  const parser = new DOMParser()
  const firstPass = sanitizeHtml(normalizeHtmlParagraphs(html))
  const secondPass = sanitizeHtml(normalizeHtmlParagraphs(firstPass))
  const doc = parser.parseFromString(secondPass, 'text/html')

  // Convert Quill code block containers back into <pre> with line breaks
  convertQuillCodeBlocksToPre(doc)
  // Split ordered lists by data-list groups into UL/OL as needed
  splitOrderedListsByDataList(doc)
  // Remove trailing empty <p><br></p>
  removeTrailingEmptyParagraph(doc)

  return doc
}

/**
 * Original (inline in $$y4): convert Quill code block containers to <pre>.
 */
function convertQuillCodeBlocksToPre(doc: Document): void {
  doc.querySelectorAll('div.ql-code-block-container').forEach((container) => {
    const pre = document.createElement('pre')
    const lines = container.querySelectorAll('div.ql-code-block')
    lines.forEach((line, idx) => {
      const span = document.createElement('span')
      span.innerHTML = dompurify().sanitize(line.innerHTML)
      pre.appendChild(span)
      if (idx < lines.length - 1)
        pre.appendChild(document.createElement('br'))
    })
    container.replaceWith(pre)
  })
}

/**
 * Original (inline in $$y4): split <ol> into groups by data-list and create UL/OL accordingly.
 */
function splitOrderedListsByDataList(doc: Document): void {
  doc.querySelectorAll('ol').forEach((ol) => {
    const groups: HTMLElement[] = []
    const items = Array.from(ol.querySelectorAll('li'))
    let buffer: Element[] = []
    let currentType: string | null = null

    for (const li of items) {
      if (!currentType) {
        currentType = li.getAttribute('data-list')
        if (!currentType)
          return
      }
      const liType = li.getAttribute('data-list')
      if (liType !== currentType) {
        groups.push(buildListContainer(buffer, currentType))
        buffer = []
        currentType = liType
      }
      buffer.push(li)
    }
    if (buffer.length)
      groups.push(buildListContainer(buffer, currentType))

    ol.replaceWith(...groups)
  })
}

/**
 * Original (inline in $$y4): remove trailing empty paragraph (<p><br></p>).
 */
function removeTrailingEmptyParagraph(doc: Document): void {
  const last = doc.body.lastElementChild
  if (last && last.nodeName === 'P' && last.innerHTML === '<br>') {
    last.remove()
  }
}

/* Backwards-compatible exports mapping old names to refactored ones */

// Keep original exported identifiers for compatibility
export const $$_2 = lexicalNodes
export const $$h1 = generateSanitizedHtmlFromLexicalEditor
export const $$g3 = detectEditorStateFormat
export const $$f0 = parseEditorStateToPlainText
export const $$y4 = sanitizeAndNormalizeHtmlToDocument

// Original alias exports maintained, now pointing to the refactored names
export const El = parseEditorStateToPlainText
export const T = generateSanitizedHtmlFromLexicalEditor
export const cL = lexicalNodes
export const j_ = detectEditorStateFormat
export const mH = sanitizeAndNormalizeHtmlToDocument
