import { getBasename, getDirname, splitPath } from '../905/309735'
import { trackEventAnalytics } from '../905/449184'
import { compareWithGeneratedKey } from '../905/709171'
import { debug } from '../figma_app/465776'
import { PrimaryWorkflowEnum } from '../figma_app/633080'
import { Fullscreen } from '../figma_app/763686'

/**
 * Represents a style folder structure.
 */
export interface StyleFolder {
  name: string
  type: 'STYLE_FOLDER'
  level: number
  styles: any[]
  subfolders: StyleFolder[]
  styleTypeSection: any
}

/**
 * Builds a nested style folder structure from a flat list of styles.
 * @param styles - Array of style objects.
 * @param styleTypeSection - The style type section.
 * @returns Root style folder.
 * (Original: $$d13)
 */
export function setupStyleFolderTree(styles: any[], styleTypeSection: any): StyleFolder {
  const root: StyleFolder = {
    name: '',
    type: 'STYLE_FOLDER',
    level: 0,
    styles: [],
    subfolders: [],
    styleTypeSection,
  }
  styles.forEach((style) => {
    let current = root
    const pathParts = splitPath(style.name)
    pathParts.pop()
    pathParts.forEach((part) => {
      const folderName = current.name ? `${current.name}/${part}` : part
      let folder = current.subfolders.find(f => f.name === folderName)
      if (!folder) {
        folder = {
          name: folderName,
          type: 'STYLE_FOLDER',
          level: current.level + 1,
          styles: [],
          subfolders: [],
          styleTypeSection,
        }
        current.subfolders.push(folder)
      }
      current = folder
    })
    current.styles.push(style)
  })
  return root
}

/**
 * Returns all folder names containing styles.
 * @param styles - Array of style objects.
 * @returns Array of folder names.
 * (Original: $$c17)
 */
export function getStyleFoldersWithStyles(styles: any[]): string[] {
  if (!styles.length)
    return []
  const root = setupStyleFolderTree(styles, styles[0].style_type)
  const result: string[] = []
  const traverse = (folder: StyleFolder) => {
    if (folder.styles.length > 0)
      result.push(folder.name)
    folder.subfolders.forEach(traverse)
  }
  traverse(root)
  return result
}

/**
 * Flattens a style folder tree into a list.
 * @param folder - Style folder.
 * @returns Array of styles and folders.
 * (Original: $$u12)
 */
export function flattenStyleFolderTree(folder: StyleFolder): any[] {
  const folders = [...folder.subfolders].reverse()
  const result = [...folder.styles]
  while (folders.length > 0) {
    const f = folders.pop()
    if (f) {
      result.push(f, ...f.styles)
      folders.push(...[...f.subfolders].reverse())
    }
  }
  return result
}

/**
 * Gets the identifier for a style or folder.
 * @param item - Style or folder.
 * @returns Identifier string.
 * (Original: $$p16)
 */
export function getStyleOrFolderId(item: any): string {
  return item.type === 'STYLE_FOLDER' ? item.name : item.node_id
}

/**
 * Normalizes a style path.
 * @param path - Path string.
 * @returns Normalized path.
 * (Original: $$_3)
 */
export function normalizeStylePath(path: string): string {
  return path.split('/').filter(Boolean).map(e => e.trim()).join('/')
}

/**
 * Returns indices of all items under a folder in a flat list.
 * @param folderIndex - Index of folder.
 * @param flatList - Flat list of styles/folders.
 * @returns Array of indices.
 * (Original: $$h14)
 */
export function getFolderContentsIndices(folderIndex: number, flatList: any[]): number[] {
  const folder = flatList[folderIndex]
  if (folder.type !== 'STYLE_FOLDER')
    return []
  const indices: number[] = []
  for (const [i, item] of flatList.slice(folderIndex + 1).entries()) {
    if (item.type === 'STYLE_FOLDER' && item.level <= folder.level)
      break
    indices.push(folderIndex + 1 + i)
  }
  return indices
}

/**
 * Gets the parent folder name for a style or folder.
 * @param item - Style or folder.
 * @returns Parent folder name.
 * (Original: m)
 */
function getParentFolderName(item: any): string {
  return item.type === 'STYLE_FOLDER' ? item.name : getDirname(item.name)
}

/**
 * Returns all styles from a folder tree.
 * @param folder - Style folder.
 * @returns Array of styles.
 * (Original: $$g8)
 */
export function getAllStylesFromFolder(folder: StyleFolder): any[] {
  return flattenStyleFolderTree(folder).filter(e => e.type === PrimaryWorkflowEnum.STYLE)
}

/**
 * Returns all folders from a folder tree.
 * @param folder - Style folder.
 * @returns Array of folders.
 * (Original: $$f0)
 */
export function getAllFoldersFromFolder(folder: StyleFolder): StyleFolder[] {
  return flattenStyleFolderTree(folder).filter(e => e.type === 'STYLE_FOLDER')
}

/**
 * Flattens a list of folders/styles into a list of styles.
 * @param items - Array of folders/styles.
 * @returns Array of styles.
 * (Original: $$E5)
 */
export function flattenToStyles(items: any[]): any[] {
  const result: any[] = []
  items.forEach((item) => {
    if (item.type === 'STYLE_FOLDER') {
      result.push(...getAllStylesFromFolder(item))
    }
    else {
      result.push(item)
    }
  })
  return result
}

/**
 * Gets style/folder objects from indices.
 * @param selection - Selection object.
 * @param flatList - Flat list of styles/folders.
 * @returns Array of selected items.
 * (Original: $$y4)
 */
export function getSelectedItems(selection: any, flatList: any[]): any[] {
  const indices = getSelectionIndices(selection, flatList)
  const result: any[] = []
  indices.forEach((idx) => {
    const item = flatList[idx]
    if (item)
      result.push(item)
  })
  return result
}

/**
 * Gets indices for selected styles/folders.
 * @param selection - Selection object.
 * @param flatList - Flat list of styles/folders.
 * @returns Array of indices.
 * (Original: $$b10)
 */
export function getSelectionIndices(selection: any, flatList: any[]): number[] {
  const indices: number[] = []
  const styleIds = flatList.map(e => e.type === PrimaryWorkflowEnum.STYLE ? e.node_id : null)
  const folderNames = flatList.map(e => e.type === 'STYLE_FOLDER' ? e.name : null)
  selection.styleIds.forEach((id: string) => {
    const idx = styleIds.indexOf(id)
    if (idx !== -1)
      indices.push(idx)
  })
  selection.folderNames.forEach((name: string) => {
    const idx = folderNames.indexOf(name)
    if (idx !== -1)
      indices.push(idx)
  })
  indices.sort((a, b) => a - b)
  return indices
}

/**
 * Gets the depth/level of a style or folder.
 * @param item - Style or folder.
 * @returns Depth/level.
 * (Original: $$T15)
 */
export function getStyleOrFolderLevel(item: any): number {
  return item.type === PrimaryWorkflowEnum.STYLE ? splitPath(item.name).length : item.level
}

/**
 * Deletes a style node if it matches the generated key.
 * @param style - Style object.
 * @param key - Key to compare.
 * (Original: $$I2)
 */
export function deleteStyleIfKeyMatches(style: any, key: any): void {
  if (compareWithGeneratedKey(style, key)) {
    Fullscreen.deleteNode(style.node_id)
    trackEventAnalytics('Style Deleted', {
      styleType: style.style_type,
      from: 'styleListContextMenu',
    })
  }
}

/**
 * Determines if a style/folder can be dropped at a target.
 * @param dragged - Dragged item.
 * @param target - Target item.
 * @param prev - Previous item.
 * @param folderName - Folder name.
 * @returns Boolean.
 * (Original: $$S1)
 */
export function canDropStyleOrFolder(
  dragged: any,
  target: any,
  prev: any,
  folderName?: string,
): boolean {
  if ((!dragged && !prev) || !target)
    return false
  const isFolderDrop
    = (!folderName && folderName !== '')
      || (target.type === 'STYLE_FOLDER'
        && prev === target
        && dragged?.type === PrimaryWorkflowEnum.STYLE
        && getStyleOrFolderLevel(dragged) > getStyleOrFolderLevel(prev)
        && folderName !== getDirname(target.name))
  return !(
    dragged === target
    || (prev === target
      && (target.type === PrimaryWorkflowEnum.STYLE || !isFolderDrop))
    || (target.type === 'STYLE_FOLDER'
      && ((dragged?.type === PrimaryWorkflowEnum.STYLE
        && prev?.type === PrimaryWorkflowEnum.STYLE)
      || (dragged?.type === 'STYLE_FOLDER'
        && prev?.type === PrimaryWorkflowEnum.STYLE)
      || (dragged
        && (`${getParentFolderName(dragged)}/`).startsWith(`${target.name}/`))
      || (prev
        && (`${getParentFolderName(prev)}/`).startsWith(`${target.name}/`)
        && !isFolderDrop)))
  )
}

/**
 * Handles drag-and-drop reordering and renaming of styles/folders.
 * @param items - Items to move.
 * @param target - Target item.
 * @param prev - Previous item.
 * @param folderName - Folder name.
 * @param selection - Selection object.
 * @param flatList - Flat list of styles/folders.
 * @param isFolder - Is folder.
 * @returns Map of updated names.
 * (Original: $$v6)
 */
export function handleStyleFolderReorder(
  items: any[],
  target: any,
  prev: any,
  folderName: string,
  selection: any,
  flatList: any[],
  isFolder: boolean,
): Map<string, string> | undefined {
  items.forEach((item) => {
    // Helper for checking order
    const isOrderChanged = (list: any[], compareList: any[]) => {
      const styleIds = list.filter(e => e.type === PrimaryWorkflowEnum.STYLE).map(e => e.node_id)
      const filtered = []
      compareList.forEach((e) => {
        if (styleIds.includes(e.node_id))
          filtered.push(e)
      })
      const first = list[0]
      const ordered = flattenStyleFolderTree(
        setupStyleFolderTree(filtered, first.type === PrimaryWorkflowEnum.STYLE ? first.style_type : first.styleTypeSection),
      ).filter(e => e.type === PrimaryWorkflowEnum.STYLE)
      for (let i = 0; i < styleIds.length; i++) {
        if (styleIds[i] !== ordered[i].node_id)
          return true
      }
      return false
    }
    // Helper for filtering out selected items
    const filterOutSelected = (selected: any[], all: any[]) => {
      const folderSet = new Set()
      const styleSet = new Set()
      for (const item of selected) {
        (item.type === PrimaryWorkflowEnum.STYLE
          ? [item]
          : (function recurse(folder: any) {
              const result: any[] = []
              folder.styles.forEach((s: any) => result.push(s))
              folder.subfolders.forEach((sf: any) => {
                result.push(sf)
                result.push(...recurse(sf))
              })
              return result
            })(item).concat([item])
        ).forEach(e =>
          e.type === PrimaryWorkflowEnum.STYLE
            ? styleSet.add(e.node_id)
            : folderSet.add(e.name),
        )
      }
      return all.filter(e =>
        e.type === 'STYLE_FOLDER'
          ? !folderSet.has(e.name)
          : !styleSet.has(e.node_id),
      )
    }
    selection = filterOutSelected([item], selection)
    if (isOrderChanged(selection, flatList)) {
      selection = adjustStyleOrder(item, flatList, selection)
    }
  })
  if (!flatList)
    return
  const insertIndices = new Set(
    items.map(item =>
      item.type === 'STYLE_FOLDER' || isFolder
        ? getInsertIndexForFolder(target, prev, flatList, selection)
        : getInsertIndexForStyle(target, prev, flatList, selection),
    ),
  )
  if (insertIndices.size > 1 || insertIndices.has(null))
    return
  const insertIdx = insertIndices.values().next().value
  const before = flatList[insertIdx]
  const after = flatList[insertIdx + 1]
  const renameMap = new Map<string, string>()
  let lastInserted = before
  for (const item of items) {
    // Insert styles between nodes
    const insertBetween = (node: any) => {
      if (node.type === PrimaryWorkflowEnum.STYLE) {
        Fullscreen.insertStyleBetween(node.node_id, lastInserted?.node_id || '', after?.node_id || '')
        lastInserted = node
      }
      else {
        node.styles.forEach(insertBetween)
        node.subfolders.forEach(insertBetween)
      }
    }
    insertBetween(item)
    const folderParts = folderName === '' ? [] : folderName.split('/')
    const newPath = [...folderParts, getBasename(item.name)]
    if (newPath.join('/') !== item.name) {
      // Rename recursively
      const renameRecursively = (node: any, pathParts: string[]) => {
        if (node.type === PrimaryWorkflowEnum.STYLE) {
          const newName = [...pathParts, getBasename(node.name)].join('/')
          renameMap.set(node.node_id, newName)
          Fullscreen.renameNode(node.node_id, newName)
        }
        else {
          renameMap.set(node.name, pathParts.join('/'))
          node.styles.forEach((s: any) => renameRecursively(s, pathParts))
          node.subfolders.forEach((sf: any) => {
            const nextParts = [...pathParts, getBasename(sf.name)]
            renameRecursively(sf, nextParts)
          })
        }
      }
      renameRecursively(item, item.type === 'STYLE_FOLDER' ? newPath : folderParts)
    }
    else {
      renameMap.set(item.type === 'STYLE_FOLDER' ? item.name : item.node_id, item.name)
    }
  }
  return renameMap
}

/**
 * Helper for adjusting style order after drag-and-drop.
 * @param item - Item being moved.
 * @param flatList - Flat list of styles/folders.
 * @param selection - Selection list.
 * @returns Updated selection list.
 * (Original: A)
 */
function adjustStyleOrder(item: any, flatList: any[], selection: any[]): any[] {
  let pathParts = splitPath(item.name)
  if (item.type === PrimaryWorkflowEnum.STYLE)
    pathParts.pop()
  const styles = flatList.filter(e => e.type === PrimaryWorkflowEnum.STYLE)
  let filtered: any[] = []
  while (pathParts.length) {
    const folderPath = pathParts.join('/')
    filtered = styles.filter(s => getDirname(s.name).startsWith(folderPath))
    if (filtered.length === 0)
      pathParts.pop()
    else break
  }
  if (filtered.length) {
    let minStyle = filtered[0]
    filtered.forEach((s) => {
      if (
        s.sort_position != null
        && minStyle.sort_position != null
        && s.sort_position < minStyle.sort_position
      ) {
        minStyle = s
      }
    })
    const target = item.type === PrimaryWorkflowEnum.STYLE ? item : getAllStylesFromFolder(item)[0]
    const idx = selection.indexOf(target)
    const before = selection[idx - 1]
    const after = selection[idx + 1]
    Fullscreen.insertStyleBetween(minStyle.node_id, before?.node_id || '', after?.node_id || '')
    const updated = [...selection]
    updated.splice(updated.indexOf(minStyle), 1)
    updated.splice(updated.indexOf(before) + 1, 0, minStyle)
    return updated
  }
  return selection
}

/**
 * Gets insert index for folder drop.
 * @param target - Target item.
 * @param prev - Previous item.
 * @param flatList - Flat list.
 * @param selection - Selection list.
 * @returns Insert index.
 * (Original: function inside $$v6)
 */
function getInsertIndexForFolder(target: any, prev: any, flatList: any[], selection: any[]): number | null {
  if (!target) {
    return selection.some(e => e.type === PrimaryWorkflowEnum.STYLE && getDirname(e.name) === '') ? null : -1
  }
  if (!prev)
    return flatList.length - 1
  const styleIds = flatList.map(e => e.node_id)
  if (
    target.type === PrimaryWorkflowEnum.STYLE
    && prev.type === PrimaryWorkflowEnum.STYLE
  ) {
    return null
  }
  if (
    target.type === PrimaryWorkflowEnum.STYLE
    && prev.type === 'STYLE_FOLDER'
    && getStyleOrFolderLevel(target) === getStyleOrFolderLevel(prev)
  ) {
    const idx = styleIds.indexOf(target.node_id)
    const firstStyle = (() => {
      const styles = getAllStylesFromFolder(prev)
      const styleSet = new Set(selection.filter(e => e.type === PrimaryWorkflowEnum.STYLE).map(e => e.node_id))
      let minStyle = styles[0]
      styles.forEach((s) => {
        if (
          s.sort_position
          && minStyle.sort_position
          && s.sort_position < minStyle.sort_position
          && styleSet.has(s.node_id)
        ) {
          minStyle = s
        }
      })
      return minStyle
    })()
    const firstIdx = styleIds.indexOf(firstStyle.node_id)
    return idx < firstIdx ? idx : firstIdx - 1
  }
  {
    const prevIdx = selection.indexOf(prev)
    if (prevIdx !== -1) {
      const nextStyle = selection.slice(prevIdx).find(e => e.type === PrimaryWorkflowEnum.STYLE)
      if (!nextStyle)
        return flatList.length - 1
      const nextIdx = styleIds.indexOf(nextStyle.node_id)
      debug(nextIdx !== -1, 'style to insert before does not exist in the stored list')
      return nextIdx - 1
    }
    {
      const targetIdx = selection.indexOf(target)
      const prevStyle = selection.slice(targetIdx + 1).reverse().find(e => e.type === PrimaryWorkflowEnum.STYLE)
      if (!prevStyle)
        return flatList.length - 1
      const prevIdx = styleIds.indexOf(prevStyle.node_id)
      debug(prevIdx !== -1, 'style to insert after does not exist in the stored list')
      return prevIdx
    }
  }
}

/**
 * Gets insert index for style drop.
 * @param target - Target item.
 * @param prev - Previous item.
 * @param flatList - Flat list.
 * @param selection - Selection list.
 * @returns Insert index.
 * (Original: function inside $$v6)
 */
function getInsertIndexForStyle(target: any, prev: any, flatList: any[], selection: any[]): number {
  if (!target)
    return -1
  if (!prev)
    return flatList.length - 1
  const styleIds = flatList.map(e => e.node_id)
  if (target.type === PrimaryWorkflowEnum.STYLE && prev.type === 'STYLE_FOLDER') {
    return styleIds.indexOf(target.node_id)
  }
  {
    const prevIdx = selection.indexOf(prev)
    const nextStyle = selection.slice(prevIdx).find(e => e.type === PrimaryWorkflowEnum.STYLE)
    if (!nextStyle)
      return flatList.length - 1
    const nextIdx = styleIds.indexOf(nextStyle.node_id)
    debug(nextIdx !== -1, 'style to insert before does not exist in the stored list')
    return nextIdx - 1
  }
}

/**
 * Calculates drag-and-drop divider styles and nesting folder.
 * @param params - Drag-and-drop parameters.
 * @returns Divider styles and folder name.
 * (Original: $$x9)
 */
export function getDragDropDividerStyles({
  prevItem,
  nextItem,
  localStyleSelection,
  styleList,
  collapsedFolders,
  horizontalDragAmount,
  temporarilyExpandedFolders,
}: {
  prevItem: any
  nextItem: any
  localStyleSelection: any
  styleList: any[]
  collapsedFolders: Set<string>
  horizontalDragAmount: number
  temporarilyExpandedFolders: string[]
}): { folderNameToNestUnder: string | null, dividerStyles: any } | null {
  if (!localStyleSelection)
    return null
  const selectedItems = getSelectedItems(localStyleSelection, styleList)
  const firstSelected = selectedItems[0]
  if (
    prevItem?.type === 'STYLE_FOLDER'
    && collapsedFolders.has(prevItem.name)
    && !temporarilyExpandedFolders.includes(prevItem.name)
  ) {
    return {
      folderNameToNestUnder: prevItem.name,
      dividerStyles: { display: 'none' },
    }
  }
  if (prevItem?.type === PrimaryWorkflowEnum.STYLE) {
    const pathParts = getDirname(prevItem.name).split('/')
    for (let i = 0; i < pathParts.length; i++) {
      const folderPath = pathParts.slice(0, i + 1).join('/')
      if (collapsedFolders.has(folderPath) && !temporarilyExpandedFolders.includes(folderPath)) {
        if (firstSelected.type !== 'STYLE_FOLDER') {
          return {
            folderNameToNestUnder: folderPath,
            dividerStyles: { display: 'none' },
          }
        }
        return {
          folderNameToNestUnder: getDirname(folderPath),
          dividerStyles: {
            marginLeft: 24 * Math.min(splitPath(folderPath).length, 8) - 8,
          },
        }
      }
    }
  }
  let level = 0
  let folderName: string | null = null
  const prevLevel = prevItem ? getStyleOrFolderLevel(prevItem) : 0
  const nextLevel = nextItem ? getStyleOrFolderLevel(nextItem) : 0
  debug(prevItem != null, 'Dragging after an item that doesn\'t exist')
  if (prevLevel <= nextLevel) {
    level = nextLevel
    folderName = prevItem
      ? prevItem.type === PrimaryWorkflowEnum.STYLE
        ? getDirname(prevItem.name)
        : prevItem.name
      : ''
  }
  else if (

    firstSelected.type === PrimaryWorkflowEnum.STYLE || horizontalDragAmount >= 0.5
  ) {
    level = prevLevel
    folderName = getDirname(prevItem.name)
  }
  else {
    let t = Math.floor((horizontalDragAmount / 0.5) * getStyleOrFolderLevel(prevItem))
    t = Math.max(nextLevel - 1, t)
    folderName = splitPath(getDirname(prevItem.name)).slice(0, t).join('/')
    level = t + 1
  }
  const dividerStyles = {
    marginLeft: 24 * Math.min(level, 8) - 8,
  }
  return prevItem && selectedItems.includes(prevItem) || !canDropStyleOrFolder(prevItem, firstSelected, nextItem)
    ? {
        folderNameToNestUnder: null,
        dividerStyles,
      }
    : {
        folderNameToNestUnder: folderName,
        dividerStyles,
      }
}

/**
 * Gets previous and next items for a selection.
 * @param selection - Array of selected items.
 * @param flatList - Flat list of styles/folders.
 * @returns Previous and next items.
 * (Original: $$N11)
 */
export function getPrevNextItems(selection: any[], flatList: any[]): { prevItem: any, nextItem: any } {
  const first = selection[0]
  const idx = first ? flatList.indexOf(first) : -1
  let prevIdx = idx
  let nextIdx = idx + 1
  if (
    first?.type === PrimaryWorkflowEnum.STYLE
    && flatList[nextIdx]
    && flatList[nextIdx]?.type === PrimaryWorkflowEnum.STYLE
  ) {
    const level = getStyleOrFolderLevel(first)
    for (let i = idx + 1; i < flatList.length; i++) {
      const item = flatList[i]
      if (
        item.type === 'STYLE_FOLDER' && item.level === level
        || getStyleOrFolderLevel(item) < level
      ) {
        prevIdx = i - 1
        nextIdx = i
        break
      }
      if (i === flatList.length - 1) {
        prevIdx = i
        nextIdx = i + 1
      }
    }
  }
  return {
    prevItem: flatList[prevIdx],
    nextItem: flatList[nextIdx],
  }
}

/**
 * Recursively deletes styles in a folder.
 * @param folder - Style folder.
 * @param key - Key to compare.
 * (Original: a2)
 */
export function deleteStylesInFolder(folder: StyleFolder, key: any): void {
  folder.styles.forEach((style) => {
    deleteStyleIfKeyMatches(style, key)
  })
  folder.subfolders.forEach((subfolder) => {
    deleteStylesInFolder(subfolder, key)
  })
}

// Exported variable names as per instructions
export const KU = getAllFoldersFromFolder
export const Md = canDropStyleOrFolder
export const Nr = deleteStyleIfKeyMatches
export const Pc = normalizeStylePath
export const QA = getSelectedItems
export const Ug = flattenToStyles
export const VB = handleStyleFolderReorder
export const dm = getAllStylesFromFolder
export const g5 = getDragDropDividerStyles
export const h$ = getSelectionIndices
export const j3 = getPrevNextItems
export const l0 = flattenStyleFolderTree
export const lM = setupStyleFolderTree
export const mx = getFolderContentsIndices
export const rM = getStyleOrFolderLevel
export const t_ = getStyleOrFolderId
export const wM = getStyleFoldersWithStyles
