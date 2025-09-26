import { createParameterEntry } from '../905/882587'
import { isCommand, isMenu, isSeparator } from '../figma_app/155287'
import { throwTypeError } from '../figma_app/465776'

export function createMenuItems(menuItems: any[], pluginInfo: any, path: string[] = []): any[] {
  return menuItems.map((item) => {
    if (isMenu(item)) {
      return {
        type: 'submenu',
        subtype: 'manifest',
        name: item.name,
        submenu: createMenuItems(item.menu, pluginInfo, [...path, item.name]),
      }
    }
    if (isSeparator(item)) {
      return {
        type: 'separator',
      }
    }
    if (isCommand(item)) {
      let menuAction: any
      let parameterEntry = createParameterEntry(item.parameters, item.name)

      menuAction = 'localFileId' in pluginInfo
        ? {
          type: 'run-local-plugin',
          localFileId: pluginInfo.localFileId,
          command: item.command,
          parameterOnly: item.parameters && item.parameterOnly !== false,
          parameterEntry,
        }
        : {
          type: 'run-installed-plugin',
          pluginId: pluginInfo.plugin_id,
          command: item.command,
          parameterOnly: item.parameters && item.parameterOnly !== false,
          parameterEntry,
        }

      return {
        type: 'run-menu-action',
        name: {
          type: 'plugin-name',
          plugin: item.name,
        },
        menuAction,
        path,
      }
    }
    throwTypeError(item)
    return  []
  })
}
