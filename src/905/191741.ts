import { getI18nString } from "../905/303541"
import { createLocalStorageAtom, useAtomValueAndSetter, useAtomWithSubscription } from "../figma_app/27355"
// Original: let a = createLocalStorageAtom("dev-mode-code-or-properties", "code");
// Refactored to use descriptive naming for the atom storing dev mode preference.
const devModeAtom = createLocalStorageAtom("dev-mode-code-or-properties", "code")

/**
 * Original: $$s2 class with format method.
 * Refactored to a named class for formatting dev mode display strings.
 */
class DevModeFormatter {
  format(value: string): string {
    switch (value) {
      case "code":
        return getI18nString("inspect_panel.code.code")
      case "properties":
        return getI18nString("dev_handoff.layer_properties_list")
      default:
        return ""
    }
  }
}

// Original: let $$s2 = new class { ... }();
// Refactored to instantiate the formatter class.
const devModeFormatter = new DevModeFormatter()

/**
 * Original: export function $$o0()
 * Refactored to a named function providing atom value and setter.
 */
export function useDevModeValueAndSetter() {
  return useAtomValueAndSetter(devModeAtom)
}

/**
 * Original: export function $$l3()
 * Refactored to a named function checking if dev mode is set to "code".
 */
export function isCodeMode() {
  return useAtomWithSubscription(devModeAtom) === "code"
}

// Original: export let $$d1 = ["properties", "code"];
// Refactored to a const with descriptive name for dev mode options.
export const devModeOptions = ["properties", "code"]

// Original exports with obfuscated names; refactored to use new names.
// Note: If other files import these, update imports to match (e.g., import { useDevModeValueAndSetter as $h } from ... but ideally rename to new exports).
export const $h = useDevModeValueAndSetter
export const OQ = devModeOptions
export const a9 = devModeFormatter
export const sQ = isCodeMode
