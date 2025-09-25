import { $convertFromMarkdownString } from '@lexical/markdown'
import { TextNode } from 'lexical'
import { createHeadlessEditor } from '../vendor/24766'
/**
 * Converts a markdown string to a serialized editor state JSON string.
 * @param markdown - The markdown string to convert.
 * @returns A JSON string representation of the editor state, or null if input is falsy.
 */
export function convertMarkdownToEditorState(markdown: string): string | null {
  if (!markdown)
    return null

  const editor = createHeadlessEditor({
    nodes: [TextNode],
    onError: (error: Error) => {
      console.error('Editor error:', error)
    },
  })

  editor.update(() => {
    $convertFromMarkdownString(markdown, [])
  }, {
    discrete: true,
  })

  return JSON.stringify(editor.getEditorState().toJSON())
}

export const F = convertMarkdownToEditorState
