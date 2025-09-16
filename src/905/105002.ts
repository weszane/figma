import { throwTypeError } from '../figma_app/465776'
import { PanelType } from '../figma_app/763686'

/**
 * Converts a PanelType enum value to its corresponding string representation.
 * @param panelType - The PanelType enum value to convert.
 * @returns The string representation of the PanelType.
 * @throws {TypeError} If the panelType is not recognized.
 */
export function getPanelTypeString(panelType: PanelType): string {
  switch (panelType) {
    case PanelType.FILE:
      return 'FILE'
    case PanelType.CODE:
      return 'CODE'
    case PanelType.DAKOTA:
      return 'DAKOTA'
    case PanelType.SETTINGS:
      return 'SETTINGS'
    case PanelType.INSERT:
      return 'INSERT'
    default:
      throwTypeError(panelType)
  }
}
export const R = getPanelTypeString
