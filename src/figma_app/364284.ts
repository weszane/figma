import { setupEmbedWidget } from '../905/228274'
import { registerEmbedWidget } from '../905/256045'
import { getI18nString } from '../905/303541'
import { WidgetTypes } from '../905/403797'
import { SummaryWidget } from '../905/449599'
import { embedWidgetMenuActions, LinkPreviewWidget } from '../figma_app/274217'
/**
 * Widget handler mapping for different widget types.
 * Original variable: $$d2
 */
export const widgetHandlerMap = {
  [WidgetTypes.EMBED_WIDGET]: registerEmbedWidget,
  [WidgetTypes.LINK_PREVIEW_WIDGET]: LinkPreviewWidget,
  [WidgetTypes.AI_SUMMARY_WIDGET]: SummaryWidget,
  [WidgetTypes.HTML_WIDGET]: setupEmbedWidget,
}

/**
 * Property menu item to i18n string mapping for widget types.
 * Original variable: c
 */
export const widgetMenuI18nMap = {
  [WidgetTypes.EMBED_WIDGET]: {
    propertyMenuItemNameToI18nId: {
      [embedWidgetMenuActions.OPEN]: () => getI18nString('whiteboard.embeds.inline_menu.open_link'),
      [embedWidgetMenuActions.CONVERT_TO_TEXT]: () => getI18nString('whiteboard.embeds.inline_menu.change_back_to_text'),
    },
  },
  [WidgetTypes.LINK_PREVIEW_WIDGET]: {
    propertyMenuItemNameToI18nId: {
      [embedWidgetMenuActions.OPEN]: () => getI18nString('whiteboard.embeds.inline_menu.open_link'),
      [embedWidgetMenuActions.VERTICAL]: () => getI18nString('whiteboard.embeds.inline_menu.display_vertical'),
      [embedWidgetMenuActions.HORIZONTAL]: () => getI18nString('whiteboard.embeds.inline_menu.display_horizontal'),
      [embedWidgetMenuActions.CONVERT_TO_TEXT]: () => getI18nString('whiteboard.embeds.inline_menu.change_back_to_text'),
    },
  },
  [WidgetTypes.AI_SUMMARY_WIDGET]: {
    propertyMenuItemNameToI18nId: {
      '': () => {
        throw new Error('Function not implemented.')
      },
    },
  },
  [WidgetTypes.HTML_WIDGET]: {
    propertyMenuItemNameToI18nId: {
      '': () => {
        throw new Error('Function not implemented.')
      },
    },
  },
}

/**
 * Checks if the given widget type exists in WidgetTypes.
 * Original function: $$u0
 * @param widgetType - The widget type to check.
 * @returns True if widget type exists, false otherwise.
 */
export function isValidWidgetType(widgetType: string): boolean {
  return !!WidgetTypes[widgetType]
}

/**
 * Gets the i18n string for a property menu item of a widget type.
 * Original function: $$p1
 * @param widgetType - The widget type.
 * @param menuAction - The menu action name.
 * @returns The i18n string or undefined.
 */
export function getWidgetMenuI18nString(widgetType: string, menuAction: string): string | undefined {
  const widgetConfig = widgetMenuI18nMap[widgetType]
  if (widgetConfig?.propertyMenuItemNameToI18nId[menuAction]) {
    return widgetConfig.propertyMenuItemNameToI18nId[menuAction]()
  }
}

/** Exported aliases for backward compatibility */
export const Vi = isValidWidgetType
export const kZ = getWidgetMenuI18nString
export const uE = widgetHandlerMap
