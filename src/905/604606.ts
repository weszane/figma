import { memo } from "react"
import { jsx } from "react/jsx-runtime"
import { getI18nString } from "../905/303541"
import { E } from "../905/500201"
import { c as _$$c } from "../905/535130"
import { O } from "../905/599243"
import { p as _$$p } from "../905/730229"
import { X } from "../905/737763"
import { G } from "../905/865520"
import { $ } from "../905/953280"
import { throwTypeError } from "../figma_app/465776"
import { VariableResolvedDataType } from "../figma_app/763686"
import { A as _$$A } from "../svg/82167"
import { A as _$$A2 } from "../svg/575532"
import { A as _$$A6 } from "../svg/613757"
import { A as _$$A8 } from "../svg/619541"
import { A as _$$A7 } from "../svg/844984"
import { A as _$$A3 } from "../svg/884504"
import { A as _$$A5 } from "../svg/911168"
import { A as _$$A4 } from "../svg/980021"

let a = memo((e) => {
  return jsx("svg", {
    width: "16",
    height: "16",
    fill: "none",
    viewBox: "0 0 16 16",
    ...e,
    children: jsx("path", {
      fill: "var(--color-icon)",
      d: "M11.5 13a1.5 1.5 0 0 0 1.5-1.5v-7A1.5 1.5 0 0 0 11.5 3h-7A1.5 1.5 0 0 0 3 4.5v7A1.5 1.5 0 0 0 4.5 13zm-7-1a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5zm4-2a.5.5 0 0 0 0-1V7H9a.5.5 0 0 0 1 0v-.5a.5.5 0 0 0-.4-.49L9.5 6h-3a.5.5 0 0 0-.49.4L6 6.5V7a.5.5 0 0 0 1 0h.5v2a.5.5 0 0 0 0 1z",
    }),
  })
})
/**
 * Original function: $$E1
 * Gets the display information for a variable type, including name and icons.
 * @param variableType The variable type (enum or string).
 * @param isAlternateIcon Flag to choose alternate icon.
 * @returns Object containing name, iconUI2, and IconUI3.
 */
export function getVariableTypeInfo(variableType: VariableResolvedDataType | string, isAlternateIcon?: boolean) {
  switch (variableType) {
    case VariableResolvedDataType.STRING:
    case "STRING":
      return {
        name: getI18nString("variables.type.string"),
        iconUI2: _$$A7,
        IconUI3: isAlternateIcon ? a : _$$p,
      }
    case VariableResolvedDataType.BOOLEAN:
    case "BOOLEAN":
      return {
        name: getI18nString("variables.type.boolean"),
        iconUI2: _$$A,
        IconUI3: isAlternateIcon ? X : $,
      }
    case VariableResolvedDataType.FLOAT:
    case "FLOAT":
      return {
        name: getI18nString("variables.type.number"),
        iconUI2: _$$A5,
        IconUI3: isAlternateIcon ? _$$c : O,
      }
    case VariableResolvedDataType.COLOR:
    case "COLOR":
      return {
        name: getI18nString("variables.type.color"),
        iconUI2: _$$A3,
        IconUI3: isAlternateIcon ? E : G,
      }
    case VariableResolvedDataType.MAP:
    case "MAP":
      console.error("Unexpected variable type shown: MAP")
      return {
        name: getI18nString("variables.type.map"),
        iconUI2: _$$A,
        IconUI3: X,
      }
    case VariableResolvedDataType.SYMBOL_ID:
    case "SYMBOL_ID":
      console.error("Unexpected variable type shown: SYMBOL_ID")
      return {
        name: getI18nString("variables.type.symbolid"),
        iconUI2: _$$A,
        IconUI3: X,
      }
    case VariableResolvedDataType.FONT_STYLE:
    case "FONT_STYLE":
      console.error("Unexpected variable type shown: FONT_STYLE")
      return {
        name: getI18nString("variables.type.font_style"),
        iconUI2: _$$A,
        IconUI3: X,
      }
    case VariableResolvedDataType.TEXT_DATA:
    case "TEXT_DATA":
      console.error("Unexpected variable type shown: TEXT_DATA")
      return {
        name: getI18nString("variables.type.text_data"),
        iconUI2: _$$A7,
        IconUI3: a,
      }
    case VariableResolvedDataType.IMAGE:
    case "IMAGE":
      console.error("Unexpected variable type shown: IMAGE")
      return {
        name: getI18nString("variables.type.map"),
        iconUI2: _$$A,
        IconUI3: X,
      }
    case VariableResolvedDataType.LINK:
    case "LINK":
      console.error("Unexpected variable type shown: LINK")
      return {
        name: getI18nString("variables.type.map"),
        iconUI2: _$$A,
        IconUI3: X,
      }
    case VariableResolvedDataType.JS_RUNTIME_ALIAS:
    case "JS_RUNTIME_ALIAS":
      console.error("Unexpected variable type shown: JS_RUNTIME_ALIAS")
      return {
        name: getI18nString("variables.type.map"),
        iconUI2: _$$A,
        IconUI3: X,
      }
    case "SLOT_CONTENT_ID":
    case VariableResolvedDataType.SLOT_CONTENT_ID:
      console.error("Unexpected variable type shown: SLOT_CONTENT_ID")
      return {
        name: getI18nString("variables.type.map"),
        iconUI2: _$$A,
        IconUI3: X,
      }
    default:
      throwTypeError(variableType, "Unknown VariableResolvedDataType")
  }
}

/**
 * Original function: $$x0
 * Gets the icon component for a variable type.
 * @param variableType The variable type.
 * @returns The icon component.
 */
export function getVariableTypeIcon(variableType: VariableResolvedDataType | string) {
  switch (variableType) {
    case VariableResolvedDataType.BOOLEAN:
      return _$$A2
    case VariableResolvedDataType.COLOR:
      return _$$A4
    case VariableResolvedDataType.FLOAT:
      return _$$A6
    case VariableResolvedDataType.STRING:
      return _$$A8
    case VariableResolvedDataType.MAP:
    case VariableResolvedDataType.SYMBOL_ID:
    case VariableResolvedDataType.FONT_STYLE:
    case VariableResolvedDataType.TEXT_DATA:
    case VariableResolvedDataType.IMAGE:
    case VariableResolvedDataType.LINK:
    case VariableResolvedDataType.JS_RUNTIME_ALIAS:
    case VariableResolvedDataType.SLOT_CONTENT_ID:
      return _$$A2
    default:
      throwTypeError(variableType, "Unknown VariableResolvedDataType")
  }
}

export const U = getVariableTypeIcon
export const F = getVariableTypeInfo
