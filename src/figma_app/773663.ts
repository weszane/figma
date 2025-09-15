import { useLayoutEffect } from 'react'
import { editorUtilities } from '../905/22009'
import { ResourceTypes } from '../905/178090'
import { getFeatureFlags } from '../905/601108'
import { customHistory } from '../905/612521'
import { throwTypeError } from '../figma_app/465776'

/**
 * Types for editor and resource selection logic (from $$d4)
 */
export type EditorType = typeof editorUtilities.Editors[keyof typeof editorUtilities.Editors]
export type ResourceType
  = | typeof ResourceTypes.BrowseResourceTypes[keyof typeof ResourceTypes.BrowseResourceTypes]
    | typeof ResourceTypes.SearchResourceTypes[keyof typeof ResourceTypes.SearchResourceTypes]

/**
 * Result type for editor/resource selection (from $$d4)
 */
export interface EditorResourceSelection {
  editorType: EditorType
  resourceType: ResourceType
}

/**
 * Anchor options for resource selection (from $$p1)
 */
export interface AnchorOptions {
  anchorOn: 'editorType' | 'resourceType'
}

/**
 * Selects editor/resource type based on input parameters.
 * Original: $$d4
 */
export function selectEditorResource(
  editor: EditorType = editorUtilities.Editors.ALL,
  resource?: ResourceType,
  prototypeFlag?: boolean,
): EditorResourceSelection {
  switch (editor) {
    case editorUtilities.Editors.ALL:
    case editorUtilities.Editors.FIGJAM:
      switch (resource) {
        case undefined:
          return {
            editorType: editor,
            resourceType: ResourceTypes.BrowseResourceTypes.MIXED,
          }
        case ResourceTypes.SearchResourceTypes.PROFILES:
          return {
            editorType: editorUtilities.Editors.ALL,
            resourceType: resource,
          }
        default:
          return {
            editorType: editor,
            resourceType: resource,
          }
      }
    case editorUtilities.Editors.FIGMA:
      switch (resource) {
        case ResourceTypes.BrowseResourceTypes.FILES:
          if (prototypeFlag) {
            return {
              editorType: editorUtilities.Editors.ALL,
              resourceType: resource,
            }
          }
          return {
            editorType: editor,
            resourceType: resource,
          }
        case undefined:
          return {
            editorType: editor,
            resourceType: ResourceTypes.BrowseResourceTypes.MIXED,
          }
        case ResourceTypes.SearchResourceTypes.PROFILES:
          return {
            editorType: editorUtilities.Editors.ALL,
            resourceType: resource,
          }
        default:
          return {
            editorType: editor,
            resourceType: resource,
          }
      }
    case editorUtilities.Editors.SITES:
      switch (resource) {
        case ResourceTypes.BrowseResourceTypes.FILES:
          return {
            editorType: editor,
            resourceType: resource,
          }
        case ResourceTypes.BrowseResourceTypes.MIXED:
        case undefined:
          return {
            editorType: editor,
            resourceType: ResourceTypes.BrowseResourceTypes.FILES,
          }
        default:
          return {
            editorType: editorUtilities.Editors.ALL,
            resourceType: resource,
          }
      }
    case editorUtilities.Editors.FIGMAKE:
      return {
        editorType: editor,
        resourceType: resource ?? ResourceTypes.BrowseResourceTypes.MIXED,
      }
    case editorUtilities.Editors.COOPER:
      switch (resource) {
        case ResourceTypes.BrowseResourceTypes.FILES:
          return {
            editorType: editor,
            resourceType: resource,
          }
        case ResourceTypes.BrowseResourceTypes.PLUGINS:
          if (getFeatureFlags().buzz_plugins) {
            return {
              editorType: editor,
              resourceType: resource,
            }
          }
          return {
            editorType: editorUtilities.Editors.ALL,
            resourceType: resource,
          }
        case ResourceTypes.BrowseResourceTypes.MIXED:
        case undefined:
          return {
            editorType: editor,
            resourceType: ResourceTypes.BrowseResourceTypes.FILES,
          }
        default:
          return {
            editorType: editorUtilities.Editors.ALL,
            resourceType: resource,
          }
      }
    case editorUtilities.Editors.PROTOTYPE:
      if (prototypeFlag) {
        return {
          editorType: editorUtilities.Editors.ALL,
          resourceType: resource ?? ResourceTypes.BrowseResourceTypes.MIXED,
        }
      }
      switch (resource) {
        case ResourceTypes.BrowseResourceTypes.FILES:
          return {
            editorType: editor,
            resourceType: resource,
          }
        case ResourceTypes.BrowseResourceTypes.MIXED:
        case undefined:
          return {
            editorType: editor,
            resourceType: ResourceTypes.BrowseResourceTypes.FILES,
          }
        default:
          return {
            editorType: editorUtilities.Editors.ALL,
            resourceType: resource,
          }
      }
    case editorUtilities.Editors.DEV_MODE:
      switch (resource) {
        case ResourceTypes.BrowseResourceTypes.PLUGINS:
          return {
            editorType: editor,
            resourceType: resource,
          }
        case ResourceTypes.BrowseResourceTypes.MIXED:
        case undefined:
          return {
            editorType: editor,
            resourceType: ResourceTypes.BrowseResourceTypes.PLUGINS,
          }
        default:
          return {
            editorType: editorUtilities.Editors.ALL,
            resourceType: resource,
          }
      }
    case editorUtilities.Editors.SLIDES:
      switch (resource) {
        case ResourceTypes.BrowseResourceTypes.FILES:
        case ResourceTypes.BrowseResourceTypes.PLUGINS:
          return {
            editorType: editor,
            resourceType: resource,
          }
        case ResourceTypes.BrowseResourceTypes.MIXED:
        case undefined:
          return {
            editorType: editor,
            resourceType: ResourceTypes.BrowseResourceTypes.FILES,
          }
        default:
          return {
            editorType: editorUtilities.Editors.ALL,
            resourceType: resource,
          }
      }
    default:
      throwTypeError(editor)
  }
}

/**
 * Returns default editor/resource selection.
 * Original: $$c3
 */
export function getDefaultEditorResource(): EditorResourceSelection {
  return selectEditorResource()
}

/**
 * Returns editor type for a given resource type.
 * Original: $$u0
 */
export function getEditorTypeForResource(resource: ResourceType): EditorType {
  return selectEditorResource(undefined, resource).editorType
}

/**
 * Anchors editor/resource selection based on anchor options.
 * Original: $$p1
 */
export function anchorEditorResource(
  editor: EditorType,
  resource: ResourceType,
  anchorOptions: AnchorOptions,
): EditorResourceSelection {
  const { editorType, resourceType } = selectEditorResource(editor, resource)
  if (editor === editorType && resource === resourceType) {
    return { editorType: editor, resourceType: resource }
  }
  switch (anchorOptions.anchorOn) {
    case 'editorType':
      if (editor !== editorType) {
        return {
          editorType: editor,
          resourceType: selectEditorResource(editor, undefined).resourceType,
        }
      }
      return { editorType: editor, resourceType }
    case 'resourceType':
      if (resource !== resourceType) {
        return {
          editorType: getEditorTypeForResource(resource),
          resourceType: resource,
        }
      }
      return { editorType, resourceType: resource }
    default:
      throwTypeError(anchorOptions.anchorOn)
  }
}

/**
 * Syncs editor/resource selection with history if changed.
 * Original: $$_2
 */
export function syncEditorResourceWithHistory(
  location: {
    search: { editor_type?: EditorType, resource_type?: ResourceType }
    copyWith: (params: object, search: object) => { href: string }
  },
  prototypeFlag?: boolean,
): void {
  const { editor_type, resource_type } = location.search
  useLayoutEffect(() => {
    if (!editor_type || !resource_type)
      return
    const { editorType, resourceType } = selectEditorResource(editor_type, resource_type, prototypeFlag)
    if (editorType !== editor_type || resourceType !== resource_type) {
      customHistory.replace(
        location.copyWith({}, { editor_type: editorType, resource_type: resourceType }).href,
      )
    }
  }, [location, editor_type, resource_type, prototypeFlag])
}

// Exported names refactored for clarity and traceability
export const MF = getEditorTypeForResource // Original: MF
export const OU = anchorEditorResource // Original: OU
export const _4 = syncEditorResourceWithHistory // Original: _4
export const pJ = getDefaultEditorResource // Original: pJ
export const zs = selectEditorResource // Original: zs
