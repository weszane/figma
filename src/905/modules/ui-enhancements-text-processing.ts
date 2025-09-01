/**
 * Phase 25: Advanced UI Enhancements and Text Processing Systems
 * 
 * This module provides comprehensive UI property management, image hashing,
 * effect processing, text formatting, alignment handling, and styling conversion.
 * Extracted from 472793.ts to improve code organization and maintainability.
 * 
 * Functions: ig, i_, ix, iM, ij, iU, iB, iV, iG, iz
 */

/**
 * AdvancedUIPropertyManager
 * Handles VM property definitions with fill processing and change tracking
 */
export class AdvancedUIPropertyManager {
  /**
   * Define VM property with fill processing - ig function
   * Handles property definitions with fillsOrMixed processing and deep wrapping
   */
  static defineVmPropWithFillProcessing({
    vm: e,
    defineVmProp: t,
    mixedSentinel: i,
    imageStore: n,
    videoStore: r,
    getNode: a,
  }, s, o) {
    t({
      handle: s,
      key: o,
      options: {
        enumerable: !0,
        metricsKey: `node.${o}`,
        get() {
          let t = a(this).fillsOrMixed
          if (t === 'mixed')
            return i
          let n = e.deepWrap(this.e1(t))
          e.deepFreezeObject(n)
          return n
        },
        set(t) {
          let i = a(this)
          let s = []
          i.fillPaintsForPluginOnly = {
            data: this.e2New(n, r, this._$$u({
              vm: e,
              handle: t,
              zSchema: this._$$N.Paints,
              property: o,
            }), s),
            blobs: s,
          }
        },
      },
      canWriteInReadOnly: !1,
      hasEditScope: !0,
    })
  }

  // Helper methods that would need to be injected or imported
  e1(data) {
    // This would be the original e1 function logic
    throw new Error('e1 function needs to be injected')
  }

  e2New(imageStore, videoStore, params, blobs) {
    // This would be the original e2New function logic
    throw new Error('e2New function needs to be injected')
  }

  _$$u(params) {
    // This would be the original _$$u function logic
    throw new Error('_$$u function needs to be injected')
  }

  get _$$N() {
    // This would be the original _$$N object
    throw new Error('_$$N object needs to be injected')
  }
}

/**
 * AdvancedImageHashManager
 * Handles image hash object creation and property definition
 */
export class AdvancedImageHashManager {
  /**
   * Create hash object - i_ function
   * Creates VM object with hash property from SHA1 data
   */
  static createHashObject(e, t) {
    let i = e.newObject()
    e.defineProp(i, 'hash', {
      enumerable: !1,
      metricsKey: 'node.hash',
      value: e.deepWrap(t.sha1),
    })
    return i
  }
}

/**
 * AdvancedEffectProcessor  
 * Handles complex effect processing with validation and transformation
 */
export class AdvancedEffectProcessor {
  /**
   * Process effect with validation - ix function
   * Comprehensive effect processing with type-specific validation and transformation
   */
  static processEffectWithValidation(e, t) {
    let i
    let n = {
      ...e,
    }

    // Progressive blur validation
    if ((e.type === 'LAYER_BLUR' || e.type === 'BACKGROUND_BLUR') && 
      e.blurType === 'PROGRESSIVE' && e.startRadius && e.startRadius > this.XX) {
      this._$$k2.warn(`Effect startRadius of ${e.startRadius} is too large and will be clamped to ${this.XX}`)
      n.startRadius = this.iE(e.startRadius, 0, this.XX)
    }

    // Texture radius validation
    if (e.type === 'TEXTURE' && e.radius > this.mx) {
      this._$$k2.warn(`Effect radius of ${e.radius} is too large and will be clamped to ${this.mx}`)
      n.radius = this.iE(e.radius, 0, this.mx)
    }

    // Blur type processing
    if ((e.type === 'LAYER_BLUR' || e.type === 'BACKGROUND_BLUR') && e.blurType) {
      n.blurOpType = e.blurType
      delete n.blurType
    }

    // Noise and texture processing
    if (e.type === 'NOISE' || e.type === 'TEXTURE') {
      if (e.noiseSize > this.Mo) {
        this._$$k2.warn(`Effect noiseSize of ${e.noiseSize} is too large and will be clamped to ${this.Mo}`)
      } else if (e.noiseSize < 0) {
        this._$$k2.warn(`Effect noiseSize of ${e.noiseSize} is too small and will be clamped to 0`)
      }
      let t = this.iE(e.noiseSize, 0, this.Mo)
      n.noiseSize = new this.Mi(t, t)
    }

    // Glass effect processing
    if (e.type === 'GLASS') {
      if (t && !t.canHaveGlassEffect)
        throw new Error(this.zd)
      n.refractionIntensity = this.iS(e.refraction, this.SU, this.U_, 'refraction')
      n.refractionRadius = this.iS(e.depth, this.Ku, this.Wp, 'depth')
      n.specularAngle = this.iS(e.lightAngle, this._$$$$, this.NH, 'lightAngle')
      n.specularIntensity = this.iS(e.lightIntensity, this.VL, this.Jk, 'lightIntensity')
      n.chromaticAberration = this.iS(e.dispersion, this.$x, this._$$rY, 'dispersion')
      n.radius = this.iS(e.radius, this.Df, this.hD, 'radius')
      delete n.refraction
      delete n.depth
      delete n.lightAngle
      delete n.lightIntensity
      delete n.dispersion
    }

    // Shadow processing
    if (e.type === 'INNER_SHADOW' || e.type === 'DROP_SHADOW') {
      if (void 0 === e.spread) {
        delete n.spread
      } else if (e.spread !== 0 && (!t || t && (i = t).type !== 'ROUNDED_RECTANGLE' && 
        i.type !== 'RECTANGLE' && i.type !== 'ELLIPSE' && 
        (i.type === 'FRAME' || i.type === 'SYMBOL' || i.type === 'INSTANCE' ? 
          this.handleFrameSpread(i) : this.handleOtherSpread(i)))) {
        n.spread = 0
      } else {
        if (e.spread > this.yj) {
          this._$$k2.warn(`Effect spread of ${e.spread} is too large and will be clamped to ${this.yj}`)
        } else if (e.spread < this.cT) {
          this._$$k2.warn(`Effect spread of ${e.spread} is too small and will be clamped to ${this.cT}`)
        }
        n.spread = this.iE(e.spread, this.cT, this.yj)
      }

      // Radius validation
      if (void 0 !== e.radius) {
        if (e.radius > this.DW) {
          this._$$k2.warn(`Effect radius of ${e.radius} is too large and will be clamped to ${this.DW}`)
        } else if (e.radius < this.V8) {
          this._$$k2.warn(`Effect radius of ${e.radius} is too small and will be clamped to ${this.V8}`)
        }
        n.radius = this.iE(e.radius, this.V8, this.DW)
      }

      n.blendMode = this.eJ(e.blendMode)

      // Bound variables processing
      if (e.boundVariables) {
        this.processShadowBoundVariables(e, n)
      }
    }

    // Drop shadow specific processing
    if (e.type === 'DROP_SHADOW' && void 0 === e.showShadowBehindNode) {
      delete n.showShadowBehindNode
    }

    // Radius bound variables
    if (e.boundVariables && e.boundVariables?.radius?.id) {
      n.radiusVar = {
        dataType: 'ALIAS',
        resolvedDataType: 'FLOAT',
        value: {
          alias: this._$$sH(e.boundVariables.radius.id),
        },
      }
    }

    // Clean up bound variables
    if (n.boundVariables || void 0 === e.boundVariables) {
      delete n.boundVariables
    }

    return {
      ...n,
      type: this.mapEffectType(e.type),
    }
  }

  static handleFrameSpread(i) {
    if ((i.fills.length === 0 || i.fills.every(e => !(e.visible && e.opacity)))) {
      this._$$k2.warn('The \'spread\' parameter is not supported when frames or components have no visible fills')
    }
    if (i.frameMaskDisabled) {
      this._$$k2.warn('The \'spread\' parameter is not supported when frames or components have "Clips content" disabled.')
    }
    return 0
  }

  static handleOtherSpread(i) {
    this._$$k2.warn(`Spread is not supported for node type ${i.type}`)
    return 1
  }

  static processShadowBoundVariables(e, n) {
    if (e.boundVariables?.spread?.id) {
      n.spreadVar = {
        dataType: 'ALIAS',
        resolvedDataType: 'FLOAT',
        value: {
          alias: this._$$sH(e.boundVariables.spread.id),
        },
      }
    }
    if (e.boundVariables?.color?.id) {
      n.colorVar = {
        dataType: 'ALIAS',
        resolvedDataType: 'COLOR',
        value: {
          alias: this._$$sH(e.boundVariables.color.id),
        },
      }
    }
    if (e.boundVariables?.offsetX?.id) {
      n.xVar = {
        dataType: 'ALIAS',
        resolvedDataType: 'FLOAT',
        value: {
          alias: this._$$sH(e.boundVariables.offsetX.id),
        },
      }
    }
    if (e.boundVariables?.offsetY?.id) {
      n.yVar = {
        dataType: 'ALIAS',
        resolvedDataType: 'FLOAT',
        value: {
          alias: this._$$sH(e.boundVariables.offsetY.id),
        },
      }
    }
  }

  static mapEffectType(type) {
    switch (type) {
      case 'LAYER_BLUR':
        return 'FOREGROUND_BLUR'
      case 'TEXTURE':
        return 'GRAIN'
      default:
        return type
    }
  }

  // Helper methods and constants that would need to be injected
  static get _$$k2() { throw new Error('_$$k2 needs to be injected') }
  static get XX() { throw new Error('XX constant needs to be injected') }
  static get mx() { throw new Error('mx constant needs to be injected') }
  static get Mo() { throw new Error('Mo constant needs to be injected') }
  static get Mi() { throw new Error('Mi class needs to be injected') }
  static get zd() { throw new Error('zd constant needs to be injected') }
  static get SU() { throw new Error('SU constant needs to be injected') }
  static get U_() { throw new Error('U_ constant needs to be injected') }
  static get Ku() { throw new Error('Ku constant needs to be injected') }
  static get Wp() { throw new Error('Wp constant needs to be injected') }
  static get _$$$$() { throw new Error('_$$$$ constant needs to be injected') }
  static get NH() { throw new Error('NH constant needs to be injected') }
  static get VL() { throw new Error('VL constant needs to be injected') }
  static get Jk() { throw new Error('Jk constant needs to be injected') }
  static get $x() { throw new Error('$x constant needs to be injected') }
  static get _$$rY() { throw new Error('_$$rY constant needs to be injected') }
  static get Df() { throw new Error('Df constant needs to be injected') }
  static get hD() { throw new Error('hD constant needs to be injected') }
  static get yj() { throw new Error('yj constant needs to be injected') }
  static get cT() { throw new Error('cT constant needs to be injected') }
  static get DW() { throw new Error('DW constant needs to be injected') }
  static get V8() { throw new Error('V8 constant needs to be injected') }

  static iE(value, min, max) { throw new Error('iE function needs to be injected') }
  static iS(value, min, max, name) { throw new Error('iS function needs to be injected') }
  static eJ(blendMode) { throw new Error('eJ function needs to be injected') }
  static _$$sH(id) { throw new Error('_$$sH function needs to be injected') }
}

/**
 * AdvancedTextFormattingManager
 * Handles text formatting and string conversion operations
 */
export class AdvancedTextFormattingManager {
  /**
   * Create string from text resize mode - iM function
   * Creates VM string from text resize mode using ij conversion
   */
  static createStringFromTextResizeMode(e, t) {
    return e.newString(this.convertTextResizeMode(t))
  }

  /**
   * Convert text resize mode - ij function
   * Maps text resize modes to string representations
   */
  static convertTextResizeMode(e) {
    switch (e) {
      case 'FIXED':
        return 'FIXED'
      case 'RESIZE_TO_FIT':
      case 'RESIZE_TO_FIT_WITH_IMPLICIT_SIZE':
        return 'AUTO'
      default:
        return e
    }
  }
}

/**
 * AdvancedAlignmentProcessor
 * Handles alignment and spacing conversion operations
 */
export class AdvancedAlignmentProcessor {
  /**
   * Process primary axis alignment - iU function
   * Maps primary axis alignment values with inheritance support
   */
  static processPrimaryAxisAlignment(e) {
    switch (e) {
      case 'MIN':
      case 'CENTER':
      case 'MAX':
      case 'BASELINE':
      case 'STRETCH':
        return e
      case 'AUTO':
        return 'INHERIT'
      default:
        return e
    }
  }

  /**
   * Process cross axis alignment - iB function
   * Maps cross axis alignment with space distribution support
   */
  static processCrossAxisAlignment(e) {
    switch (e) {
      case 'MIN':
        return 'MIN'
      case 'MAX':
        return 'MAX'
      case 'CENTER':
        return 'CENTER'
      case 'SPACE_EVENLY':
      case 'SPACE_BETWEEN':
        return 'SPACE_BETWEEN'
      default:
        return e
    }
  }
}

/**
 * AdvancedSizingConverter
 * Handles sizing mode conversion between different formats
 */
export class AdvancedSizingConverter {
  /**
   * Convert sizing mode to string - iV function
   * Maps internal sizing modes to string representations
   */
  static convertSizingModeToString(e) {
    switch (e) {
      case this.mKm.FIXED:
        return 'FIXED'
      case this.mKm.HUG_CONTENT:
        return 'HUG'
      case this.mKm.FILL_CONTAINER:
        return 'FILL'
      default:
        return e
    }
  }

  /**
   * Convert string to sizing mode - iG function
   * Maps string representations to internal sizing modes
   */
  static convertStringToSizingMode(e) {
    switch (e) {
      case 'FIXED':
        return this.mKm.FIXED
      case 'HUG':
        return this.mKm.HUG_CONTENT
      case 'FILL':
        return this.mKm.FILL_CONTAINER
      default:
        return e
    }
  }

  // Helper constant that would need to be injected
  static get mKm() { throw new Error('mKm constant needs to be injected') }
}

/**
 * AdvancedTextStylingManager
 * Handles text styling and capitalization conversion
 */
export class AdvancedTextStylingManager {
  /**
   * Process text styling with mixed support - iz function
   * Handles text case conversion with small caps support and mixed value handling
   */
  static processTextStyling(e, t, i, n) {
    if (i === 'mixed')
      return t
    
    let r = i || 'ORIGINAL'
    
    if (void 0 !== n && r === 'ORIGINAL') {
      if (n === 'mixed')
        return t
      if (n === 'SMALL') {
        r = 'SMALL_CAPS'
      } else if (n === 'ALL_SMALL') {
        r = 'SMALL_CAPS_FORCED'
      }
    }
    
    return e.newString(r)
  }
}

/**
 * Phase 25 Dependencies and Utilities
 * Provides comprehensive dependency injection and utility support
 */
export class Phase25Dependencies {
  static injectDependencies(dependencies) {
    // This would handle dependency injection for all the helper functions and constants
    // that these modules need to operate properly
    Object.assign(this, dependencies)
  }
}
