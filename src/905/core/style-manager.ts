import { kiwiParserCodec as _$$w2 } from '../294864'
import { In } from '../309735'
import { getSceneGraphInstance } from '../830071'
import { eX as _$$eX } from '../../figma_app/276332'
import { l0, lM, Md, VB } from '../../figma_app/463500'
import { w8 } from '../../figma_app/646357'
import { glU } from '../../figma_app/763686'

/**
 * Style Manager Test Environment - provides test environment for style management operations
 * Manages style creation, modification, and testing within isolated plugin context
 */
export class StyleManager {
  sceneGraph: any

  constructor(sceneGraph) {
    this.sceneGraph = sceneGraph ?? getSceneGraphInstance()
  }

  fullscreenStyleDataToLocalStyle(e) {
    return w8(null, null, e, '', '')
  }

  /**
   * Moves a style to a new position within the style hierarchy.
   * Original: moveStyle
   * @param styleNode - The style node to move
   * @param referenceNode - The reference node to move relative to (or null)
   * @param styleType - The style type (string or enum)
   * @returns An empty string on success, or an error message
   */
  moveStyle(styleNode, referenceNode, styleType) {
    // Resolve style type enum value
    const styleTypeEnum = _$$w2.StyleType[styleNode.styleType]
    if (typeof styleTypeEnum !== 'number')
      return 'Unable to parse style type of target node'

    // Get all local styles of the given type and map to local style objects
    const allLocalStyles = glU.getAllLocalStyles(this.sceneGraph.scene, styleTypeEnum).map(this.fullscreenStyleDataToLocalStyle)
    const mappedStyles = lM(allLocalStyles, styleType)
    const styleHierarchy = l0(mappedStyles)
    const folderName = In(styleNode.name)

    // Initialize variables for tracking nodes and folders
    let targetStyle: any = null
    let referenceStyle: any = null
    let targetFolder: any = null
    let referenceFolder: any = null
    let firstStyleInTargetFolder: any = null
    let moveAfterStyle: any = null

    // Find target style, reference style, and their folders in the hierarchy
    for (let i = 0; i < styleHierarchy.length; i++) {
      const node = styleHierarchy[i]
      if (node.type === 'STYLE_FOLDER') {
        moveAfterStyle = node
      }
      else {
        if (node.node_id === styleNode.guid) {
          targetStyle = node
          targetFolder = moveAfterStyle
        }
        if (referenceNode !== null && node.node_id === referenceNode.guid) {
          referenceStyle = node
          referenceFolder = moveAfterStyle
        }
      }
    }

    // Get the first style in the target folder, if available
    if (targetFolder && targetFolder.styles && targetFolder.styles[0])
      firstStyleInTargetFolder = targetFolder.styles[0]
    if (!targetStyle)
      return `No local target node found with style key: ${styleNode.styleKeyForPublish}`

    // Determine move destination and reference
    let destinationFolder = null
    let destinationReference = null
    if (referenceNode === null) {
      destinationFolder = targetFolder
      destinationReference = firstStyleInTargetFolder
    }
    else {
      if (folderName !== In(referenceNode.name))
        return 'Target and reference node must live in the same folder.'
      if (!referenceStyle)
        return `No local reference node found with style key: ${styleNode.styleKeyForPublish}`
      destinationFolder = referenceStyle
      destinationReference = referenceFolder
    }

    // Move the style if possible
    if (Md(destinationFolder, targetStyle, destinationReference, folderName))
      VB([targetStyle], destinationFolder, destinationReference, folderName, styleHierarchy, allLocalStyles, false)
    return ''
  }

  /**
   * Retrieves all local styles of a given type.
   * Original: getAllLocalStyles
   * @param styleType - The style type (string or enum)
   * @returns Array of StyleKey objects
   */
  getAllLocalStyles(styleType) {
    const styleTypeEnum = _$$w2.StyleType[styleType]
    if (typeof styleTypeEnum !== 'number')
      return []
    const allLocalStyles = glU.getAllLocalStyles(this.sceneGraph.scene, styleTypeEnum).map(this.fullscreenStyleDataToLocalStyle)
    const mappedStyles = lM(allLocalStyles, styleType)
    const styleHierarchy = l0(mappedStyles)
    const styleKeys: any[] = []
    for (const node of styleHierarchy) {
      if (node.type !== 'STYLE_FOLDER') {
        const key = this.localStyleToStyleKey(node)
        styleKeys.push(key)
      }
    }
    return styleKeys
  }

  /**
   * Moves a style folder to a new position within the style hierarchy.
   * Original: moveFolder
   * @param targetFolderName - The name of the folder to move
   * @param referenceFolderName - The name of the reference folder to move relative to (or null)
   * @param styleType - The style type (string or enum)
   * @returns An empty string on success, or an error message
   */
  moveFolder(targetFolderName, referenceFolderName, styleType) {
    let targetFolder: any = null
    let referenceFolder: any = null
    let parentFolder: any = null
    const styleTypeEnum = _$$w2.StyleType[styleType]
    if (typeof styleTypeEnum !== 'number')
      return `Unable to parse style type: ${styleType}`

    // Get all local styles and build the folder hierarchy
    const allLocalStyles = glU.getAllLocalStyles(this.sceneGraph.scene, styleTypeEnum).map(this.fullscreenStyleDataToLocalStyle)
    const mappedStyles = lM(allLocalStyles, styleType)
    const styleHierarchy = l0(mappedStyles)

    // Recursive function to find target and reference folders
    const findFolders = (folder) => {
      if (folder.subfolders) {
        folder.subfolders.forEach((subfolder) => {
          if (subfolder.name === targetFolderName) {
            targetFolder = subfolder
            parentFolder = folder
          }
          if (subfolder.name === referenceFolderName) {
            referenceFolder = subfolder
          }
        })
        folder.subfolders.forEach(findFolders)
      }
    }
    findFolders(mappedStyles)
    if (!targetFolder || !parentFolder)
      return `The target folder named "${targetFolderName}" could not be found`
    if (referenceFolderName !== null && !referenceFolder)
      return `The reference folder named "${referenceFolderName}" could not be found`
    if (referenceFolder && referenceFolder.name && targetFolder.name && In(referenceFolder.name) !== In(targetFolder.name)) {
      return 'The target folder and the reference folder must live in the same parent folder'
    }

    // Find the reference node for moving
    const parentHierarchy = l0(parentFolder)
    let afterFolder = null
    let lastStyleInParent = parentFolder.styles && parentFolder.styles.length ? parentFolder.styles[parentFolder.styles.length - 1] : parentFolder
    let firstSubfolder = parentFolder.subfolders && parentFolder.subfolders[0] ? parentFolder.subfolders[0] : null
    let previousFolder = null
    for (const node of parentHierarchy) {
      if (node.type === 'STYLE_FOLDER') {
        if (previousFolder === referenceFolder) {
          afterFolder = node
          break
        }
        previousFolder = node
      }
    }
    const referenceStyle = referenceFolder ? referenceFolder.styles && referenceFolder.styles[referenceFolder.styles.length - 1] : lastStyleInParent
    const afterReference = referenceFolder ? afterFolder : firstSubfolder

    // Move the folder if possible
    if (Md(referenceStyle, targetFolder, afterReference, parentFolder.name))
      VB([targetFolder], referenceStyle, afterReference, parentFolder.name, styleHierarchy, allLocalStyles, true)
    return ''
  }

  softDeleteStyle(e) {
    if (e && e.removeSelfAndChildren) {
      e.removeSelfAndChildren()
    }
  }

  localStyleToStyleKey(localStyle) {
    return {
      key: localStyle.key,
      version: 'INVALID',
    }
  }

  get(styleId) {
    let t = _$$eX(styleId)
    if (!t)
      return null
    let i = this.sceneGraph.getStyleNodeByRef ? this.sceneGraph.getStyleNodeByRef(t) : null
    return i && !i.isSoftDeleted ? i : null
  }

  createStyle(styleData) {
    return this.sceneGraph.createStyle(styleData).idForPluginApi
  }
}
