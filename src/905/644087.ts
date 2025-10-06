import { getI18nString } from "../905/303541"
import { ControllerType } from "../figma_app/13528"
import { formatKeyboardShortcut, getGamepadInputLabel, parseKeyCodes } from "../figma_app/800999"

class PrototypingFormatter {
  /**
   * Gets the display string for a key trigger based on the controller type and key codes
   * @param pageType - The type of page/input device
   * @param keyCodes - The key codes to process
   * @returns Localized string representation of the key trigger
   */
  getDisplayStringFromKeyTrigger(pageType: ControllerType, keyCodes: number[]): string {
    // Handle keyboard input type
    if (pageType === ControllerType.KEYBOARD) {
      const parsedKeyCodes = parseKeyCodes(keyCodes)
      return parsedKeyCodes
        ? getI18nString("proto.interaction.type.key_specific", {
            key_combo: formatKeyboardShortcut(parsedKeyCodes as any),
          })
        : getI18nString("proto.interaction.type.key_gamepad")
    }

    // Map page types to gamepad device types
    let gamepadDeviceType: string
    switch (pageType) {
      case ControllerType.XBOX_ONE:
        gamepadDeviceType = "XBOX_ONE"
        break
      case ControllerType.PS4:
        gamepadDeviceType = "PS4"
        break
      case ControllerType.SWITCH_PRO:
        gamepadDeviceType = "SWITCH_PRO"
        break
      case ControllerType.UNKNOWN_CONTROLLER:
      default:
        gamepadDeviceType = "UNKNOWN_CONTROLLER"
    }

    // Get gamepad label and return appropriate localized string
    const gamepadLabel = getGamepadInputLabel({
      keyCodes,
      triggerDevice: gamepadDeviceType,
    }, true)

    return gamepadLabel
      ? getI18nString("proto.interaction.type.gamepad_specific", {
          key_combo: gamepadLabel,
        })
      : getI18nString("proto.interaction.type.key_gamepad")
  }
}
export let prototypingFormatterInstance = new PrototypingFormatter()
export const u = prototypingFormatterInstance
