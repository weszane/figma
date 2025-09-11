import { $generateNodesFromDOM } from '@lexical/html'
import { $convertToMarkdownString } from '@lexical/markdown'
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext'
import { $getRoot, $insertNodes, $isElementNode } from 'lexical'
import { useEffect } from 'react'
import { Fragment, jsx } from 'react/jsx-runtime'
import { reportError } from '../905/11'
import { ServiceCategories } from '../905/165054'
import { sanitizeAndNormalizeHtmlToDocument } from '../figma_app/9619'

/**
 * Converts HTML string to Lexical editor state or Markdown string.
 * Handles error reporting for invalid nodes.
 * @param htmlString - The HTML string to convert.
 * @param editor - Lexical editor instance.
 * @param outputFormat - Output format: 'json' or 'markdown'.
 * @param markdownConfig - Markdown config for conversion.
 * @returns Editor state as JSON string or Markdown string.
 */
// Original function name: $$p0
export function convertHtmlToEditorState(htmlString: string, editor: any, outputFormat: 'json' | 'markdown', markdownConfig?: any): string {
  let markdownResult = ''
  let hasNoValidNodes = false

  editor.update(() => {
    const document = sanitizeAndNormalizeHtmlToDocument(htmlString)
    const generatedNodes = $generateNodesFromDOM(editor, document)
    const validNodes = generatedNodes.filter(
      node => !!node.getParent() || $isElementNode(node),
    )

    // Error reporting for invalid nodes
    if (validNodes.length !== generatedNodes.length) {
      reportError(ServiceCategories.EXTENSIBILITY, new Error('Unable to render some HTML data in Lexical'), {
        extra: {
          htmlString,
          generatedNodes,
          validNodesToInsert: validNodes,
        },
      })
    }

    if (validNodes.length === 0) {
      hasNoValidNodes = true
    }

    $getRoot().clear()
    $insertNodes(validNodes)

    markdownResult
      = hasNoValidNodes || outputFormat !== 'markdown'
        ? ''
        : $convertToMarkdownString(markdownConfig, undefined, true)
  }, {
    discrete: true,
  })

  if (outputFormat === 'markdown') {
    return markdownResult
  }

  if (hasNoValidNodes) {
    // Return empty paragraph node if no valid nodes
    return '{"root":{"children":[{"children":[],"direction":null,"format":"","indent":0,"type":"paragraph","version":1}],"direction":null,"format":"","indent":0,"type":"root","version":1}}'
  }

  return JSON.stringify(editor.getEditorState().toJSON())
}

/**
 * React component that updates Lexical editor state from HTML string.
 * @param props.htmlString - HTML string to convert.
 * @returns Empty Fragment.
 */
// Original function name: $$m1
export const HtmlToLexicalEffect: React.FC<{ htmlString: string }> = ({
  htmlString,
}) => {
  const [editor] = useLexicalComposerContext()

  useEffect(() => {
    convertHtmlToEditorState(htmlString, editor, 'json')
  }, [editor, htmlString])

  return jsx(Fragment, {})
}

// Refactored exports
export const D = convertHtmlToEditorState
export const _ = HtmlToLexicalEffect
