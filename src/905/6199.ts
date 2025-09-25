import { $createCodeNode, $isCodeNode } from '@lexical/code'
import { $isLinkNode, TOGGLE_LINK_COMMAND } from '@lexical/link'
import { $isListItemNode, INSERT_ORDERED_LIST_COMMAND, INSERT_UNORDERED_LIST_COMMAND, ListNode } from '@lexical/list'
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext'
import { $createHeadingNode, $isHeadingNode } from '@lexical/rich-text'
import { $setBlocksType } from '@lexical/selection'
import { $createParagraphNode, $getSelection, $isRangeSelection, COMMAND_PRIORITY_LOW, FORMAT_TEXT_COMMAND, KEY_MODIFIER_COMMAND, SELECTION_CHANGE_COMMAND } from 'lexical'
import { memo, useCallback, useEffect, useRef, useState } from 'react'
import { jsx, jsxs } from 'react/jsx-runtime'
import { setupToggleButton } from '../905/167712'
import { j as Icon1 } from '../905/253683'
import { getI18nString } from '../905/303541'
import { N as SVG } from '../905/430294'
import { formatShortcutKey } from '../905/491152'
import { Z } from '../905/498136'
import { I as Icon3 } from '../905/542485'
import { i as Icon4 } from '../905/661697'
import { p as Icon5 } from '../905/682418'
import { s as Icon2 } from '../905/702260'
import { W as Icon6 } from '../905/865092'
import { getRelevantSelectionNode, normalizeUrl } from '../905/999278'
import { mergeRegister } from '../vendor/425002'
/**
 * HeadingIcon - SVG icon for heading toggle button.
 * Original name: d
 */
const HeadingIcon = memo((props) => {
  return jsx('svg', {
    width: '24',
    height: '24',
    fill: 'none',
    viewBox: '0 0 24 24',
    ...props,
    children: jsx('path', {
      fill: 'var(--color-icon)',
      fillRule: 'evenodd',
      d: 'M7 6.5a.5.5 0 0 0-1 0v11a.5.5 0 0 0 1 0V12h6v5.5a.5.5 0 0 0 1 0v-11a.5.5 0 0 0-1 0V11H7zm11 6a.5.5 0 0 0-.777-.416l-1.5 1a.5.5 0 1 0 .554.832l.723-.482V17.5a.5.5 0 0 0 1 0z',
      clipRule: 'evenodd',
    }),
  })
})

/**
 * toggleCodeBlock - Toggles code block or paragraph block type.
 * Original name: w
 * @param editor Lexical editor instance
 * @param isCodeBlock boolean
 */
function toggleCodeBlock(editor, isCodeBlock: boolean) {
  editor.update(() => {
    const selection = $getSelection()
    if (selection !== null) {
      $setBlocksType(selection, () => isCodeBlock ? $createParagraphNode() : $createCodeNode())
    }
  })
}

/**
 * setParagraphBlock - Sets block type to paragraph.
 * Original name: C
 * @param editor Lexical editor instance
 */
function setParagraphBlock(editor) {
  editor.update(() => {
    const selection = $getSelection()
    if (selection !== null) {
      $setBlocksType(selection, () => $createParagraphNode())
    }
  })
}

/**
 * ToolbarPlugin - Lexical editor toolbar plugin component.
 * Original name: $$T0
 */
export function ToolbarPlugin({
  setIsLinkEditMode,
}: {
  setIsLinkEditMode: (editMode: boolean) => void
}) {
  const [editor] = useLexicalComposerContext()
  const toolbarRef = useRef<HTMLDivElement>(null)
  const [isBold, setBold] = useState(false)
  const [isItalic, setItalic] = useState(false)
  const [isStrikethrough, setStrikethrough] = useState(false)
  const [isHeading, setHeading] = useState(false)
  const [isBulletedList, setBulletedList] = useState(false)
  const [isNumberedList, setNumberedList] = useState(false)
  const [isLink, setLink] = useState(false)
  const [isInlineCode, setInlineCode] = useState(false)
  const [isCodeBlock, setCodeBlock] = useState(false)

  /**
   * updateToolbarState - Updates toolbar button states based on selection.
   * Original name: K
   */
  const updateToolbarState = useCallback(() => {
    const selection = $getSelection()
    if ($isRangeSelection(selection)) {
      /**
       * getListTag - Helper to get list tag from node.
       */
      const getListTag = (node) => {
        if ($isListItemNode(node)) {
          const parent = node.getParent()
          if (parent instanceof ListNode) {
            return parent.getTag()
          }
        }
        return null
      }
      const relevantNode = getRelevantSelectionNode(selection)
      const parentNode = relevantNode.getParent()
      setLink($isLinkNode(parentNode) || $isLinkNode(relevantNode))
      const listTag = getListTag(relevantNode) || getListTag(parentNode)
      setBulletedList(listTag === 'ul')
      setNumberedList(listTag === 'ol')
      const isCode = !!($isCodeNode(relevantNode) || (parentNode && $isCodeNode(parentNode)))
      setCodeBlock(isCode)
      setInlineCode(selection.hasFormat('code') && !isCode)
      setHeading(!!($isHeadingNode(relevantNode) || (parentNode && $isHeadingNode(parentNode))))
      setBold(selection.hasFormat('bold'))
      setItalic(selection.hasFormat('italic'))
      setStrikethrough(selection.hasFormat('strikethrough'))
    }
  }, [])

  useEffect(() => {
    return mergeRegister(
      editor.registerUpdateListener(({ editorState }) => {
        editorState.read(() => {
          updateToolbarState()
        })
      }),
      editor.registerCommand(SELECTION_CHANGE_COMMAND, () => {
        updateToolbarState()
        return false
      }, COMMAND_PRIORITY_LOW),
      editor.registerCommand(KEY_MODIFIER_COMMAND, (event) => {
        if (event.metaKey && event.shiftKey && event.code === 'KeyX') {
          editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'strikethrough')
          return true
        }
        if (event.metaKey && event.shiftKey && event.altKey && event.code === 'KeyC') {
          toggleCodeBlock(editor, isCodeBlock)
          return true
        }
        if (event.metaKey && event.shiftKey && event.code === 'KeyC') {
          editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'code')
          return true
        }
        return false
      }, COMMAND_PRIORITY_LOW),
    )
  }, [editor, updateToolbarState, isCodeBlock])

  /**
   * handleHeadingToggle - Toggles heading block type.
   * Original inline function in heading button.
   */
  const handleHeadingToggle = () => {
    editor.update(() => {
      const selection = $getSelection()
      if (selection !== null) {
        $setBlocksType(selection, () => isHeading ? $createParagraphNode() : $createHeadingNode('h1'))
      }
    })
  }

  /**
   * handleLinkToggle - Toggles link on selection.
   * Original inline function in link button.
   */
  const handleLinkToggle = () => {
    editor.update(() => {
      const selection = $getSelection()
      if ($isRangeSelection(selection)) {
        const text = selection.getTextContent()
        if (isLink) {
          setIsLinkEditMode(false)
          editor.dispatchCommand(TOGGLE_LINK_COMMAND, null)
        }
        else {
          const url = text ? normalizeUrl(text) : ''
          setIsLinkEditMode(true)
          editor.dispatchCommand(TOGGLE_LINK_COMMAND, url)
        }
      }
    })
  }

  return jsxs('div', {
    className: 'toolbar_plugin--toolbar--C-lb8',
    ref: toolbarRef,
    children: [
      jsx(setupToggleButton, {
        'aria-label': getI18nString('lexical_editor_toolbar.bold') + formatShortcutKey({ keyShortcutKey: 'B' }),
        'onIcon': jsx(Icon1, {}),
        'offIcon': jsx(Icon1, {}),
        'checked': isBold,
        'variant': 'highlighted',
        'onChange': () => editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'bold'),
      }),
      jsx(setupToggleButton, {
        'aria-label': getI18nString('lexical_editor_toolbar.italic') + formatShortcutKey({ keyShortcutKey: 'I' }),
        'onIcon': jsx(Icon2, {}),
        'offIcon': jsx(Icon2, {}),
        'checked': isItalic,
        'variant': 'highlighted',
        'onChange': () => editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'italic'),
      }),
      jsx(setupToggleButton, {
        'aria-label': getI18nString('lexical_editor_toolbar.strikethrough') + formatShortcutKey({ keyShortcutShift: true, keyShortcutKey: 'X' }),
        'onIcon': jsx(SVG, {}),
        'offIcon': jsx(SVG, {}),
        'checked': isStrikethrough,
        'variant': 'highlighted',
        'onChange': () => editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'strikethrough'),
      }),
      jsx(setupToggleButton, {
        'aria-label': getI18nString('lexical_editor_toolbar.heading'),
        'onIcon': jsx(HeadingIcon, {}),
        'offIcon': jsx(HeadingIcon, {}),
        'checked': isHeading,
        'variant': 'highlighted',
        'onChange': handleHeadingToggle,
      }),
      jsx(setupToggleButton, {
        'aria-label': getI18nString('lexical_editor_toolbar.bulleted_list'),
        'onIcon': jsx(Z, {}),
        'offIcon': jsx(Z, {}),
        'checked': isBulletedList,
        'variant': 'highlighted',
        'onChange': () => isBulletedList ? setParagraphBlock(editor) : editor.dispatchCommand(INSERT_UNORDERED_LIST_COMMAND, undefined),
      }),
      jsx(setupToggleButton, {
        'aria-label': getI18nString('lexical_editor_toolbar.numbered_list'),
        'onIcon': jsx(Icon5, {}),
        'offIcon': jsx(Icon5, {}),
        'checked': isNumberedList,
        'variant': 'highlighted',
        'onChange': () => isNumberedList ? setParagraphBlock(editor) : editor.dispatchCommand(INSERT_ORDERED_LIST_COMMAND, undefined),
      }),
      jsx(setupToggleButton, {
        'aria-label': getI18nString('lexical_editor_toolbar.link') + formatShortcutKey({ keyShortcutKey: 'U', keyShortcutShift: true }),
        'onIcon': jsx(Icon6, {}),
        'offIcon': jsx(Icon6, {}),
        'checked': isLink,
        'variant': 'highlighted',
        'onChange': handleLinkToggle,
      }),
      jsx(setupToggleButton, {
        'aria-label': getI18nString('lexical_editor_toolbar.inline_code') + formatShortcutKey({ keyShortcutShift: true, keyShortcutKey: 'C' }),
        'onIcon': jsx(Icon4, {}),
        'offIcon': jsx(Icon4, {}),
        'checked': isInlineCode,
        'variant': 'highlighted',
        'onChange': () => editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'code'),
      }),
      jsx(setupToggleButton, {
        'aria-label': getI18nString('lexical_editor_toolbar.code_block') + formatShortcutKey({ keyShortcutShift: true, keyShortcutOption: true, keyShortcutKey: 'C' }),
        'onIcon': jsx(Icon3, {}),
        'offIcon': jsx(Icon3, {}),
        'checked': isCodeBlock,
        'variant': 'highlighted',
        'onChange': () => toggleCodeBlock(editor, isCodeBlock),
      }),
    ],
  })
}

/** Export for external usage. Original name: A */
export const A = ToolbarPlugin
