import { colorCSSManipulatorInstance } from "../905/989956"
import { BV, Mr } from "../figma_app/153399"
import { AppStateTsApi, BorderStyle, ColorOptions } from "../figma_app/763686"

// Original code variables and exports have been refactored for clarity and maintainability.
// Grouped into logical sections: Sizes, Borders, Colors, and Functions.
// Added TypeScript types where applicable.
// Comments include original variable names for traceability.
// Exported names updated to match refactored meaningful names.

// Sizes section: Constants for padding, margins, and size mappings
export const defaultPadding = 4 // Original: $$o9
export const defaultMargin = 8 // Original: $$l8
export const textSizes: Record<number, number> = {
  0: 16,
  1: 12,
  2: 8,
  3: 6,
  4: 4,
} // Original: $$d2
export const iconSizes: Record<number, number> = {
  0: 56,
  1: 40,
  2: 32,
  3: 24,
  4: 16,
} // Original: $$c5
export const borderWidth = 4 // Original: $$p12
export const borderRadius = 1 // Original: $$_13

// Borders section: Border style configurations
export const blackSolidBorder: any[] = [
  {
    type: "SOLID",
    color: BV(ColorOptions.BLACK, "base"),
  },
] // Original: $$u7
export const highlightBorder: any[] = [
  {
    type: "SOLID",
    color: BV(ColorOptions.HIGHLIGHT_YELLOW, "highlight"),
  },
] // Original: $$h0
export const whiteSolidBorder: any[] = [
  {
    type: "SOLID",
    color: BV(ColorOptions.WHITE, "base"),
  },
] // Original: $$m3
export const solidBorderStyle = BorderStyle.SOLID // Original: $$y6

// Colors section: Color constants and parsed colors
export const grayBaseLight = BV(ColorOptions.GRAY, "baseLight") // Original: $$b4
export const whiteColorParsed = colorCSSManipulatorInstance.parse(Mr(ColorOptions.WHITE)) // Original: $$f10
export const grayDarkParsed = colorCSSManipulatorInstance.parse(Mr(ColorOptions.GRAY_DARK, "rgba(0,0,0,0)")) // Original: $$E11

// Functions section
/**
 * Returns the appropriate sticky color based on UI state.
 * @returns The sticky color value.
 */
export function getStickyColor() {
  return BV(
    AppStateTsApi?.uiState().showUI3Colors.getCopy()
      ? ColorOptions.STICKY_GRAY_UI3
      : ColorOptions.STICKY_GRAY_LIGHT,
    "sticky",
  )
} // Original: $$g1

// Exports with refactored names
export const Dq = highlightBorder // Original export: Dq = $$h0
export const E$ = getStickyColor // Original export: E$ = $$g1
export const EC = textSizes // Original export: EC = $$d2
export const GJ = whiteSolidBorder // Original export: GJ = $$m3
export const LX = grayBaseLight // Original export: LX = $$b4
export const Pn = iconSizes // Original export: Pn = $$c5
export const T7 = solidBorderStyle // Original export: T7 = $$y6
export const XQ = blackSolidBorder // Original export: XQ = $$u7
export const _W = defaultMargin // Original export: _W = $$l8
export const eQ = defaultPadding // Original export: eQ = $$o9
export const n6 = whiteColorParsed // Original export: n6 = $$f10
export const ns = grayDarkParsed // Original export: ns = $$E11
export const qB = borderWidth // Original export: qB = $$p12
export const zQ = borderRadius // Original export: zQ = $$_13
