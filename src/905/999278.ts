import type { LexicalEditor, RangeSelection } from 'lexical'
import { $isLinkNode } from '@lexical/link'
import { $isAtNodeEnd } from '@lexical/selection'
import { $isLineBreakNode, $isNodeSelection, $isRangeSelection } from 'lexical'
import { $findMatchingParent } from '../vendor/425002'

/**
 * Returns the anchor or focus node depending on selection direction and position.
 * Original: $$o2
 */
export function getRelevantSelectionNode(selection: RangeSelection): any {
  const anchor = selection.anchor
  const focus = selection.focus
  const anchorNode = anchor.getNode()
  const focusNode = focus.getNode()

  if (anchorNode === focusNode)
    return anchorNode

  if (selection.isBackward()) {
    return $isAtNodeEnd(focus) ? anchorNode : focusNode
  }
  return $isAtNodeEnd(anchor) ? anchorNode : focusNode
}

/**
 * Normalizes a string to a mailto or https URL.
 * Original: $$l1
 */
export function normalizeUrl(input: string): string {
  let url = input
  if (url.startsWith('mailto:'))
    return url
  if (/^[^\s@/]+@[^\s/@][^\s./@]*\.[^\s/@]+$/.test(url)) {
    url = `mailto:${url}`
  }
  else if (!/^https?:\/{2}/.test(url)) {
    url = `https://${url}`
  }
  return url
}

/**
 * Checks if the selection is within the root element but not the root itself.
 * Original: d
 */
function isSelectionWithinRoot(editor: LexicalEditor, range: any): boolean {
  if (!range)
    return false
  const root = editor.getRootElement()
  return !!(root && root.contains(range.startContainer)) && root !== range.startContainer
}

/**
 * Returns the most relevant selection range within the editor.
 * Original: $$c4
 */
export function getRelevantSelectionRange(editor: LexicalEditor, range: any): any {
  const win = editor._window || window
  const selection = win.getSelection()
  const currentRange = selection ? selection.getRangeAt(0) : null

  if (isSelectionWithinRoot(editor, currentRange))
    return currentRange
  if (isSelectionWithinRoot(editor, range))
    return range
  return null
}

/**
 * Calculates the position and off-screen status of an element relative to another.
 * Original: $$u0
 */
export function getRelativePosition(element: HTMLElement, container: HTMLElement): { x: number, y: number, offScreen: boolean } {
  const elementRect = element.getBoundingClientRect()
  const containerRect = container.getBoundingClientRect()
  const x = elementRect.left - containerRect.left + elementRect.width / 2
  const y = elementRect.top - containerRect.top
  const offScreen = elementRect.top < containerRect.top || elementRect.bottom > containerRect.bottom
  return { x, y, offScreen }
}

/**
 * Determines if the selection is entirely within a link node.
 * Original: $$p5
 */
export function isSelectionWithinLink(selection: RangeSelection): boolean {
  if ($isNodeSelection(selection)) {
    const nodes = selection.getNodes()
    if (nodes.length === 0)
      return false
    const firstNode = nodes[0]
    const parent = firstNode?.getParent()
    if ($isLinkNode(parent) || $isLinkNode(firstNode))
      return true
  }
  else if ($isRangeSelection(selection)) {
    const relevantNode = getRelevantSelectionNode(selection)
    const linkParent = $findMatchingParent(relevantNode, $isLinkNode)
    return !!linkParent && !selection.getNodes().filter(node => !$isLineBreakNode(node)).find((node) => {
      const nodeLinkParent = $findMatchingParent(node, $isLinkNode)
      return (linkParent && !linkParent.is(nodeLinkParent)) || (nodeLinkParent && !nodeLinkParent.is(linkParent))
    })
  }
  return false
}

/**
 * Gets the URL from the link node in the selection, if any.
 * Original: $$m3
 */
export function getSelectionLinkUrl(selection: any): string {
  let node: any = null
  let linkNode: any = null

  if ($isRangeSelection(selection)) {
    node = getRelevantSelectionNode(selection)
    linkNode = $findMatchingParent(node, $isLinkNode)
  }
  else if ($isNodeSelection(selection)) {
    const nodes = selection.getNodes()
    if (nodes.length > 0) {
      node = nodes[0]
      linkNode = node?.getParent()
    }
  }

  if ($isLinkNode(linkNode))
    return linkNode.getURL()
  if ($isLinkNode(node))
    return node.getURL()
  return ''
}

// Refactored exports with new names
export const Bu = getRelativePosition
export const Jf = normalizeUrl
export const OL = getRelevantSelectionNode
export const _Y = getSelectionLinkUrl
export const fF = getRelevantSelectionRange
export const oN = isSelectionWithinLink
