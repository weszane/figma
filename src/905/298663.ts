import { useAtomWithSubscription } from "../figma_app/27355"
import { sitesViewSetterAtomFamily } from "../figma_app/115923"
import { PanelType } from "../figma_app/763686"

const PANELS_WITH_CODE_VIEW = [PanelType.CODE, PanelType.DAKOTA, PanelType.SETTINGS]

/**
 * Checks if the given panel type supports code view
 * (Original name: $$o1)
 * @param panelType - The panel type to check
 * @returns boolean indicating if panel supports code view
 */
export function isCodeViewPanel(panelType: PanelType): boolean {
  return PANELS_WITH_CODE_VIEW.includes(panelType)
}

/**
 * Gets the current panel type from atom subscription and checks if it supports code view
 * (Original name: $$l0)
 * @returns boolean indicating if current panel supports code view
 */
export function useIsCodeViewPanel(): boolean {
  const currentPanelType = useAtomWithSubscription(sitesViewSetterAtomFamily)
  return isCodeViewPanel(currentPanelType)
}

export const G = useIsCodeViewPanel
export const a = isCodeViewPanel
