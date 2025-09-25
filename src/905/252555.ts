import { noop } from '../figma_app/465776'

/**
 * NodeTypeMap - Original: $$r2
 * Maps node type names to their short codes.
 */
export const NodeTypeMap = {
  NONE: 'NONE',
  DOCUMENT: 'DOC',
  CANVAS: 'CANV',
  GROUP: 'GROUP',
  FRAME: 'FRAME',
  BOOLEAN_OPERATION: 'BOOL',
  VECTOR: 'VECT',
  STAR: 'STAR',
  LINE: 'LINE',
  ELLIPSE: 'ELLPS',
  RECTANGLE: 'RECT',
  REGULAR_POLYGON: 'POLY',
  ROUNDED_RECTANGLE: 'RRECT',
  TEXT: 'TEXT',
  TEXT_PATH: 'TXPTH',
  SLICE: 'SLICE',
  SYMBOL: 'SYMB',
  STATE: 'STATE',
  PRIMARY_INSTANCE: 'PINST',
  NESTED_INSTANCE: 'NINST',
  STICKY: 'STCKY',
  SHAPE_WITH_TEXT: 'SWTXT',
  CONNECTOR: 'CONN',
  CODE_BLOCK: 'CODE',
  WIDGET: 'WIDGT',
  STAMP: 'STAMP',
  MEDIA: 'MEDIA',
  HIGHLIGHT: 'HIGH',
  SECTION: 'SECT',
  SECTION_OVERLAY: 'SECTO',
  WASHI_TAPE: 'WASHI',
  STATE_GROUP: 'STGRP',
  FILL_STYLE: 'FSTYL',
  STROKE_STYLE: 'SSTYL',
  TEXT_STYLE: 'TSTYL',
  EFFECT_STYLE: 'ESTYL',
  EXPORT_STYLE: 'XSTYL',
  GRID_STYLE: 'GSTYL',
  VARIABLE: 'VAR',
  VARIABLE_COLLECTION: 'V_COL',
  VARIABLE_OVERRIDE: 'V_OVR',
  TABLE: 'TABLE',
  TABLE_CELL: 'TCELL',
  SLIDE: 'SLIDE',
  SLIDE_ROW: 'SROW',
  SLIDE_GRID: 'SGRID',
  ASSISTED_LAYOUT: 'ALAYO',
  INTERACTIVE_SLIDE_ELEMENT: 'FLAPP',
  MODULE: 'MOD',
  RESPONSIVE_SET: 'RESET',
  CODE_LIBRARY: '<LIB>',
  CODE_FILE: '<FIL>',
  CODE_COMPONENT: '<COM>',
  CODE_INSTANCE: '<INS>',
  JOURNAL_ENTRY: 'JRNL',
  DIFF_CHUNK: 'CHUNK',
  CODE_LAYER: '<LAY>',
  BRUSH: 'BRUSH',
  MANAGED_STRING: 'MGSTR',
  TRANSFORM: 'TRSFM',
  CMS_RICH_TEXT: 'CRTXT',
  REPEATER: 'RPTR',
  JSX: 'JSX',
  EMBEDDED_PROTOTYPE: 'PROTO',
  REACT_FIBER: 'FIBER',
  RESPONSIVE_NODE_SET: 'RNS',
  WEBPAGE: 'WEBP',
} as const

/**
 * AppDomain - Original: $$a0
 * Enum for application domains.
 */
export enum AppDomain {
  DesignSystems = 0,
  FigJam = 1,
  Editor = 2,
  Page = 3,
  Other = 4,
}

/**
 * getNodeTypeDomain - Original: $$s1
 * Returns the domain index for a given node type.
 * @param nodeType - The node type name.
 * @returns Domain index (number).
 */
export function getNodeTypeDomain(nodeType: keyof typeof NodeTypeMap | string): number {
  switch (nodeType) {
    case 'CODE_COMPONENT':
    case 'CODE_INSTANCE':
    case 'CODE_LIBRARY':
    case 'CODE_FILE':
    case 'CODE_LAYER':
    case 'EFFECT_STYLE':
    case 'EXPORT_STYLE':
    case 'FILL_STYLE':
    case 'GRID_STYLE':
    case 'MODULE':
    case 'NESTED_INSTANCE':
    case 'PRIMARY_INSTANCE':
    case 'STATE_GROUP':
    case 'STATE':
    case 'STROKE_STYLE':
    case 'SYMBOL':
    case 'TEXT_STYLE':
    case 'VARIABLE_COLLECTION':
    case 'VARIABLE_OVERRIDE':
    case 'VARIABLE':
      return AppDomain.DesignSystems
    case 'BOOLEAN_OPERATION':
    case 'BRUSH':
    case 'ELLIPSE':
    case 'LINE':
    case 'RECTANGLE':
    case 'REGULAR_POLYGON':
    case 'ROUNDED_RECTANGLE':
    case 'STAR':
    case 'VECTOR':
      return AppDomain.Editor
    case 'CODE_BLOCK':
    case 'CONNECTOR':
    case 'HIGHLIGHT':
    case 'MEDIA':
    case 'SECTION_OVERLAY':
    case 'SHAPE_WITH_TEXT':
    case 'STAMP':
    case 'STICKY':
    case 'TABLE':
    case 'WASHI_TAPE':
      return AppDomain.FigJam
    case 'CANVAS':
    case 'DIFF_CHUNK':
    case 'DOCUMENT':
    case 'JOURNAL_ENTRY':
      return AppDomain.Page
    case 'ASSISTED_LAYOUT':
    case 'FRAME':
    case 'GROUP':
    case 'INTERACTIVE_SLIDE_ELEMENT':
    case 'NONE':
    case 'RESPONSIVE_SET':
    case 'SECTION':
    case 'SLICE':
    case 'SLIDE_GRID':
    case 'SLIDE_ROW':
    case 'SLIDE':
    case 'TABLE_CELL':
    case 'TEXT_PATH':
    case 'TEXT':
    case 'WIDGET':
    case 'MANAGED_STRING':
    case 'TRANSFORM':
    case 'CMS_RICH_TEXT':
    case 'REPEATER':
    case 'JSX':
    case 'EMBEDDED_PROTOTYPE':
    case 'REACT_FIBER':
    case 'RESPONSIVE_NODE_SET':
    case 'WEBPAGE':
      return AppDomain.Other
    default:
      // Original: noop(e)
      noop(nodeType)
      return AppDomain.Other
  }
}

// Refactored exports for clarity and traceability
export const SP = AppDomain
export const p7 = getNodeTypeDomain
export const uy = NodeTypeMap
