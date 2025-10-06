/**
 * Phase 20: Advanced Paint and Fill Processing Systems
 * Extracted from 472793.ts - Paint and Fill Processing functionality
 * 
 * This module handles complex paint processing including solid colors, gradients, patterns, images, and videos
 * Original functions: e3, e4, e2, e5, and related paint processing logic
 */

// Paint and fill processing types
export interface PaintConfig {
  type: string
  color?: any
  visible: boolean
  opacity: number
  blendMode: string
  colorVar?: VariableBinding
  transform?: any
  stopsVar?: GradientStop[]
  stops?: GradientStop[]
  sourceNodeId?: string
  patternTileType?: string
  scale?: number
  patternSpacing?: any
  horizontalAlignment?: string
  verticalAlignment?: string
  imageScaleMode?: string
  paintFilter?: any
  image?: ImageData
  video?: VideoData
  animatedImage?: ImageData
  rotation?: number
}

export interface VariableBinding {
  dataType: string
  resolvedDataType: string
  value: {
    alias: string
  }
}

export interface GradientStop {
  color: any
  position: number
  colorVar?: VariableBinding
}

export interface ImageData {
  hash: Uint8Array
  dataBlob?: number
}

export interface VideoData {
  hash: Uint8Array
}

export interface PaintFilter {
  exposure: number
  contrast: number
  vibrance: number
  temperature: number
  tint: number
  highlights: number
  shadows: number
}

/**
 * Advanced Paint Processor
 * Handles complex paint processing with support for all paint types
 */
export class AdvancedPaintProcessor {
  logger: any
  imageManager: any
  animatedImageManager: any

  constructor(logger?: any, imageManager?: any, animatedImageManager?: any) {
    this.logger = logger || console
    this.imageManager = imageManager
    this.animatedImageManager = animatedImageManager
  }

  /**
   * Process paint array with auto value filtering
   * Original function: e4 (472793.ts:1278-1282)
   */
  processPaintArrayWithAuto(figmaContext: any, bufferArray: any[], paintConfig: any, nodeId: string): PaintConfig[] {
    const results: PaintConfig[] = []
    if (paintConfig.value !== 'AUTO') {
      results.push(paintConfig.value)
    }
    return results.map(paint => this.processSinglePaint(figmaContext, bufferArray, paint, nodeId))
  }

  /**
   * Process paint array
   * Original function: e2 (472793.ts:1270-1272)
   */
  processPaintArray(figmaContext: any, bufferArray: any[], paintConfigs: any[], nodeId: string): PaintConfig[] {
    return paintConfigs.map(paint => this.processSinglePaint(figmaContext, bufferArray, paint, nodeId))
  }

  /**
   * Process text decoration color
   * Original function: e5 (472793.ts:1274-1276)
   */
  processTextDecorationColor(colorConfig: any): any {
    return this.convertTextDecorationColor(colorConfig)
  }

  /**
   * Process single paint configuration
   * Original function: e3 (472793.ts:1284-1442) - Main paint processing logic
   */
  processSinglePaint(figmaContext: any, bufferArray: any[], paintConfig: any, _nodeId: string): PaintConfig {
    const visible = paintConfig.visible === undefined ? true : paintConfig.visible
    const opacity = paintConfig.opacity === undefined ? 1 : paintConfig.opacity
    const blendMode = paintConfig.blendMode === undefined ? 'NORMAL' : this.convertBlendMode(paintConfig.blendMode)

    switch (paintConfig.type) {
      case 'SOLID':
        return this.processSolidPaint(paintConfig, visible, opacity, blendMode)

      case 'GRADIENT_LINEAR':
      case 'GRADIENT_RADIAL':
      case 'GRADIENT_ANGULAR':
      case 'GRADIENT_DIAMOND':
        return this.processGradientPaint(paintConfig, visible, opacity, blendMode)

      case 'PATTERN':
        return this.processPatternPaint(paintConfig, visible, opacity, blendMode)

      case 'VIDEO':
      case 'IMAGE':
        return this.processImageVideoPaint(figmaContext, bufferArray, paintConfig, visible, opacity, blendMode)

      default:
        throw new Error(`Unsupported paint type: ${paintConfig.type}`)
    }
  }

  /**
   * Process solid color paint
   */
  processSolidPaint(paintConfig: any, visible: boolean, opacity: number, blendMode: string): PaintConfig {
    const result: PaintConfig = {
      type: paintConfig.type,
      color: {
        ...paintConfig.color,
        a: 1
      },
      visible,
      opacity,
      blendMode
    }

    // Handle variable bindings for solid color
    if (paintConfig.boundVariables?.color?.id &&
      paintConfig.boundVariables.color.type === 'VARIABLE_ALIAS' &&
      this.isValidVariableId(paintConfig.boundVariables.color.id)) {
      result.colorVar = {
        dataType: 'ALIAS',
        resolvedDataType: 'COLOR',
        value: {
          alias: this.convertVariableId(paintConfig.boundVariables.color.id)
        }
      }
    }

    return result
  }

  /**
   * Process gradient paint (linear, radial, angular, diamond)
   */
  processGradientPaint(paintConfig: any, visible: boolean, opacity: number, blendMode: string): PaintConfig {
    return {
      type: paintConfig.type,
      transform: this.convertGradientTransform(paintConfig.gradientTransform),
      stopsVar: paintConfig.gradientStops.map((stop: any) =>
        stop.boundVariables?.color?.id &&
          stop.boundVariables.color?.type === 'VARIABLE_ALIAS' &&
          this.isValidVariableId(stop.boundVariables.color.id)
          ? {
            color: stop.color,
            position: stop.position,
            colorVar: {
              dataType: 'ALIAS',
              resolvedDataType: 'COLOR',
              value: {
                alias: this.convertVariableId(stop.boundVariables.color.id)
              }
            }
          }
          : this.processGradientStop(stop)
      ),
      stops: paintConfig.gradientStops.map(({ color, position }: any) => ({
        color,
        position
      })),
      visible,
      opacity,
      blendMode
    }
  }

  /**
   * Process pattern paint
   */
  processPatternPaint(paintConfig: any, visible: boolean, opacity: number, blendMode: string): PaintConfig {
    // Validate and clamp scaling factor
    if (paintConfig.scalingFactor !== undefined) {
      const minScale = 0.01 // wU equivalent
      const maxScale = 4.0   // Iz equivalent

      if (paintConfig.scalingFactor < minScale) {
        this.logger.warn(`Pattern scalingFactor of ${paintConfig.scalingFactor} is too small and will be clamped to ${minScale}`)
        paintConfig.scalingFactor = minScale
      }
      if (paintConfig.scalingFactor > maxScale) {
        this.logger.warn(`Pattern scalingFactor of ${paintConfig.scalingFactor} is too large and will be clamped to ${maxScale}`)
        paintConfig.scalingFactor = maxScale
      }
      paintConfig.scalingFactor = Math.min(Math.max(paintConfig.scalingFactor, minScale), maxScale)
    }

    // Validate and clamp spacing
    if (paintConfig.spacing !== undefined) {
      const minSpacing = -1000 // IF equivalent
      const maxSpacing = 1000  // yR equivalent

      if (paintConfig.spacing.x < minSpacing) {
        this.logger.warn(`Pattern spacing.x of ${paintConfig.spacing.x} is too small and will be clamped to ${minSpacing}`)
        paintConfig.spacing.x = minSpacing
      }
      if (paintConfig.spacing.x > maxSpacing) {
        this.logger.warn(`Pattern spacing.x of ${paintConfig.spacing.x} is too large and will be clamped to ${maxSpacing}`)
        paintConfig.spacing.x = maxSpacing
      }
      paintConfig.spacing.x = Math.min(Math.max(paintConfig.spacing.x, minSpacing), maxSpacing)

      if (paintConfig.spacing.y < minSpacing) {
        this.logger.warn(`Pattern spacing.y of ${paintConfig.spacing.y} is too small and will be clamped to ${minSpacing}`)
        paintConfig.spacing.y = minSpacing
      }
      if (paintConfig.spacing.y > maxSpacing) {
        this.logger.warn(`Pattern spacing.y of ${paintConfig.spacing.y} is too large and will be clamped to ${maxSpacing}`)
        paintConfig.spacing.y = maxSpacing
      }
      paintConfig.spacing.y = Math.min(Math.max(paintConfig.spacing.y, minSpacing), maxSpacing)
    }

    // Resolve source node ID
    let sourceNodeId = 'default-source-node' // Hr equivalent
    if (paintConfig.sourceNodeId !== undefined) {
      const resolvedNode = this.resolveSourceNode(paintConfig.sourceNodeId)
      if (resolvedNode) {
        sourceNodeId = resolvedNode
      }
    }

    return {
      type: paintConfig.type,
      sourceNodeId,
      patternTileType: paintConfig.tileType,
      scale: paintConfig.scalingFactor,
      patternSpacing: paintConfig.spacing,
      horizontalAlignment: paintConfig.horizontalAlignment,
      verticalAlignment: paintConfig.verticalAlignment,
      visible,
      opacity,
      blendMode
    }
  }

  /**
   * Process image or video paint
   */
  processImageVideoPaint(figmaContext: any, bufferArray: any[], paintConfig: any, visible: boolean, opacity: number, blendMode: string): PaintConfig {
    // Validation
    if (paintConfig.scalingFactor != null && paintConfig.scalingFactor <= 0) {
      throw new Error('Image scaleFactor must be greater than 0')
    }
    if (paintConfig.rotation != null && paintConfig.rotation % 90) {
      throw new Error('Image rotation must be a factor of 90 degrees')
    }
    if (paintConfig.rotation != null && paintConfig.rotation >= 360) {
      throw new Error('Image rotation must be less than 360 degrees')
    }

    // Get image hash
    let imageHash: any
    if (paintConfig.type === 'IMAGE') {
      imageHash = paintConfig.imageHash
    } else {
      imageHash = figmaContext.getThumbnailImageForVideo(paintConfig.videoHash)
    }

    // Get transform
    const transform = paintConfig.type === 'IMAGE'
      ? paintConfig.imageTransform
      : paintConfig.videoTransform

    // Process scale mode
    const scaleMode = paintConfig.scaleMode === 'CROP' ? 'STRETCH' : paintConfig.scaleMode

    // Create base result
    const result: PaintConfig = {
      type: paintConfig.type,
      imageScaleMode: scaleMode,
      transform: this.convertGradientTransform(transform),
      paintFilter: this.processPaintFilter(paintConfig.filters),
      scale: paintConfig.scalingFactor || 1,
      visible,
      opacity,
      blendMode,
      image: {
        hash: this.createImageHash(imageHash)
      }
    }

    // Add video hash if video type
    if (paintConfig.type === 'VIDEO') {
      result.video = {
        hash: this.createImageHash(paintConfig.videoHash)
      }
    }

    // Add rotation if not crop mode
    if (paintConfig.scaleMode !== 'CROP') {
      result.rotation = paintConfig.rotation || 0
    }

    // Handle animated images
    const animatedInfo = this.getAnimatedImageInfo(imageHash)
    if (animatedInfo.status === 'UNLOADED') {
      try {
        const imageData = figmaContext.getPrivateImageOrThrow(imageHash)
        this.validateImageBytes(imageData.bytes, 'Missing bytes for image')

        result.image!.dataBlob = bufferArray.length
        bufferArray.push({ bytes: imageData.bytes })

        if (imageData.coverBytes) {
          result.animatedImage = result.image
          result.image = {
            hash: this.createImageHash(imageData.animated.coverFrameHash),
            dataBlob: bufferArray.length
          }
          bufferArray.push({ bytes: imageData.coverBytes })
        }
      } catch {
        this.logger.error('plugin_set_image_fill_failed', { sha: imageHash })
      }
    } else if (animatedInfo.status === 'ANIMATED') {
      result.animatedImage = result.image
      result.image = {
        hash: this.createImageHash(animatedInfo.coverFrameHash)
      }
    }

    return result
  }

  /**
   * Process paint filter configuration
   */
  processPaintFilter(filters: any): PaintFilter {
    const baseFilter: PaintFilter = {
      exposure: 0,
      contrast: 0,
      vibrance: 0,
      temperature: 0,
      tint: 0,
      highlights: 0,
      shadows: 0
    }

    if (!filters) {
      return baseFilter
    }

    return this.mergeWithBaseFilter({
      exposure: filters.exposure,
      contrast: Math.min(Math.max(0.3 * (filters.contrast || 0), -0.3), 0.3),
      vibrance: filters.saturation,
      temperature: filters.temperature,
      tint: filters.tint,
      highlights: filters.highlights,
      shadows: filters.shadows
    }, baseFilter)
  }

  /**
   * Process gradient stop
   */
  processGradientStop(stop: any): GradientStop {
    return {
      color: stop.color,
      position: stop.position
    }
  }

  // Helper methods (placeholders for actual implementation)
  convertBlendMode(blendMode: any): string {
    // Placeholder - should call actual blend mode conversion function
    return blendMode || 'NORMAL'
  }

  convertGradientTransform(transform: any): any {
    // Placeholder - should call actual transform conversion function (eZ equivalent)
    return transform
  }

  convertTextDecorationColor(color: any): any {
    // Placeholder - should call actual text decoration color conversion
    return color
  }

  isValidVariableId(_id: string): boolean {
    // Placeholder - should call actual variable ID validation (_$$fn equivalent)
    return true
  }

  convertVariableId(id: string): string {
    // Placeholder - should call actual variable ID conversion (_$$sH equivalent)
    return id
  }

  resolveSourceNode(nodeId: string): string | null {
    // Placeholder - should call actual source node resolution (sH equivalent)
    return nodeId
  }

  createImageHash(_hash: any): Uint8Array {
    // Placeholder - should call actual image hash creation (aD equivalent)
    return new Uint8Array()
  }

  getAnimatedImageInfo(_hash: any): { status: string; coverFrameHash?: any } {
    // Placeholder - should call actual animated image info getter (NfO.getAnimatedImageInfo equivalent)
    return { status: 'LOADED' }
  }

  validateImageBytes(bytes: any, message: string): void {
    // Placeholder - should call actual byte validation (B1 equivalent)
    if (!bytes) {
      throw new Error(message)
    }
  }

  mergeWithBaseFilter(customFilter: any, baseFilter: PaintFilter): PaintFilter {
    // Placeholder - should call actual filter merging (Kb equivalent)
    return { ...baseFilter, ...customFilter }
  }
}

/**
 * Advanced Fill Manager
 * Manages fill processing operations
 */
export class AdvancedFillManager {
  paintProcessor: AdvancedPaintProcessor

  constructor(paintProcessor?: AdvancedPaintProcessor) {
    this.paintProcessor = paintProcessor || new AdvancedPaintProcessor()
  }

  /**
   * Process multiple fills
   */
  processFills(figmaContext: any, bufferArray: any[], fills: any[], nodeId: string): PaintConfig[] {
    return this.paintProcessor.processPaintArray(figmaContext, bufferArray, fills, nodeId)
  }

  /**
   * Process fills with auto value filtering
   */
  processFillsWithAuto(figmaContext: any, bufferArray: any[], fillConfig: any, nodeId: string): PaintConfig[] {
    return this.paintProcessor.processPaintArrayWithAuto(figmaContext, bufferArray, fillConfig, nodeId)
  }

  /**
   * Process single fill
   */
  processFill(figmaContext: any, bufferArray: any[], fill: any, nodeId: string): PaintConfig {
    return this.paintProcessor.processSinglePaint(figmaContext, bufferArray, fill, nodeId)
  }

  /**
   * Process text decoration color
   */
  processTextDecorationColor(colorConfig: any): any {
    return this.paintProcessor.processTextDecorationColor(colorConfig)
  }
}

// Factory functions for creating paint processing instances
export function createAdvancedPaintProcessor(logger?: any, imageManager?: any, animatedImageManager?: any): AdvancedPaintProcessor {
  return new AdvancedPaintProcessor(logger, imageManager, animatedImageManager)
}

export function createAdvancedFillManager(paintProcessor?: AdvancedPaintProcessor): AdvancedFillManager {
  return new AdvancedFillManager(paintProcessor)
}
