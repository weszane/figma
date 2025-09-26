// Define types for better type safety and readability
type MenuItemName
  = | { type: 'string-key', string: string, key: string }
    | { type: 'plugin-name', plugin: string }
    | { type: 'plugin-name-string', string: string }

type MenuAction
  = | { type: 'run-installed-plugin', pluginId: string, command?: string }
    | { type: 'run-local-plugin', localFileId: number, command?: string }
    | { type: 'insert-local-widget', localFileId: string | number, command?: string }
    | { type: 'insert-installed-widget', pluginId: string, command?: string }
    | { type: 'publish-widget', localFileId: number }
    | { type: 'run-last' }
    | { type: 'manage-widgets' }
    | { type: 'browse' }
    | { type: 'browse-plugins' }
    | { type: 'browse-widgets' }
    | { type: 'select-all-widgets' }
    | { type: 'view-api-docs' }
    | { type: 'create-new-plugin' }
    | { type: 'create-new-widget' }
    | { type: 'open-console' | 'toggle-console', showError?: string }
    | { type: 'open-dir', localFileId: number }

type MenuItem
  = | { type: 'run-menu-action', name: MenuItemName, menuAction?: MenuAction, disabled?: boolean }
    | { type: 'separator' }
    | { type: 'submenu', name: string, submenu: MenuItem[] }
    | { type: 'header', name: string }

// Refactored FullscreenMenu module
namespace FullscreenMenu {
  export const NON_ACTION_ITEMS_SYNC_ALLOWLIST = [
    'cut',
    'copy',
    'paste',
    'interface-scale-menu',
    'toggle-full-screen',
    'always-show-tabs-when-presenting',
    'troubleshooting-menu',
    'sign-out',
  ] as const

  export function isNonActionItemKey(key: string): boolean {
    return NON_ACTION_ITEMS_SYNC_ALLOWLIST.includes(key as any)
  }
}

// Refactored PluginMenuV19 module
namespace PluginMenuV19 {
  // Helper function to extract string from MenuItemName
  export function stringOfActionMenuItemName(name: MenuItemName): string {
    switch (name.type) {
      case 'string-key':
        return name.string
      case 'plugin-name':
        return name.plugin
      default:
        throw new Error('unreachable')
    }
  }

  // Helper function to get name of menu item
  export function nameOfMenuItem(item: MenuItem): string {
    switch (item.type) {
      case 'run-menu-action':
        return stringOfActionMenuItemName(item.name)
      case 'separator':
        return ''
      case 'submenu':
      case 'header':
        return item.name
      default:
        throw new Error('unreachable')
    }
  }

  // Type guard for MenuAction
  export function isMenuAction(action: any): action is MenuAction {
    if (!action || typeof action !== 'object' || !action.type)
      return false

    switch (action.type) {
      case 'run-installed-plugin':
        return typeof action.pluginId === 'string'
          && (action.command === undefined || typeof action.command === 'string')
      case 'run-local-plugin':
        return typeof action.localFileId === 'number'
          && (action.command === undefined || typeof action.command === 'string')
      case 'insert-local-widget':
        return (typeof action.localFileId === 'string' || typeof action.localFileId === 'number')
          && (action.command === undefined || typeof action.command === 'string')
      case 'insert-installed-widget':
        return typeof action.pluginId === 'string'
          && (action.command === undefined || typeof action.command === 'string')
      case 'publish-widget':
        return typeof action.localFileId === 'number'
      case 'run-last':
      case 'manage-widgets':
      case 'browse':
      case 'browse-plugins':
      case 'browse-widgets':
      case 'select-all-widgets':
      case 'view-api-docs':
      case 'create-new-plugin':
      case 'create-new-widget':
        return true
      case 'open-console':
      case 'toggle-console':
        return action.showError === undefined || typeof action.showError === 'string'
      case 'open-dir':
        return typeof action.localFileId === 'number'
      default:
        return false
    }
  }

  // Type guard for MenuItem
  export function isMenuItem(item: any): item is MenuItem {
    if (!item || typeof item !== 'object' || !item.type)
      return false

    switch (item.type) {
      case 'run-menu-action':
        // Validate name property
        if (!item.name || typeof item.name !== 'object')
          return false

        const name = item.name
        const isValidName = (name.type === 'string-key'
          && typeof name.string === 'string'
          && typeof name.key === 'string')
        || (name.type === 'plugin-name'
          && typeof name.plugin === 'string')

        return isValidName
          && (item.menuAction === undefined || isMenuAction(item.menuAction))
          && (item.disabled === undefined || typeof item.disabled === 'boolean')

      case 'separator':
        return true

      case 'submenu':
        return typeof item.name === 'string'
          && Array.isArray(item.submenu)
          && item.submenu.every(isMenuItem)

      case 'header':
        return typeof item.name === 'string'

      default:
        return false
    }
  }
}

// Refactored PluginMenu module
namespace PluginMenu {
  // Helper function to extract string from MenuItemName
  export function stringOfActionMenuItemName(name: MenuItemName): string {
    switch (name.type) {
      case 'string-key':
      case 'plugin-name-string':
        return name.string
      case 'plugin-name':
        return name.plugin
      default:
        throw new Error('unreachable')
    }
  }

  // Helper function to get name of menu item
  export function nameOfMenuItem(item: MenuItem): string {
    switch (item.type) {
      case 'run-menu-action':
        return stringOfActionMenuItemName(item.name)
      case 'separator':
        return ''
      case 'submenu':
      case 'header':
        return item.name
      default:
        throw new Error('unreachable')
    }
  }

  // Type guard for MenuAction
  export function isMenuAction(action: any): action is MenuAction {
    if (!action || typeof action !== 'object' || !action.type)
      return false

    return (action.type === 'run-local-plugin'
      && typeof action.localFileId === 'number'
      && (action.command === undefined || typeof action.command === 'string'))
    || (action.type === 'run-installed-plugin'
      && typeof action.pluginId === 'string'
      && (action.command === undefined || typeof action.command === 'string'))
    || (typeof action.type === 'string'
      && (action.showError === undefined || typeof action.showError === 'string')
      && (action.localFileId === undefined || typeof action.localFileId === 'number'))
  }

  // Type guard for MenuItem
  export function isMenuItem(item: any): item is MenuItem {
    if (!item || typeof item !== 'object' || !item.type)
      return false

    switch (item.type) {
      case 'run-menu-action':
        // Validate name property
        if (!item.name || typeof item.name !== 'object')
          return false

        const name = item.name
        const isValidName = (name.type === 'string-key' && typeof name.string === 'string')
          || (name.type === 'plugin-name' && typeof name.plugin === 'string')

        return isValidName
          && (item.menuAction === undefined || isMenuAction(item.menuAction))
          && (item.disabled === undefined || typeof item.disabled === 'boolean')

      case 'separator':
        return true

      case 'submenu':
        return typeof item.name === 'string'
          && Array.isArray(item.submenu)
          && item.submenu.every(isMenuItem)

      default:
        return false
    }
  }
}

export { FullscreenMenu, PluginMenu, PluginMenuV19 }
