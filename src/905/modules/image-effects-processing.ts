// Phase 23: Advanced Image Processing and Effects Management Systems
// Extracted from 472793.ts - image processing, effects management, and unit conversion utilities

import { IVariableData } from "./paint-management"

// Import required dependencies (from main file)
declare const vX: any
declare const eQ: any
declare const eJ: any
declare const getFeatureFlags: any
declare const _$$m: any


// Interfaces for Image Processing and Effects Management
export interface ImageProcessor {
  hash: Uint8Array
  getBytesAsync: () => Promise<Uint8Array>
  getSizeAsync: () => Promise<{ width: number; height: number }>
}

export interface EffectConfig {
  type: string
  visible: boolean
  radius?: number
  color?: any
  offset?: any
  spread?: any
  blendMode?: string
  showShadowBehindNode?: boolean
  noiseSize?: { x: number; y: number } | number
  clipToShape?: boolean
  noiseType?: 'DUOTONE' | 'MULTITONE' | 'MONOTONE'
  secondaryColor?: any
  density?: number
  opacity?: number
  refractionIntensity?: number
  refractionRadius?: number
  specularAngle?: number
  specularIntensity?: number
  chromaticAberration?: number
  blurType?: string
  startRadius?: number
  startOffset?: any
  endOffset?: any
  boundVariables?: any
  spreadVar?: IVariableData
  colorVar?: IVariableData
  radiusVar?: IVariableData
  xVar?: IVariableData
  yVar?: IVariableData
  blurOpType?: string

  refraction?: number
  depth?: number
  lightAngle?: number
  lightIntensity?: number
  dispersion?: number
}

export interface LineHeightUnit {
  unit: 'AUTO' | 'PERCENT' | 'PIXELS'
  value?: number
}

export interface LineHeightLegacy {
  units: 'PERCENT' | 'RAW' | 'PIXELS'
  value: number
}

export interface LetterSpacingUnit {
  unit: 'AUTO' | 'PERCENT' | 'PIXELS'
  value?: number
}

export interface LetterSpacingLegacy {
  units: 'RAW' | 'PERCENT' | 'PIXELS'
  value: number
}

// Advanced Image Processing Manager
export class AdvancedImageProcessor {
  private vm: any

  constructor(vm: any) {
    this.vm = vm
  }

  // Create image processor wrapper (original iA function)
  createImageProcessor(imageData: any): ImageProcessor {
    const processor = this.vm.newObject()
    
    // Define hash property
    this.vm.defineProp(processor, 'hash', {
      enumerable: false,
      metricsKey: 'node.hash',
      value: this.vm.deepWrap(imageData.sha1),
    })

    // Define getBytesAsync function
    this.vm.defineFunction(processor, 'getBytesAsync', 'image.getBytesAsync', () => {
      const { promise, resolve, reject } = this.vm.newPromise()
      const asyncOperation = this.vm.registerPromise(imageData.getBytesAsync())
      
      asyncOperation.then((result: any) => {
        resolve(this.vm.deepWrap(result))
      })
      
      asyncOperation.catch((error: any) => {
        reject(this.vm.deepWrap(error))
      })
      
      return promise
    })

    // Define getSizeAsync function
    this.vm.defineFunction(processor, 'getSizeAsync', 'image.getSizeAsync', () => {
      const { promise, resolve, reject } = this.vm.newPromise()
      
      const processImageSize = () => {
        if (imageData.bytes) {
          vX(imageData.bytes)
            .then((size: any) => resolve(this.vm.deepWrap(size)))
            .catch((error: any) => reject(this.vm.deepWrap(error)))
        } else {
          imageData.getBytesAsync()
            .then((bytes: any) => {
              imageData.bytes = bytes
              return vX(bytes)
            })
            .then((size: any) => resolve(this.vm.deepWrap(size)))
            .catch(() => {
              reject(this.vm.deepWrap('Image dimensions not available'))
            })
        }
      }

      processImageSize()
      return promise
    })

    return processor
  }

  // Process feature flag functions (original iy function)
  processFeatureFlagFunctions(featureFlag: string, functions: any[]): any[] {
    return functions.map(func => (input: any, node: any) => {
      if (getFeatureFlags()[featureFlag]) {
        func(input, node)
      }
    })
  }

  // Create prototype with handlers (original ib function)
  createPrototype(name: string, handlers: any[]): any {
    const prototype = this.vm.newPrototype(name)
    
    for (const handler of handlers) {
      handler(this, prototype)
    }
    
    this.vm.retainHandle(prototype)
    return prototype
  }
}

// Advanced Effects Management System
export class AdvancedEffectsManager {
  // Convert effect type names (original iv function)
  convertEffectType(effectType: string): string {
    switch (effectType) {
      case 'FOREGROUND_BLUR':
        return 'LAYER_BLUR'
      case 'REPEAT':
      case 'SYMMETRY':
        return 'BACKGROUND_BLUR'
      case 'GRAIN':
        return 'TEXTURE'
      default:
        return effectType
    }
  }

  // Process effect configuration (original iI function)
  processEffectConfig(effect: any): EffectConfig {
    const baseEffect = effect.type === 'NOISE'
      ? {
        type: this.convertEffectType(effect.type),
        visible: effect.visible,
      }
      : {
        type: this.convertEffectType(effect.type),
        visible: effect.visible,
        radius: effect.radius,
      }

    // Process bound variables
    const boundVariables: any = {}
    if (effect.colorVar?.value?.alias) {
      boundVariables.color = eQ(effect.colorVar.value.alias)
    }
    if (effect.spreadVar?.value?.alias) {
      boundVariables.spread = eQ(effect.spreadVar.value.alias)
    }
    if (effect.radiusVar?.value?.alias) {
      boundVariables.radius = eQ(effect.radiusVar.value.alias)
    }
    if (effect.xVar?.value?.alias) {
      boundVariables.offsetX = eQ(effect.xVar.value.alias)
    }
    if (effect.yVar?.value?.alias) {
      boundVariables.offsetY = eQ(effect.yVar.value.alias)
    }
    
    const processedEffect = { ...baseEffect, boundVariables }

    // Handle specific effect types
    switch (effect.type) {
      case 'INNER_SHADOW':
        return {
          ...processedEffect,
          color: effect.color,
          offset: effect.offset,
          spread: effect.spread,
          blendMode: eJ(effect.blendMode),
        }

      case 'DROP_SHADOW':
        return {
          ...processedEffect,
          color: effect.color,
          offset: effect.offset,
          spread: effect.spread,
          blendMode: eJ(effect.blendMode),
          showShadowBehindNode: effect.showShadowBehindNode,
        }

      case 'GRAIN':
        return {
          ...processedEffect,
          noiseSize: effect.noiseSize?.x || 0,
          clipToShape: effect.clipToShape || false,
        }

      case 'NOISE':
        if (effect.noiseType === 'DUOTONE') {
          return {
            ...processedEffect,
            noiseSize: effect.noiseSize?.x || 0,
            noiseType: 'DUOTONE',
            color: effect.color,
            secondaryColor: effect.secondaryColor || effect.color,
            density: effect.density,
          }
        }
        if (effect.noiseType === 'MULTITONE') {
          return {
            ...processedEffect,
            noiseSize: effect.noiseSize?.x || 0,
            noiseType: 'MULTITONE',
            color: effect.color,
            opacity: effect.opacity,
            density: effect.density,
          }
        }
        return {
          ...processedEffect,
          noiseSize: effect.noiseSize?.x || 0,
          noiseType: 'MONOTONE',
          color: effect.color,
          density: effect.density,
        }

      case 'GLASS':
        return {
          ...processedEffect,
          refraction: effect.refractionIntensity,
          depth: effect.refractionRadius,
          lightAngle: effect.specularAngle,
          lightIntensity: effect.specularIntensity,
          dispersion: effect.chromaticAberration,
        }

      default:
        // Handle progressive blur for advanced effects
        if (_$$m().ce_il_root && effect.blurOpType === 'PROGRESSIVE') {
          return {
            ...processedEffect,
            blurType: 'PROGRESSIVE',
            startRadius: effect.startRadius || 0,
            startOffset: effect.startOffset,
            endOffset: effect.endOffset,
          }
        }
        return processedEffect
    }
  }

  // Validate effect bounds and constraints
  validateEffectConstraints(effect: any, node?: any): any {
    // This would contain the complex validation logic from ix function
    // For now, return the effect as-is
    return effect
  }
}

// Advanced Unit Conversion System
export class AdvancedUnitConverter {
  // Convert line height from legacy format to modern format (original iC function)
  convertLineHeightFromLegacy(legacyLineHeight: LineHeightLegacy): LineHeightUnit {
    if (legacyLineHeight.units === 'PERCENT') {
      return {
        unit: 'AUTO',
      }
    }
    
    if (legacyLineHeight.units === 'RAW') {
      return {
        unit: 'PERCENT',
        value: 100 * legacyLineHeight.value,
      }
    }
    
    if (legacyLineHeight.units === 'PIXELS') {
      return {
        unit: 'PIXELS',
        value: legacyLineHeight.value,
      }
    }
    
    throw new Error('Unknown lineHeight unit')
  }

  // Convert line height from modern format to legacy format (original iT function)
  convertLineHeightToLegacy(modernLineHeight: LineHeightUnit): LineHeightLegacy {
    if (modernLineHeight.unit === 'AUTO') {
      return {
        units: 'PERCENT',
        value: 100,
      }
    }
    
    if (modernLineHeight.unit === 'PERCENT') {
      return {
        units: 'RAW',
        value: (modernLineHeight.value || 0) / 100,
      }
    }
    
    if (modernLineHeight.unit === 'PIXELS') {
      return {
        units: 'PIXELS',
        value: modernLineHeight.value || 0,
      }
    }
    
    throw new Error('Unknown lineHeight unit')
  }

  // Convert letter spacing from legacy format to modern format (original ik function)
  convertLetterSpacingFromLegacy(legacyLetterSpacing: LetterSpacingLegacy): LetterSpacingUnit {
    if (legacyLetterSpacing.units === 'RAW') {
      return {
        unit: 'AUTO',
      }
    }
    
    if (legacyLetterSpacing.units === 'PERCENT') {
      return {
        unit: 'PERCENT',
        value: legacyLetterSpacing.value,
      }
    }
    
    if (legacyLetterSpacing.units === 'PIXELS') {
      return {
        unit: 'PIXELS',
        value: legacyLetterSpacing.value,
      }
    }
    
    throw new Error('Unknown letterSpacing unit')
  }

  // Convert letter spacing from modern format to legacy format
  convertLetterSpacingToLegacy(modernLetterSpacing: LetterSpacingUnit): LetterSpacingLegacy {
    if (modernLetterSpacing.unit === 'AUTO') {
      return {
        units: 'RAW',
        value: 0,
      }
    }
    
    if (modernLetterSpacing.unit === 'PERCENT') {
      return {
        units: 'PERCENT',
        value: modernLetterSpacing.value || 0,
      }
    }
    
    if (modernLetterSpacing.unit === 'PIXELS') {
      return {
        units: 'PIXELS',
        value: modernLetterSpacing.value || 0,
      }
    }
    
    throw new Error('Unknown letterSpacing unit')
  }

  // Clamp value within bounds (original iE function)
  clampValue(value: number, min: number, max: number): number {
    return Math.max(min, Math.min(max, value))
  }
}

// Utility Functions for Common Operations
export class ImageEffectsUtilities {
  // Safe numeric operation with bounds checking
  static safeNumericOperation(
    value: any,
    min: number,
    max: number,
    operation: (val: number) => number = (val) => val
  ): number {
    const numValue = typeof value === 'number' ? value : parseFloat(value) || 0
    const processedValue = operation(numValue)
    return Math.max(min, Math.min(max, processedValue))
  }

  // Validate effect type
  static isValidEffectType(effectType: string): boolean {
    const validTypes = [
      'INNER_SHADOW', 'DROP_SHADOW', 'LAYER_BLUR', 'BACKGROUND_BLUR',
      'NOISE', 'GRAIN', 'TEXTURE', 'GLASS', 'FOREGROUND_BLUR', 'REPEAT', 'SYMMETRY'
    ]
    return validTypes.includes(effectType)
  }

  // Deep merge effect configurations
  static mergeEffectConfigs(base: Partial<EffectConfig>, override: Partial<EffectConfig>): EffectConfig {
    return {
      type: 'LAYER_BLUR',
      visible: true,
      ...base,
      ...override,
      boundVariables: {
        ...base.boundVariables,
        ...override.boundVariables
      }
    }
  }

  // Extract effect properties by category
  static categorizeEffectProperties(effect: EffectConfig): {
    core: Partial<EffectConfig>
    visual: Partial<EffectConfig>
    advanced: Partial<EffectConfig>
  } {
    const { type, visible, radius, color, ...rest } = effect
    
    return {
      core: { type, visible },
      visual: { radius, color },
      advanced: rest
    }
  }
}

// Factory functions for creating instances
export function createAdvancedImageProcessor(vm: any): AdvancedImageProcessor {
  return new AdvancedImageProcessor(vm)
}

export function createAdvancedEffectsManager(): AdvancedEffectsManager {
  return new AdvancedEffectsManager()
}

export function createAdvancedUnitConverter(): AdvancedUnitConverter {
  return new AdvancedUnitConverter()
}

// Main wrapper function that provides all image and effects processing functions
export function createImageEffectsProcessingNew(vm: any): {
  createImageProcessor: (imageData: any) => ImageProcessor
  processFeatureFlagFunctions: (featureFlag: string, functions: any[]) => any[]
  createPrototype: (name: string, handlers: any[]) => any
  convertEffectType: (effectType: string) => string
  processEffectConfig: (effect: any) => EffectConfig
  validateEffectConstraints: (effect: any, node?: any) => any
  convertLineHeightFromLegacy: (legacyLineHeight: LineHeightLegacy) => LineHeightUnit
  convertLineHeightToLegacy: (modernLineHeight: LineHeightUnit) => LineHeightLegacy
  convertLetterSpacingFromLegacy: (legacyLetterSpacing: LetterSpacingLegacy) => LetterSpacingUnit
  convertLetterSpacingToLegacy: (modernLetterSpacing: LetterSpacingUnit) => LetterSpacingLegacy
  clampValue: (value: number, min: number, max: number) => number
} {
  const imageProcessor = createAdvancedImageProcessor(vm)
  const effectsManager = createAdvancedEffectsManager()
  const unitConverter = createAdvancedUnitConverter()

  return {
    createImageProcessor: (imageData: any) => imageProcessor.createImageProcessor(imageData),
    processFeatureFlagFunctions: (featureFlag: string, functions: any[]) => 
      imageProcessor.processFeatureFlagFunctions(featureFlag, functions),
    createPrototype: (name: string, handlers: any[]) => imageProcessor.createPrototype(name, handlers),
    convertEffectType: (effectType: string) => effectsManager.convertEffectType(effectType),
    processEffectConfig: (effect: any) => effectsManager.processEffectConfig(effect),
    validateEffectConstraints: (effect: any, node?: any) => effectsManager.validateEffectConstraints(effect, node),
    convertLineHeightFromLegacy: (legacyLineHeight: LineHeightLegacy) => 
      unitConverter.convertLineHeightFromLegacy(legacyLineHeight),
    convertLineHeightToLegacy: (modernLineHeight: LineHeightUnit) => 
      unitConverter.convertLineHeightToLegacy(modernLineHeight),
    convertLetterSpacingFromLegacy: (legacyLetterSpacing: LetterSpacingLegacy) => 
      unitConverter.convertLetterSpacingFromLegacy(legacyLetterSpacing),
    convertLetterSpacingToLegacy: (modernLetterSpacing: LetterSpacingUnit) => 
      unitConverter.convertLetterSpacingToLegacy(modernLetterSpacing),
    clampValue: (value: number, min: number, max: number) => unitConverter.clampValue(value, min, max)
  }
}
