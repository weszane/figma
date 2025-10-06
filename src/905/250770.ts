import { focusNextArea, focusPreviousArea } from "../figma_app/290668"

export let AccessibleAreasBindings = {
  cycleFocusBackward(e) {
    focusPreviousArea(e)
  },
  cycleFocusForward(e) {
    focusNextArea(e)
  },
}
export const H = AccessibleAreasBindings
