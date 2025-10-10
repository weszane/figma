import { createElement } from "react"
import { isIntegrationContext } from "../905/87821"
import { formatI18nMessage } from "../905/482208"
import { getFeatureFlags } from "../905/601108"
import { VU } from "../905/625959"
import { isFullscreenDevHandoffView } from "../905/782918"
import { FEditorType } from "../figma_app/53721"
import { Bf } from "../figma_app/249941"
import { getKeyboardShortcut, isActionEnabled } from "../figma_app/357047"
import { isStamp, traverseAncestors } from "../figma_app/387100"
import { fullscreenValue } from "../figma_app/455680"
import { debug } from "../figma_app/465776"
import { filterNotNullish } from "../figma_app/656233"
import { isNodeSelected } from "../figma_app/678300"
import { getIsLinux, getIsMac, getIsWindows, isIpadDevice } from "../figma_app/778880"
import { getActionOrName, getProperty, hasActionOrCallback, hasChildrenOrDropdown, hasHeader, hasRenderFunction, hasSeparator, isMenuItemChecked } from "../figma_app/847915"
import { hasDesktopAPI } from "../figma_app/876459"
import { isInteractionPathCheck } from "../figma_app/897289"
// Renamed variables, added types, simplified conditional logic, improved readability
// Origin: $$v0 function from compiled/minified code

export interface IMenuItem {
  "property": any
  "propertyValue": any
  "name"?: string
  "action"?: string
  "searchOnly"?: boolean
  "flags"?: string[]
  "platforms"?: string[]
  "featureFlags"?: string[]
  "notFeatureFlags"?: string[]
  "disabled"?: boolean
  "disabledAndForceVisible"?: boolean
  "shortcutText"?: string
  "rightText"?: string
  "rightIcon"?: any
  "displayText"?: string
  "displayTextClassName"?: string
  "children"?: IMenuItem[]
  "childDropdown"?: {
    items: IMenuItem[]
    recordingKey?: string
  }
  "showDotDotDotButton"?: boolean
  "recordingKey"?: string
  "source"?: string
  "callback"?: Fn
  "onMouseEnter"?: Fn
  "onMouseExit"?: Fn
  "nodeId"?: string
  "inputProperty"?: string
  "inputWidth"?: number
  "args"?: any[]
  "visuallyDisabledWithSelection"?: boolean
  "data-onboarding-key"?: string
  "alwaysShowCheckMarkOffset"?: boolean
  "checked"?: boolean
}

interface ViewContext {
  isDesktopMenu: boolean
  isReadOnly: boolean
  isSearching: boolean
  selectedView: {
    editorType: FEditorType
    isRecoveryMode?: boolean
    view?: string
    showDevModeVariablesTable?: boolean
  }
  isLimitedDevMode: boolean
  removeDisabledItems?: boolean
  appModel: {
    isReadOnly: boolean
    keyboardShortcuts: any
  }
  sceneGraph?: any
  sceneGraphSelection?: any
  alwaysShowCheckMarkOffset?: boolean
}

/**
 * Determines if a menu item should be visible based on various conditions
 * @param item The menu item to check
 * @param context The current application/view context
 * @returns Whether the menu item should be visible
 */
export function shouldShowMenuItem(item: IMenuItem | null, context: ViewContext): boolean {
  // Early return for invalid items or search-only items
  if (!item || (!context.isSearching && hasActionOrCallback(item) && item.searchOnly)) {
    return false
  }

  // Check flags-based visibility rules
  if (item.flags) {
    // Shipping flag check
    if (item.flags.includes("!ship"))
      return false

    // Desktop API related flags
    if (item.flags.includes("!desktop") && hasDesktopAPI())
      return false
    if (item.flags.includes("desktop") && !hasDesktopAPI())
      return false

    // Recovery mode flags
    if (item.flags.includes("recovery") && !context.selectedView.isRecoveryMode)
      return false
    if (item.flags.includes("!recovery") && context.selectedView.isRecoveryMode)
      return false

    // Edit mode flags
    const isInEditMode = !context.isReadOnly && !isFullscreenDevHandoffView(context.selectedView) || isInteractionPathCheck()
    if (item.flags.includes("!edit") && isInEditMode)
      return false
    if (item.flags.includes("edit") && !isInEditMode)
      return false

    // Editor type specific flags
    const editorTypeChecks = [
      item.flags.includes("!dev_handoff") && context.selectedView.editorType === FEditorType.DevHandoff,
      item.flags.includes("!limited_dev_mode") && context.isLimitedDevMode,
      item.flags.includes("!slides") && context.selectedView.editorType === FEditorType.Slides,
      item.flags.includes("!sites") && context.selectedView.editorType === FEditorType.Sites,
      item.flags.includes("!figmake") && context.selectedView.editorType === FEditorType.Figmake,
      item.flags.includes("!cooper") && context.selectedView.editorType === FEditorType.Cooper,
      item.flags.includes("!illustration") && context.selectedView.editorType === FEditorType.Illustration,
      item.flags.includes("view_restricted") && fullscreenValue.isCopyExportRestricted(),
    ]

    if (editorTypeChecks.some(check => check))
      return false

    // Editor type inclusion checks
    const requiresDesign = item.flags.includes("design")
    const requiresWhiteboard = item.flags.includes("whiteboard")
    const requiresDevHandoff = item.flags.includes("dev_handoff")
    const requiresIllustration = item.flags.includes("illustration")
    const requiresSlides = item.flags.includes("slides")
    const requiresSites = item.flags.includes("sites")
    const requiresCooper = item.flags.includes("cooper")
    const requiresFigmake = item.flags.includes("figmake")

    const hasEditorRequirements = requiresDesign || requiresWhiteboard || requiresDevHandoff
      || requiresIllustration || requiresSlides || requiresSites
      || requiresCooper || requiresFigmake

    if (hasEditorRequirements) {
      switch (context.selectedView.editorType) {
        case FEditorType.Figmake:
          if (!requiresFigmake)
            return false
          break
        case FEditorType.Sites:
          if (!requiresSites)
            return false
          break
        case FEditorType.Illustration:
          if (!requiresDesign && !requiresIllustration)
            return false
          break
        case FEditorType.Design:
          if (!requiresDesign)
            return false
          break
        case FEditorType.Whiteboard:
          if (!requiresWhiteboard)
            return false
          break
        case FEditorType.DevHandoff:
          if (!requiresDevHandoff)
            return false
          break
        case FEditorType.Cooper:
          if (!requiresCooper)
            return false
          break
        case FEditorType.Slides:
          if (!requiresSlides)
            return false
          break
      }
    }

    // Desktop OS menu flags
    if (item.flags.includes("!desktop_os_menu") && context.isDesktopMenu)
      return false
    if (item.flags.includes("desktop_os_menu") && !context.isDesktopMenu)
      return false

    // Integration context flags
    const isIntegration = isIntegrationContext()
    if (item.flags.includes("!integration") && isIntegration)
      return false
    if (item.flags.includes("integration") && !isIntegration)
      return false

    // Variables table flag
    if (item.flags.includes("!variables_table")
      && context.selectedView.view === "fullscreen"
      && context.selectedView.showDevModeVariablesTable) {
      return false
    }
  }

  // Separator or header items are always shown
  if (hasSeparator(item) || hasHeader(item))
    return true

  // Platform restrictions
  if (item.platforms != null) {
    let platformMatch = false
    for (const platform of item.platforms) {
      if ((platform === "mac" && getIsMac())
        || (platform === "linux" && getIsLinux())
        || (platform === "windows" && getIsWindows())
        || (platform === "!ipad" && !isIpadDevice)) {
        platformMatch = true
        break
      }
    }
    if (!platformMatch)
      return false
  }

  // Feature flag checks
  if (item.featureFlags && !item.featureFlags.every(flag => getFeatureFlags()[flag])) {
    return false
  }

  if (item.notFeatureFlags && item.notFeatureFlags.some(flag => getFeatureFlags()[flag])) {
    return false
  }

  return true
}

export const UN = shouldShowMenuItem

/**
 * Processes and filters menu items based on visibility rules
 * @param items Array of menu items to process
 * @param context Processing context with app state
 * @returns Filtered and processed menu items
 */
export function processMenuItems(items: IMenuItem[], context: any): any[] {
  return filterNotNullish(
    items
      .filter(item => shouldShowMenuItem(item, {
        isDesktopMenu: false,
        isReadOnly: context.appModel.isReadOnly,
        isSearching: !!context.isSearching,
        selectedView: context.selectedView,
        isLimitedDevMode: context.isLimitedDevMode,
        removeDisabledItems: context.removeDisabledItems,
        appModel: context.appModel,
        sceneGraph: context.sceneGraph,
        sceneGraphSelection: context.sceneGraphSelection,
        alwaysShowCheckMarkOffset: context.alwaysShowCheckMarkOffset,
      }))
      .map((item) => {
        if (!item)
          return null

        // Handle separator items
        if (hasSeparator(item)) {
          return {
            ...item,
            disabled: false,
            separator: true,
          }
        }

        // Handle header items
        if (hasHeader(item)) {
          return {
            displayText: item.name,
            displayTextClassName: item.displayTextClassName,
            disabled: true,
          }
        }

        // Handle custom render function items
        if (hasRenderFunction(item)) {
          return { ...item }
        }

        // Determine if item is disabled
        const isItemDisabled = (hasActionOrCallback(item) && item.disabled)
          || (!item.name && !(hasActionOrCallback(item) && isActionEnabled(context.appModel, item.action)))

        // Skip disabled items if configured to remove them
        if (!(hasActionOrCallback(item) && item.disabledAndForceVisible)
          && isItemDisabled
          && context.removeDisabledItems) {
          return null
        }

        // Handle node-specific menu items
        if (hasActionOrCallback(item) && item.nodeId) {
          return processNodeMenuItem(item, item.nodeId, context)
        }

        // Handle regular menu items
        const processedItem: any = { ...item }
        const actionOrName = getActionOrName(item)

        // Set display text
        processedItem.displayText = ((hasChildrenOrDropdown(item) || hasActionOrCallback(item)) && item.displayText)
          || formatI18nMessage(actionOrName, item.args)

        // Set shortcut
        if (hasActionOrCallback(item) && item.shortcutText) {
          processedItem.shortcut = item.shortcutText
        }
        else {
          processedItem.shortcut = getKeyboardShortcut(context.appModel.keyboardShortcuts, actionOrName)
        }

        // Set various properties
        processedItem.disabled = isItemDisabled
        processedItem.visuallyDisabledWithSelection = hasActionOrCallback(item) ? item.visuallyDisabledWithSelection : undefined
        processedItem.rightText = hasActionOrCallback(item) ? item.rightText : undefined
        processedItem.rightIcon = (hasActionOrCallback(item) && item.rightIcon) ? item.rightIcon : undefined
        processedItem.isChecked = hasActionOrCallback(item) && isMenuItemChecked(context.appModel, item)
        processedItem.alwaysShowCheckMarkOffset = context.alwaysShowCheckMarkOffset
          ?? ("alwaysShowCheckMarkOffset" in item ? item.alwaysShowCheckMarkOffset : undefined)
        processedItem["data-onboarding-key"] = hasActionOrCallback(item) ? item["data-onboarding-key"] : undefined
        processedItem.source = hasActionOrCallback(item) ? item.source : undefined

        // Handle children/dropdowns
        if (hasChildrenOrDropdown(item)) {
          if (item.children) {
            processedItem.children = processMenuItems(item.children, context)
          }
          else if (item.childDropdown) {
            processedItem.children = item.childDropdown.items
          }
          processedItem.showDotDotDotButton = item.showDotDotDotButton
          processedItem.displayTextClassName = item.displayTextClassName
          processedItem.recordingKey = (item.childDropdown && item.childDropdown.recordingKey) || item.name
        }
        else {
          processedItem.recordingKey = item.recordingKey || item.action || item.name
        }

        // Handle input properties
        if (hasActionOrCallback(item) && item.inputProperty && item.action) {
          processedItem.input = {
            value: getProperty(context.appModel, item.inputProperty),
            width: item.inputWidth,
            onChange: (value: any) => {
              if (value !== undefined) {
                VU.get(item.action!, item.source ?? "menu", { inputValue: value })()
              }
            },
          }
        }

        return processedItem
      }),
  )
}

/**
 * Processes a menu item that corresponds to a specific node
 * @param item The menu item
 * @param nodeId The ID of the node
 * @param context Processing context
 * @returns Processed menu item with node-specific properties
 */
function processNodeMenuItem(item: IMenuItem, nodeId: string, context: any): any {
  if (!item)
    return null

  // Debug assertion
  debug(
    context.sceneGraph != null && context.sceneGraphSelection != null,
    "You should be providing a scene graph and a selection if you are rendering a menu item for a particular layer",
  )

  const node = context.sceneGraph.get(nodeId)
  if (!node)
    return null

  const isSelected = isNodeSelected(context.sceneGraphSelection, nodeId)

  // Check if node is an instance, symbol, or stamp
  const isInstanceOrSymbolOrStamp = (node: any) =>
    node.type === "INSTANCE" || node.type === "SYMBOL" || isStamp(node)

  let isPurpleNode = isInstanceOrSymbolOrStamp(node)

  // Traverse ancestors to check for instance/symbol/stamp
  traverseAncestors(context.sceneGraph, nodeId, (ancestor: any) => {
    if (isPurpleNode || isInstanceOrSymbolOrStamp(ancestor)) {
      return "stop"
    }
  })

  // Create the menu item object
  const menuItem: any = {
    displayText: node.name,
    shortcut: "",
    disabled: false,
    isChecked: isSelected,
    isPurple: isPurpleNode,
    isLocked: node.locked && !isSelected,
    alwaysShowCheckMarkOffset: context.alwaysShowCheckMarkOffset,
    recordingKey: item.action,
    action: item.action,
    name: item.name,
    args: item.args,
    source: item.source,
    callback: item.callback,
    onMouseEnter: item.onMouseEnter,
    onMouseExit: item.onMouseExit,
  }

  // Add icon
  menuItem.icon = createElement(Bf, {
    guid: node.guid,
    isMenuIcon: true,
    isMenuIconPurple: menuItem.isPurple,
  }, null)

  return menuItem
}

