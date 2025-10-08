import { createFileBehaviorAtom, createWritableFileBehaviorAtom, FileChangeBehaviorEnum } from "../905/508457"
import { getFeatureFlags } from "../905/601108"
import { g5 } from "../905/888175"
import { blackSolidBorder, borderRadius, borderWidth, getStickyColor, grayBaseLight, grayDarkParsed, highlightBorder, solidBorderStyle, whiteColorParsed, whiteSolidBorder } from "../figma_app/285009"
import { rA } from "../figma_app/463678"
import { DesignGraphElements, Fullscreen, ShapeSidebarMode } from "../figma_app/763686"

// Original: $$d3
/** Atom for managing some state that resets on file change. */
export const someStateAtom = createFileBehaviorAtom(null, {
  changeFileBehavior: FileChangeBehaviorEnum.RESET_VALUE_ON_FILE_CHANGE,
})

// Original: $$c1
/** Atom for managing a counter or total value that resets on file change. */
export const counterAtom = createFileBehaviorAtom({
  total: 0,
}, {
  changeFileBehavior: FileChangeBehaviorEnum.RESET_VALUE_ON_FILE_CHANGE,
  equalityFn: Object.is,
})

// Original: $$u0
/** Atom for managing current selection that resets on file change. */
export const currentSelectionAtom = createFileBehaviorAtom(null, {
  changeFileBehavior: FileChangeBehaviorEnum.RESET_VALUE_ON_FILE_CHANGE,
})

// Original: $$p9
/** Atom for managing a map of elements that resets on file change. */
export const elementsMapAtom = createFileBehaviorAtom(new Map(), {
  changeFileBehavior: FileChangeBehaviorEnum.RESET_VALUE_ON_FILE_CHANGE,
})

// Original: $$m15
/** Atom for managing a set of elements that resets on file change. */
export const elementsSetAtom = createFileBehaviorAtom(new Set(), {
  changeFileBehavior: FileChangeBehaviorEnum.RESET_VALUE_ON_FILE_CHANGE,
})

// Original: $$h13
/** Atom for managing another set of elements that resets on file change. */
export const anotherElementsSetAtom = createFileBehaviorAtom(new Set(), {
  changeFileBehavior: FileChangeBehaviorEnum.RESET_VALUE_ON_FILE_CHANGE,
})

// Original: $$g19
/** Atom for managing configuration based on rA that resets on file change. */
export const configAtom = createFileBehaviorAtom({
  ...rA,
}, {
  changeFileBehavior: FileChangeBehaviorEnum.RESET_VALUE_ON_FILE_CHANGE,
})

// Original: $$f12
/** Atom for managing styles array that resets on file change. */
export const stylesAtom = createFileBehaviorAtom({
  styles: [],
}, {
  changeFileBehavior: FileChangeBehaviorEnum.RESET_VALUE_ON_FILE_CHANGE,
})

// Original: _ (anonymous function)
/** Gets the default border based on the preferred theme. */
function getDefaultBorder() {
  return (document.body.getAttribute("data-preferred-theme") || "light") === "dark" ? whiteSolidBorder : blackSolidBorder
}

// Drawing tool styles - shared across files

// Original: $$A2
/** Atom for managing vector pencil drawing style. */
export const vectorPencilStyleAtom = createWritableFileBehaviorAtom({
  paints: getDefaultBorder(),
  strokeWeight: borderWidth,
  strokeOpacity: borderRadius,
}, (e) => {
  Fullscreen?.updateDrawingStyle(e, DesignGraphElements.VECTOR_PENCIL)
}, {
  changeFileBehavior: FileChangeBehaviorEnum.SHARE_SAME_VALUE_FOR_ALL_FILES,
})

// Original: $$y7
/** Atom for managing brush drawing style. */
export const brushStyleAtom = createWritableFileBehaviorAtom({
  paints: getDefaultBorder(),
  strokeWeight: borderWidth,
  strokeOpacity: borderRadius,
}, (e) => {
  Fullscreen?.updateDrawingStyle(e, DesignGraphElements.BRUSH)
}, {
  changeFileBehavior: FileChangeBehaviorEnum.SHARE_SAME_VALUE_FOR_ALL_FILES,
})

// Original: $$b10
/** Atom for managing vector pen drawing style. */
export const vectorPenStyleAtom = createWritableFileBehaviorAtom({
  paints: getDefaultBorder(),
  strokeWeight: borderWidth,
  strokeOpacity: borderRadius,
}, (e) => {
  Fullscreen?.updateDrawingStyle(e, DesignGraphElements.VECTOR_PEN)
}, {
  changeFileBehavior: FileChangeBehaviorEnum.SHARE_SAME_VALUE_FOR_ALL_FILES,
})

// Original: $$v4
/** Atom for managing highlighter style. */
export const highlighterStyleAtom = createWritableFileBehaviorAtom({
  paints: highlightBorder,
  strokeWeight: g5,
}, e => Fullscreen?.updateHighlighterStyle(e), {
  changeFileBehavior: FileChangeBehaviorEnum.SHARE_SAME_VALUE_FOR_ALL_FILES,
})

// Tool colors and styles - shared across files

// Original: $$I16
/** Atom for managing sticky color. */
export const stickyColorAtom = createWritableFileBehaviorAtom(getStickyColor(), e => Fullscreen?.updateToolStyles({
  stickyColor: e,
}), {
  changeFileBehavior: FileChangeBehaviorEnum.SHARE_SAME_VALUE_FOR_ALL_FILES,
})

// Original: $$E11
/** Atom for managing shape color. */
export const shapeColorAtom = createWritableFileBehaviorAtom(whiteColorParsed, e => Fullscreen?.updateToolStyles({
  shapeColor: e,
}), {
  changeFileBehavior: FileChangeBehaviorEnum.SHARE_SAME_VALUE_FOR_ALL_FILES,
})

// Original: $$x14
/** Atom for managing stroke color, conditionally based on feature flag. */
export const strokeColorAtom = createWritableFileBehaviorAtom(grayDarkParsed, (e) => {
  getFeatureFlags().figjam_track_stroke_color && Fullscreen?.updateToolStyles({
    strokeColor: e,
  })
}, {
  changeFileBehavior: FileChangeBehaviorEnum.SHARE_SAME_VALUE_FOR_ALL_FILES,
})

// Original: $$S6
/** Atom for managing shape stroke style type. */
export const shapeStrokeStyleAtom = createWritableFileBehaviorAtom(solidBorderStyle, e => Fullscreen?.updateToolStyles({
  shapeStrokeStyleType: e,
}), {
  changeFileBehavior: FileChangeBehaviorEnum.SHARE_SAME_VALUE_FOR_ALL_FILES,
})

// Original: $$w17
/** Atom for managing connector tool color. */
export const connectorColorAtom = createWritableFileBehaviorAtom(grayBaseLight, e => Fullscreen?.updateToolStyles({
  connectorToolColor: e,
}), {
  changeFileBehavior: FileChangeBehaviorEnum.SHARE_SAME_VALUE_FOR_ALL_FILES,
})

// Original: $$C5
/** Atom for managing various tool styles (shape type, connector line style, end cap). */
export const toolStylesAtom = createWritableFileBehaviorAtom({
  shapeWithTextType: "ELLIPSE",
  connectorToolLineStyle: "ELBOWED",
  connectorToolEndCap: "ARROW_LINES",
}, e => Fullscreen?.updateToolStyles(e), {
  changeFileBehavior: FileChangeBehaviorEnum.SHARE_SAME_VALUE_FOR_ALL_FILES,
})

// Original: $$T18
/** Atom for managing some shared state across files. */
export const sharedStateAtom = createFileBehaviorAtom(null, {
  changeFileBehavior: FileChangeBehaviorEnum.SHARE_SAME_VALUE_FOR_ALL_FILES,
})

// Original: $$k8
/** Atom for managing shape sidebar mode that resets on file change. */
export const shapeSidebarModeAtom = createWritableFileBehaviorAtom(ShapeSidebarMode.NONE, (e) => {
  Fullscreen?.setCurrentToolSetSource(e)
}, {
  changeFileBehavior: FileChangeBehaviorEnum.RESET_VALUE_ON_FILE_CHANGE,
})

export const Ch = currentSelectionAtom
export const Fk = counterAtom
export const GI = vectorPencilStyleAtom
export const HV = someStateAtom
export const IZ = highlighterStyleAtom
export const SK = toolStylesAtom
export const U9 = shapeStrokeStyleAtom
export const Vi = brushStyleAtom
export const W6 = shapeSidebarModeAtom
export const Wy = elementsMapAtom
export const _o = vectorPenStyleAtom
export const ez = shapeColorAtom
export const gq = stylesAtom
export const hw = anotherElementsSetAtom
export const lC = strokeColorAtom
export const ml = elementsSetAtom
export const qL = stickyColorAtom
export const wp = connectorColorAtom
export const yE = sharedStateAtom
export const yo = configAtom
