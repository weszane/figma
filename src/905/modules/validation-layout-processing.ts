// Phase 24: Advanced Validation and Layout Processing Systems
// Extracted from 472793.ts - validation utilities, layout grid processing, export settings, and geometry functions

import { Color, VariableAlias } from "./paint-management"

// Import required dependencies (from main file)
declare const _$$k2: any
declare const iE: any
declare const Kb: any
declare const JI: any
declare const _$$F2: any
declare const _$$sH: any

// Interfaces for Validation and Layout Processing
export interface ValidationConfig {
  min: number
  max: number
  propertyName: string
  warnOnClamp: boolean
}

export interface ExportSettings {
  format: string
  suffix: string
  contentsOnly: boolean
  constraint: {
    type: string
    value: number
  }
  useAbsoluteBounds: boolean
  svgOutlineText: boolean
  svgIdAttribute: boolean
  svgSimplifyStroke: boolean
  colorProfile: string
  quality: number
}

export interface ProcessedExportSettings {
  imageType: string
  suffix: string
  contentsOnly: boolean
  constraint: {
    type: string
    value: number
  }
  useAbsoluteBounds: boolean
  svgOutlineText: boolean
  svgForceStrokeMasks: boolean
  svgIDMode: string
  colorProfile: string
  quality: number
}

export interface TextDecorationUnit {
  unit: 'AUTO' | 'PERCENT' | 'PIXELS'
  value?: number
}

export interface TextDecorationLegacy {
  units: 'RAW' | 'PERCENT' | 'PIXELS'
  value: number
}

export interface ListType {
  type: 'NONE' | 'ORDERED' | 'UNORDERED'
}

export interface GridLayoutConfig {
  pattern: string
  axis?: string
  numSections?: number
  type?: any
  gutterSize?: any
  sectionSize?: any
  offset?: any
  visible: boolean
  color: Color
  numSectionsVar?: any
  sectionSizeVar?: any
  offsetVar?: any
  gutterSizeVar?: any
  boundVariables?: VariableAlias
  alignment?: string
  count?: number
}

export interface GeometryObject {
  x: number
  y: number
  width: number
  height: number
}

// Advanced Validation and Constraints Manager
export class AdvancedValidationManager {
  // Validate and clamp glass effect values (original iS function)
  validateGlassEffectValue(
    value: number,
    min: number,
    max: number,
    propertyName: string
  ): number {
    if (value > max) {
      _$$k2.warn(`Glass effect ${propertyName} of ${value} is too large and will be clamped to ${max}`)
    } else if (value < min) {
      _$$k2.warn(`Glass effect ${propertyName} of ${value} is too small and will be clamped to ${min}`)
    }
    return iE(value, min, max)
  }

  // Validate numeric range with custom warning messages
  validateNumericRange(
    value: number,
    config: ValidationConfig
  ): number {
    if (config.warnOnClamp) {
      if (value > config.max) {
        _$$k2.warn(`${config.propertyName} value of ${value} exceeds maximum ${config.max} and will be clamped`)
      } else if (value < config.min) {
        _$$k2.warn(`${config.propertyName} value of ${value} is below minimum ${config.min} and will be clamped`)
      }
    }
    return iE(value, config.min, config.max)
  }

  // Validate array bounds
  validateArrayBounds<T>(items: T[], maxLength: number, propertyName: string): T[] {
    if (items.length > maxLength) {
      _$$k2.warn(`${propertyName} array length ${items.length} exceeds maximum ${maxLength} and will be truncated`)
      return items.slice(0, maxLength)
    }
    return items
  }

  // Validate object properties
  validateObjectProperties(obj: any, requiredProps: string[]): boolean {
    const missingProps = requiredProps.filter(prop => !(prop in obj))
    if (missingProps.length > 0) {
      _$$k2.warn(`Missing required properties: ${missingProps.join(', ')}`)
      return false
    }
    return true
  }
}

// Advanced Export Settings Processor
export class AdvancedExportProcessor {
  // Process export settings array (original iw function)
  processExportSettings(exportSettings: any[]): ProcessedExportSettings[] {
    const defaultSettings = {
      suffix: '',
      contentsOnly: true,
      constraint: {
        type: 'SCALE',
        value: 1,
      },
      useAbsoluteBounds: false,
      svgOutlineText: true,
      svgIdAttribute: false,
      svgSimplifyStroke: true,
      colorProfile: 'DOCUMENT',
      quality: 1,
    }

    return exportSettings.map((setting) => {
      const processed = Kb(setting, defaultSettings)
      return {
        imageType: processed.format === 'JPG' ? 'JPEG' : processed.format,
        suffix: processed.suffix,
        contentsOnly: processed.contentsOnly,
        constraint: {
          type: `CONTENT_${processed.constraint.type}`,
          value: processed.constraint.value,
        },
        useAbsoluteBounds: processed.useAbsoluteBounds,
        svgOutlineText: processed.svgOutlineText,
        svgForceStrokeMasks: !processed.svgSimplifyStroke,
        svgIDMode: processed.svgIdAttribute ? 'ALWAYS' : 'IF_NEEDED',
        colorProfile: processed.colorProfile,
        quality: processed.format === 'PDF' ? JI : 1,
      }
    })
  }

  // Validate export format
  validateExportFormat(format: string): boolean {
    const validFormats = ['PNG', 'JPG', 'JPEG', 'SVG', 'PDF']
    return validFormats.includes(format.toUpperCase())
  }

  // Get default quality for format
  getDefaultQuality(format: string): number {
    switch (format.toUpperCase()) {
      case 'PDF':
        return JI
      case 'JPG':
      case 'JPEG':
        return 0.8
      default:
        return 1
    }
  }
}

// Advanced Text Decoration Unit Converter
export class AdvancedTextDecorationConverter {
  // Convert text decoration offset from modern to legacy (original iR function)
  convertTextDecorationOffsetToLegacy(modernOffset: TextDecorationUnit): TextDecorationLegacy {
    if (modernOffset.unit === 'AUTO') {
      return {
        units: 'RAW',
        value: 10,
      }
    }

    if (modernOffset.unit === 'PERCENT') {
      return {
        units: 'PERCENT',
        value: modernOffset.value || 0,
      }
    }

    if (modernOffset.unit === 'PIXELS') {
      return {
        units: 'PIXELS',
        value: modernOffset.value || 0,
      }
    }

    throw new Error('Unknown textDecorationOffset unit')
  }

  // Convert text decoration thickness from legacy to modern (original iN function)
  convertTextDecorationThicknessFromLegacy(legacyThickness: TextDecorationLegacy): TextDecorationUnit {
    if (legacyThickness.units === 'RAW') {
      return {
        unit: 'AUTO',
      }
    }

    if (legacyThickness.units === 'PERCENT') {
      return {
        unit: 'PERCENT',
        value: legacyThickness.value,
      }
    }

    if (legacyThickness.units === 'PIXELS') {
      return {
        unit: 'PIXELS',
        value: legacyThickness.value,
      }
    }

    throw new Error('Unknown textDecorationThickness unit')
  }

  // Convert text decoration thickness from modern to legacy (original iP function)
  convertTextDecorationThicknessToLegacy(modernThickness: TextDecorationUnit): TextDecorationLegacy {
    if (modernThickness.unit === 'AUTO') {
      return {
        units: 'RAW',
        value: 10,
      }
    }

    if (modernThickness.unit === 'PERCENT') {
      return {
        units: 'PERCENT',
        value: modernThickness.value || 0,
      }
    }

    if (modernThickness.unit === 'PIXELS') {
      return {
        units: 'PIXELS',
        value: modernThickness.value || 0,
      }
    }

    throw new Error('Unknown textDecorationThickness unit')
  }

  // Validate unit type
  validateUnit(unit: string): boolean {
    return ['AUTO', 'PERCENT', 'PIXELS'].includes(unit)
  }

  // Validate legacy unit type
  validateLegacyUnit(unit: string): boolean {
    return ['RAW', 'PERCENT', 'PIXELS'].includes(unit)
  }
}

// Advanced Layout and List Processor
export class AdvancedLayoutProcessor {
  // Convert list option to list type (original iO function)
  convertListOption(listOption: string): ListType {
    let type: 'NONE' | 'ORDERED' | 'UNORDERED' = 'NONE'

    if (listOption === 'ORDERED_LIST') {
      type = 'ORDERED'
    } else if (listOption === 'UNORDERED_LIST') {
      type = 'UNORDERED'
    } else if (listOption === 'PLAIN') {
      type = 'NONE'
    } else {
      throw new Error('Unknown list option')
    }

    return {
      type,
    }
  }

  // Process grid layout configuration (original iL function)
  processGridLayout(gridConfig: any): GridLayoutConfig {
    const defaultConfig = {
      alignment: 'STRETCH',
      count: 5,
      gutterSize: 20,
      sectionSize: 10,
      offset: 0,
      visible: true,
      color: {
        r: 1,
        g: 0,
        b: 0,
        a: 0.1,
      },
    }

    const processedConfig = Kb(gridConfig, defaultConfig)

    const result: GridLayoutConfig = {
      pattern: processedConfig.pattern === 'COLUMNS' || processedConfig.pattern === 'ROWS' ? 'STRIPES' : processedConfig.pattern,
      axis: processedConfig.pattern === 'COLUMNS' ? 'X' : 'Y',
      numSections: Math.min(processedConfig.count, _$$F2),
      type: processedConfig.alignment,
      gutterSize: processedConfig.gutterSize,
      sectionSize: processedConfig.sectionSize,
      offset: processedConfig.offset,
      visible: processedConfig.visible,
      color: processedConfig.color,
    }

    // Process bound variables if they exist
    if (gridConfig.boundVariables) {
      if (gridConfig.boundVariables?.count?.id) {
        result.numSectionsVar = {
          dataType: 'ALIAS',
          resolvedDataType: 'FLOAT',
          value: {
            alias: _$$sH(gridConfig.boundVariables.count.id),
          },
        }
      }

      if (gridConfig.boundVariables?.sectionSize?.id) {
        result.sectionSizeVar = {
          dataType: 'ALIAS',
          resolvedDataType: 'FLOAT',
          value: {
            alias: _$$sH(gridConfig.boundVariables.sectionSize.id),
          },
        }
      }

      if (gridConfig.boundVariables?.offset?.id) {
        result.offsetVar = {
          dataType: 'ALIAS',
          resolvedDataType: 'FLOAT',
          value: {
            alias: _$$sH(gridConfig.boundVariables.offset.id),
          },
        }
      }

      if (gridConfig.boundVariables?.gutterSize?.id) {
        result.gutterSizeVar = {
          dataType: 'ALIAS',
          resolvedDataType: 'FLOAT',
          value: {
            alias: _$$sH(gridConfig.boundVariables.gutterSize.id),
          },
        }
      }
    }

    return result
  }

  // Validate grid pattern
  validateGridPattern(pattern: string): boolean {
    const validPatterns = ['COLUMNS', 'ROWS', 'GRID', 'STRIPES']
    return validPatterns.includes(pattern)
  }

  // Validate alignment type
  validateAlignment(alignment: string): boolean {
    const validAlignments = ['STRETCH', 'CENTER', 'MIN', 'MAX']
    return validAlignments.includes(alignment)
  }
}

// Advanced Geometry Processor
export class AdvancedGeometryProcessor {
  vm: any

  constructor(vm: any) {
    this.vm = vm
  }

  // Create geometry object (original iF function)
  createGeometryObject(bounds: { x: number; y: number; w: number; h: number }): any {
    const geometryObj = this.vm.newObject()
    this.vm.setProp(geometryObj, 'x', this.vm.newNumber(bounds.x))
    this.vm.setProp(geometryObj, 'y', this.vm.newNumber(bounds.y))
    this.vm.setProp(geometryObj, 'width', this.vm.newNumber(bounds.w))
    this.vm.setProp(geometryObj, 'height', this.vm.newNumber(bounds.h))
    return geometryObj
  }

  // Validate bounds
  validateBounds(bounds: any): boolean {
    return (
      typeof bounds.x === 'number' &&
      typeof bounds.y === 'number' &&
      typeof bounds.w === 'number' &&
      typeof bounds.h === 'number' &&
      bounds.w >= 0 &&
      bounds.h >= 0
    )
  }

  // Calculate area
  calculateArea(bounds: { w: number; h: number }): number {
    return bounds.w * bounds.h
  }

  // Calculate aspect ratio
  calculateAspectRatio(bounds: { w: number; h: number }): number {
    return bounds.h === 0 ? 0 : bounds.w / bounds.h
  }

  // Check if bounds are within container
  isWithinContainer(
    bounds: { x: number; y: number; w: number; h: number },
    container: { x: number; y: number; w: number; h: number }
  ): boolean {
    return (
      bounds.x >= container.x &&
      bounds.y >= container.y &&
      bounds.x + bounds.w <= container.x + container.w &&
      bounds.y + bounds.h <= container.y + container.h
    )
  }
}

// Utility Functions for Validation and Layout
export class ValidationLayoutUtilities {
  // Safe numeric conversion with validation
  static safeNumericConversion(value: any, fallback: number = 0): number {
    const numValue = Number(value)
    return isNaN(numValue) ? fallback : numValue
  }

  // Validate color object
  static validateColor(color: any): boolean {
    return (
      color &&
      typeof color === 'object' &&
      typeof color.r === 'number' &&
      typeof color.g === 'number' &&
      typeof color.b === 'number' &&
      typeof color.a === 'number' &&
      color.r >= 0 && color.r <= 1 &&
      color.g >= 0 && color.g <= 1 &&
      color.b >= 0 && color.b <= 1 &&
      color.a >= 0 && color.a <= 1
    )
  }

  // Normalize percentage value
  static normalizePercentage(value: number): number {
    return Math.max(0, Math.min(100, value))
  }

  // Convert degrees to radians
  static degreesToRadians(degrees: number): number {
    return (degrees * Math.PI) / 180
  }

  // Convert radians to degrees
  static radiansToDegrees(radians: number): number {
    return (radians * 180) / Math.PI
  }

  // Deep merge objects
  static deepMerge(target: any, source: any): any {
    const result = { ...target }
    for (const key in source) {
      if (source[key] && typeof source[key] === 'object' && !Array.isArray(source[key])) {
        result[key] = this.deepMerge(result[key] || {}, source[key])
      } else {
        result[key] = source[key]
      }
    }
    return result
  }
}

// Factory functions for creating instances
export function createAdvancedValidationManager(): AdvancedValidationManager {
  return new AdvancedValidationManager()
}

export function createAdvancedExportProcessor(): AdvancedExportProcessor {
  return new AdvancedExportProcessor()
}

export function createAdvancedTextDecorationConverter(): AdvancedTextDecorationConverter {
  return new AdvancedTextDecorationConverter()
}

export function createAdvancedLayoutProcessor(): AdvancedLayoutProcessor {
  return new AdvancedLayoutProcessor()
}

export function createAdvancedGeometryProcessor(vm: any): AdvancedGeometryProcessor {
  return new AdvancedGeometryProcessor(vm)
}

// Main wrapper function that provides all validation and layout processing functions
export function createValidationLayoutProcessingNew(vm: any): {
  validateGlassEffectValue: (value: number, min: number, max: number, propertyName: string) => number
  processExportSettings: (exportSettings: any[]) => ProcessedExportSettings[]
  convertTextDecorationOffsetToLegacy: (modernOffset: TextDecorationUnit) => TextDecorationLegacy
  convertTextDecorationThicknessFromLegacy: (legacyThickness: TextDecorationLegacy) => TextDecorationUnit
  convertTextDecorationThicknessToLegacy: (modernThickness: TextDecorationUnit) => TextDecorationLegacy
  convertListOption: (listOption: string) => ListType
  processGridLayout: (gridConfig: any) => GridLayoutConfig
  createGeometryObject: (bounds: { x: number; y: number; w: number; h: number }) => any
} {
  const validationManager = createAdvancedValidationManager()
  const exportProcessor = createAdvancedExportProcessor()
  const textDecorationConverter = createAdvancedTextDecorationConverter()
  const layoutProcessor = createAdvancedLayoutProcessor()
  const geometryProcessor = createAdvancedGeometryProcessor(vm)

  return {
    validateGlassEffectValue: (value: number, min: number, max: number, propertyName: string) =>
      validationManager.validateGlassEffectValue(value, min, max, propertyName),
    processExportSettings: (exportSettings: any[]) => exportProcessor.processExportSettings(exportSettings),
    convertTextDecorationOffsetToLegacy: (modernOffset: TextDecorationUnit) =>
      textDecorationConverter.convertTextDecorationOffsetToLegacy(modernOffset),
    convertTextDecorationThicknessFromLegacy: (legacyThickness: TextDecorationLegacy) =>
      textDecorationConverter.convertTextDecorationThicknessFromLegacy(legacyThickness),
    convertTextDecorationThicknessToLegacy: (modernThickness: TextDecorationUnit) =>
      textDecorationConverter.convertTextDecorationThicknessToLegacy(modernThickness),
    convertListOption: (listOption: string) => layoutProcessor.convertListOption(listOption),
    processGridLayout: (gridConfig: any) => layoutProcessor.processGridLayout(gridConfig),
    createGeometryObject: (bounds: { x: number; y: number; w: number; h: number }) =>
      geometryProcessor.createGeometryObject(bounds)
  }
}
