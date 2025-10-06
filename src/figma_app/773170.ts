import { ColorSpaceType } from "../905/366117"
import { debugState } from "../905/407919"
import { FEditorType } from "../figma_app/53721"
import { fullscreenValue } from "../figma_app/455680"
import { ColorProfileEnum, ColorSpaceEnum, Fullscreen } from "../figma_app/763686"
import { getCurrentUserColorProfile } from "../figma_app/829197"

export let colorProfileManagerInstance = new class ColorProfileManager {
  canvasColorProfile: ColorSpaceEnum

  constructor() {
    this.canvasColorProfile = ColorSpaceEnum.SRGB
  }

  /**
   * Gets the default document color profile based on editor type and user preferences
   * Original: getDefaultDocumentColorProfile
   */
  getDefaultDocumentColorProfile(): ColorProfileEnum {
    if ((debugState?.getState()?.selectedView).editorType === FEditorType.Whiteboard) {
      return ColorProfileEnum.SRGB
    }

    switch (getCurrentUserColorProfile().colorProfilePreference) {
      case ColorSpaceType.DEFAULT:
      case ColorSpaceType.SRGB:
        return ColorProfileEnum.SRGB
      case ColorSpaceType.DISPLAY_P3:
        return ColorProfileEnum.DISPLAY_P3
      default:
        return ColorProfileEnum.SRGB
    }
  }

  /**
   * Gets the current canvas color profile
   * Original: getCanvasColorProfile
   */
  getCanvasColorProfile(): ColorSpaceEnum {
    return this.canvasColorProfile
  }

  /**
   * Sets the canvas color profile and triggers necessary updates
   * Original: setCanvasColorProfile
   */
  setCanvasColorProfile(profile: ColorSpaceEnum): void {
    this.canvasColorProfile = profile
    Fullscreen?.updateImageColorspaceConversions()
    fullscreenValue?.triggerAction("redraw-canvas", {})
  }

  /**
   * Gets the user's color profile preference
   * Original: getUserColorProfile
   */
  getUserColorProfile(): ColorSpaceEnum {
    switch (getCurrentUserColorProfile().colorProfilePreference) {
      case ColorSpaceType.DEFAULT:
      case ColorSpaceType.SRGB:
        return ColorSpaceEnum.SRGB
      case ColorSpaceType.DISPLAY_P3:
        return ColorSpaceEnum.DISPLAY_P3
      default:
        return ColorSpaceEnum.SRGB
    }
  }
}()
export const l = colorProfileManagerInstance
