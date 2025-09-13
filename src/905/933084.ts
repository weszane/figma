// File: /Users/allen/sigma-main/src/905/933084.ts
// This file contains constants and mappings related to node types, styles, and various configuration values,
// likely for a design or prototyping tool (e.g., Figma-like). The code has been refactored for better readability,
// maintainability, and logical grouping. Original variable names are preserved in comments for traceability.
// Functionality remains identical to the original.

// Time-related regex pattern
export const timeRegex = /^(\d+:\d+)|(I(\d+:\d+;)*(\d+:\d+))|(T(\d+:\d+;+\d+:\d+;+\d+:\d+))$/ // Original: $$n29

// Node type mappings: Array of objects mapping node types to their creation methods
export const nodeTypeMappings = [
  { nodeType: 'RECTANGLE', createMethod: 'createRectangle' },
  { nodeType: 'CANVAS', createMethod: 'createPage' },
  { nodeType: 'SLICE', createMethod: 'createSlice' },
  { nodeType: 'FRAME', createMethod: 'createFrame' },
  { nodeType: 'SYMBOL', createMethod: 'createComponent' },
  { nodeType: 'BOOLEAN_OPERATION', createMethod: 'createBooleanOperation' },
  { nodeType: 'VECTOR', createMethod: 'createVector' },
  { nodeType: 'STAR', createMethod: 'createStar' },
  { nodeType: 'LINE', createMethod: 'createLine' },
  { nodeType: 'ELLIPSE', createMethod: 'createEllipse' },
  { nodeType: 'REGULAR_POLYGON', createMethod: 'createPolygon' },
  { nodeType: 'TEXT', createMethod: 'createText' },
  { nodeType: 'STICKY', createMethod: 'createSticky' },
  { nodeType: 'CONNECTOR', createMethod: 'createConnector' },
  { nodeType: 'SHAPE_WITH_TEXT', createMethod: 'createShapeWithText' },
  { nodeType: 'CODE_BLOCK', createMethod: 'createCodeBlock' },
  { nodeType: 'SECTION', createMethod: 'createSection' },
  { nodeType: 'TABLE', createMethod: 'createTable' },
  { nodeType: 'SLIDE', createMethod: 'createSlide' },
  { nodeType: 'SLIDE_ROW', createMethod: 'createSlideRow' },
] // Original: $$r23

// Style type mappings: Array of objects mapping style types to their methods
export const styleTypeMappings = [
  {
    styleType: 'FILL',
    createMethod: 'createPaintStyle',
    getMethod: 'getLocalPaintStyles',
    getMethodAsync: 'getLocalPaintStylesAsync',
    moveMethod: 'moveLocalPaintStyleAfter',
    moveFolderMethod: 'moveLocalPaintFolderAfter',
  },
  {
    styleType: 'TEXT',
    createMethod: 'createTextStyle',
    getMethod: 'getLocalTextStyles',
    getMethodAsync: 'getLocalTextStylesAsync',
    moveMethod: 'moveLocalTextStyleAfter',
    moveFolderMethod: 'moveLocalTextFolderAfter',
  },
  {
    styleType: 'GRID',
    createMethod: 'createGridStyle',
    getMethod: 'getLocalGridStyles',
    getMethodAsync: 'getLocalGridStylesAsync',
    moveMethod: 'moveLocalGridStyleAfter',
    moveFolderMethod: 'moveLocalGridFolderAfter',
  },
  {
    styleType: 'EFFECT',
    createMethod: 'createEffectStyle',
    getMethod: 'getLocalEffectStyles',
    getMethodAsync: 'getLocalEffectStylesAsync',
    moveMethod: 'moveLocalEffectStyleAfter',
    moveFolderMethod: 'moveLocalEffectFolderAfter',
  },
] // Original: $$a13

// Widget-related constant
export const localWidgetCodeMD5Key = 'localWidgetCodeMD5' // Original: $$s19

// Node type categories: Arrays grouping specific node types
export const canvasNodes = ['CANVAS'] // Original: o
export const mediaNodes = ['STICKY', 'SHAPE_WITH_TEXT', 'CONNECTOR', 'CODE_BLOCK', 'TABLE', 'MEDIA'] // Original: l
export const slideNodes = ['SLIDE', 'SLIDE_GRID', 'SLIDE_ROW', 'INTERACTIVE_SLIDE_ELEMENT'] // Original: d
export const webpageNodes = ['WEBPAGE'] // Original: c

// Combined node type arrays for different purposes
export const combinedNodes1 = [...canvasNodes, ...slideNodes, ...webpageNodes, 'SYMBOL'] // Original: $$u22
export const combinedNodes2 = [...mediaNodes, ...slideNodes, ...webpageNodes] // Original: $$p28
export const combinedNodes3 = [...canvasNodes, ...mediaNodes, ...webpageNodes, 'SYMBOL'] // Original: $$m6
export const combinedNodes4 = [...canvasNodes, ...mediaNodes, ...slideNodes] // Original: $$h25
export const combinedNodes5 = [...canvasNodes, ...mediaNodes, ...webpageNodes, 'SLIDE', 'INTERACTIVE_SLIDE_ELEMENT'] // Original: $$g20

// Numerical constants: Various thresholds, limits, and default values
export const epsilon = 0.01 // Original: $$f30
export const defaultSize = 20 // Original: $$_5
export const offsetValue = -0.5 // Original: $$A4
export const maxHeight = 20 // Original: $$y31
export const minBound = -30000 // Original: $$b18
export const maxBound = 30000 // Original: $$v32
export const zeroValue = 0 // Original: $$I14
export const defaultWidth = 250 // Original: $$E2
export const defaultX = 100 // Original: $$x9
export const defaultY = 100 // Original: $$S26
export const defaultZ = 100 // Original: $$w17
export const minOpacity = 0 // Original: $$C11
export const maxOpacity = 1 // Original: $$T12
export const minScale = 1 // Original: $$k8
export const maxScale = 100 // Original: $$R16
export const minRotation = 0 // Original: $$N1
export const maxRotation = 1 // Original: $$P27
export const minAlpha = 0 // Original: $$O3
export const maxAlpha = 100 // Original: $$D24
export const minValue = -899 // Original: $$L0
export const maxValue = 900 // Original: $$F10
export const minIndex = 0 // Original: $$M15
export const maxIndex = 1 // Original: $$j7

// Error messages: Strings for user-facing errors
export const glassEffectError1 = 'Glass effects can only be applied to non-group frames.' // Original: $$U33
export const glassEffectError2 = 'Only one glass effect is allowed per node.' // Original: $$B21

// Exports: Maintaining original export names for compatibility, but now referencing refactored internal variables
export const $$ = minValue
export const $x = minRotation
export const DW = defaultWidth
export const Df = minAlpha
export const IF = offsetValue
export const Iz = defaultSize
export const J6 = combinedNodes3
export const Jk = maxIndex
export const Ku = minScale
export const Mo = defaultX
export const NH = maxValue
export const SU = minOpacity
export const U_ = maxOpacity
export const Ut = styleTypeMappings
export const V8 = zeroValue
export const VL = minIndex
export const Wp = maxScale
export const XX = defaultZ
export const cT = minBound
export const cz = localWidgetCodeMD5Key
export const e1 = combinedNodes5
export const eM = glassEffectError2
export const fx = combinedNodes1
export const h2 = nodeTypeMappings
export const hD = maxAlpha
export const lm = combinedNodes4
export const mx = defaultY
export const rY = maxRotation
export const tO = combinedNodes2
export const vs = timeRegex
export const wU = epsilon
export const yR = maxHeight
export const yj = maxBound
export const zd = glassEffectError1
