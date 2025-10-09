import { showModalHandler } from "../905/156213"
import { renderI18nText } from "../905/303541"
import { throwTypeError } from "../figma_app/465776"
import { StagingStatusEnum } from "../figma_app/633080"
import { compareNumbers } from "../figma_app/766708"

// Refactored code: renamed variables, added types, simplified logic, and improved readability
// Original code name: $$l0, $$d3, $$c1, $$u2

// Type definitions inferred from usage
interface SortableItem {
  sortPosition?: number | null
  node_id: string
}


// Sort items by sortPosition (descending), with null/missing values last, and node_id as tiebreaker
export function sortItemsByPosition<T extends SortableItem>(items: T[]): T[] {
  return [...items].sort((itemA, itemB) => {
    // Handle missing or null sortPosition (put at end)
    if (!("sortPosition" in itemA) || itemA.sortPosition === null)
      return 1
    if (!("sortPosition" in itemB) || itemB.sortPosition === null)
      return -1

    // Compare sortPositions (descending order)
    const positionComparison = -compareNumbers(itemA.sortPosition!, itemB.sortPosition!)
    if (positionComparison !== 0)
      return positionComparison

    // Use node_id as tiebreaker
    return itemA.node_id > itemB.node_id ? 1 : -1
  })
}

// Map staging status to localized text
export function getStagingStatusText(status: StagingStatusEnum) {
  switch (status) {
    case StagingStatusEnum.CHANGED:
      return renderI18nText("design_systems.publishing_modal.modified")
    case StagingStatusEnum.CURRENT:
      return renderI18nText("design_systems.publishing_modal.no_changes")
    case StagingStatusEnum.DELETED:
      return renderI18nText("design_systems.publishing_modal.removed")
    case StagingStatusEnum.NEW:
      return renderI18nText("design_systems.publishing_modal.added")
    case StagingStatusEnum.NOT_STAGED:
      return ""
    default:
      throwTypeError(status)
  }
}

// Show publishing modal with specified data
export function showPublishingModal(
  initiallyCheckedItemIDs?: string[],
  timedOut?: boolean,
) {
  return showModalHandler({
    type: {
      type: "PublishingModal",
    },
    data: {
      initiallyCheckedItemIDs,
      timedOut,
    },
  })
}

// Enum for UI contexts where publishing actions occur
export enum PublishingUIContext {
  ASSET_PANEL_LIBRARY_CONTEXT_MENU = "asset_panel_library_context_menu",
  COMPONENT_PUBLISH_ERROR_NOTIFICATION = "component_publish_error_notification",
  FILENAME_VIEW_DROPDOWN = "filename_view_dropdown",
  FULLSCREEN_MOVE_COMPONENTS_PROMPT = "fullscreen_move_components_prompt",
  FULLSCREEN_OTHER = "fullscreen_other",
  LIBRARY_MODAL_OVERVIEW = "library_modal_overview",
  LIBRARY_MODAL_FILE_VIEW = "library_modal_file_view",
  LIBRARY_MODAL_UPSELL_UI3 = "library_modal_upsell_ui3",
  PROPERTIES_PANEL = "properties_panel",
  PUBLISH_UPSELL_MODAL = "publish_upsell_modal",
  UNPUBLISHED_PREFERRED_VALUES_WARNING = "unpublished_preferred_values_warning",
  TEST = "test",
}

// Export aliases (preserving original names)
export const BT = sortItemsByPosition
export const EH = showPublishingModal
export const RR = PublishingUIContext
export const cw = getStagingStatusText
