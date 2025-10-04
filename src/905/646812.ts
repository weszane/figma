import { fullscreenPerfManager } from "../905/125218"
import { normalizeFontMetadata } from "../905/777093"
import { updateFontListAction } from "../figma_app/91703"
import { Fonts } from "../figma_app/763686"

/**
 * Updates the font list file metadata by normalizing the font metadata,
 * dispatching the update action, and updating the Fonts module.
 *
 * @param dispatch - The dispatch function to send actions.
 * @param payload - The payload containing sharedFontsList and other metadata.
 */
export function updateFontListFileMetadata(dispatch: Fn, payload: any): void {
  fullscreenPerfManager.time("updateFontListFileMetadata", () => {
    // Normalize the shared fonts list if it exists, otherwise use an empty array
    const normalizedFontsList = normalizeFontMetadata(payload.sharedFontsList || [])

    // Update the payload with the normalized fonts list
    payload.sharedFontsList = normalizedFontsList

    // Dispatch the update font list action with the updated payload
    dispatch(updateFontListAction(payload))

    // Update the Fonts module with the new list if Fonts is available
    Fonts?.updateFontList({
      list: normalizedFontsList,
      localizedToUnlocalized: [],
    })
  })
}

// Export the function as 'n' for backward compatibility
export const n = updateFontListFileMetadata
