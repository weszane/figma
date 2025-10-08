import { localStorageRef } from '../905/657224'
import { FaceToolType, FDocumentType, ITemplateType } from '../905/862883'
import { HubTypeEnum } from '../figma_app/45218'
import { FEditorType, isDesignOrIllustration } from '../figma_app/53721'
import { FPublisherType } from '../figma_app/191312'
import { getPluginVersion } from '../figma_app/300692'
import { throwTypeError } from '../figma_app/465776'
import { getEditorTypeOrNull } from '../figma_app/976749'

/**
 * Determines the document type based on the current editor type.
 * Original: $$u5
 */
export function getCurrentDocumentType(): FDocumentType | null {
  const editorType = getEditorTypeOrNull()
  if (editorType === FEditorType.Whiteboard)
    return FDocumentType.FigJam
  if (isDesignOrIllustration(editorType))
    return FDocumentType.Design
  if (editorType === FEditorType.DevHandoff)
    return FDocumentType.Handoff
  if (editorType === FEditorType.Slides)
    return FDocumentType.Slides
  if (editorType === FEditorType.Cooper)
    return FDocumentType.Cooper
  return null
}

// Storage keys for recent items
export const RECENT_WIDGETS_FIGJAM = 'recent-widgets-figjam' // $$p12
export const RECENT_PLUGINS_FIGJAM = 'recent-plugins-figjam' // $$_2
export const RECENT_WIDGETS_FIGMA_DESIGN = 'recent-widgets-figma-design' // $$h7
export const RECENT_PLUGINS_FIGMA_DESIGN = 'recent-plugins-figma-design' // $$m11
export const RECENT_PLUGINS_SLIDES = 'recent-plugins-slides' // $$g8
export const RECENT_FACE_STAMPS_FIGJAM = 'recent-face-stamps-figjam' // $$f3
export const RECENT_WHITEBOARD_TOOLS_FIGJAM = 'recent-whiteboard-tools-figjam' // $$E0

/**
 * Returns the localStorage key for recent items based on document and hub type.
 * Original: $$y1
 */
export function getRecentKey(docType: FDocumentType, hubType: HubTypeEnum | FaceToolType): string | null {
  if (docType === FDocumentType.FigJam) {
    switch (hubType) {
      case HubTypeEnum.PLUGIN:
        return RECENT_PLUGINS_FIGJAM
      case HubTypeEnum.WIDGET:
        return RECENT_WIDGETS_FIGJAM
      case HubTypeEnum.HUB_FILE:
        return 'recent-templates-figjam'
      case FaceToolType.FACE_STAMP:
        return RECENT_FACE_STAMPS_FIGJAM
      case FaceToolType.WHITEBOARD_TOOL:
        return RECENT_WHITEBOARD_TOOLS_FIGJAM
      default:
        return null
    }
  }
  if (docType === FDocumentType.Design) {
    switch (hubType) {
      case HubTypeEnum.PLUGIN:
        return RECENT_PLUGINS_FIGMA_DESIGN
      case HubTypeEnum.WIDGET:
        return RECENT_WIDGETS_FIGMA_DESIGN
      default:
        return null
    }
  }
  if (docType === FDocumentType.Handoff)
    return hubType === HubTypeEnum.PLUGIN ? 'recent-plugins-handoff' : null
  if (docType === FDocumentType.Slides) {
    switch (hubType) {
      case HubTypeEnum.HUB_FILE:
        return 'recent-templates-piper'
      case HubTypeEnum.PLUGIN:
        return RECENT_PLUGINS_SLIDES
      default:
        return null
    }
  }
  if (docType === FDocumentType.Cooper && hubType === HubTypeEnum.PLUGIN)
    return 'recent-plugins-cooper'
  return null
}

/**
 * Retrieves recent items from localStorage for the given document and hub type.
 * Original: $$b9
 */
export function getRecentItems(docType: FDocumentType, hubType: HubTypeEnum | FaceToolType): Array<{ type: ITemplateType, [key: string]: any }> {
  if (!localStorageRef)
    return []
  const key = getRecentKey(docType, hubType)
  const raw = key && localStorageRef.getItem(key)
  let items: any[] = []
  try {
    items = (raw && JSON.parse(raw)) || []
  }
  catch {
    // Ignore parse errors
  }
  return items.map(item => ({
    ...item,
    type: item.type || ITemplateType.CommunityResource,
  }))
}

/**
 * Converts plugin data to include publisher profiles.
 * Original: $$T10
 */
export function enrichPluginWithPublishers(plugin: any): any {
  const version = getPluginVersion(plugin)
  const publishers = plugin.community_publishers.accepted.map((publisher: any) => ({
    isPending: false,
    profile: {
      id: publisher.id,
      profileHandle: publisher.profile_handle,
      user: null,
      team: null,
      org: null,
      [publisher.entity_type]: {
        name: publisher.name,
      },
    },
    role: FPublisherType.CREATOR,
  }))
  version.community_publishers = publishers
  return version
}

/**
 * Returns the unique identifier for a template.
 * Original: $$I6
 */
export function getTemplateId(template: { type: ITemplateType, id?: string, key?: string }): string {
  switch (template.type) {
    case ITemplateType.CommunityResource:
      return template.id!
    case ITemplateType.TeamTemplate:
      return template.key!
    default:
      throwTypeError(template)
  }
}

/**
 * Returns the count of recent templates for a document type.
 * Original: $$S4
 */
export function getRecentTemplateCount(docType: FDocumentType): number {
  return getRecentItems(docType, HubTypeEnum.HUB_FILE).length
}

// Exported constants (original variable names in comments)
export const JG = RECENT_WHITEBOARD_TOOLS_FIGJAM // $$E0
export const Jl = getRecentKey // $$y1
export const S7 = RECENT_PLUGINS_FIGJAM // $$_2
export const SO = RECENT_FACE_STAMPS_FIGJAM // $$f3
export const TI = getRecentTemplateCount // $$S4
export const U_ = getCurrentDocumentType // $$u5
export const X2 = getTemplateId // $$I6
export const YN = RECENT_WIDGETS_FIGMA_DESIGN // $$h7
export const a7 = RECENT_PLUGINS_SLIDES // $$g8
export const gJ = getRecentItems // $$b9
export const ul = enrichPluginWithPublishers // $$T10
export const vY = RECENT_PLUGINS_FIGMA_DESIGN // $$m11
export const xk = RECENT_WIDGETS_FIGJAM // $$p12
