import { n7, n8, n9, re } from './helper'
import { setupPrototypeFromArgs } from './node-factory'

/**
 * Style Factory Class - responsible for creating and managing style prototypes
 * This class handles the creation of various style types including paint, text, effect, and grid styles
 */
export class StyleFactory {
  cache: Map<any, any>
  vm: any
  pluginId: any
  styleManager: any
  paintStylePrototype: any
  textStylePrototype: any
  effectStylePrototype: any
  gridStylePrototype: any

  constructor(e) {
    this.cache = new Map()
    let t = {
      ...e,
      getStyleFactory: () => this,
    }
    let {
      vm,
      pluginID,
      styleManager,
    } = e
    this.vm = vm
    this.pluginId = pluginID
    this.styleManager = styleManager
    this.paintStylePrototype = setupPrototypeFromArgs(t, 'PaintStyle', ...n7)
    this.textStylePrototype = setupPrototypeFromArgs(t, 'TextStyle', ...n8)
    this.effectStylePrototype = setupPrototypeFromArgs(t, 'EffectStyle', ...n9)
    this.gridStylePrototype = setupPrototypeFromArgs(t, 'GridStyle', ...re)
  }

  /**
   * createStyle - Create a style object based on style type with caching support
   *
   * Creates VM-wrapped style objects for different style types (FILL, TEXT, EFFECT, GRID)
   * with proper caching, validation, and prototype assignment. Handles style lifecycle
   * including object creation, property definition, and memory management.
   *
   * @param styleId - The unique identifier for the style
   * @returns VM-wrapped style object or null if style doesn't exist
   */
  createStyle(styleId) {
    const vm = this.vm
    const cachedStyle = this.cache.get(styleId)
    const styleData = this.styleManager.get(styleId)

    // Validate style existence and handle cache cleanup
    if (!styleData) {
      if (cachedStyle !== undefined) {
        this.cache.delete(styleId)
      }
      return vm.$$null
    }

    // Return cached style if available
    if (cachedStyle !== undefined) {
      return cachedStyle
    }

    // Create new style object with appropriate prototype
    const styleObject = this.createStyleObjectByType(styleData.styleType)

    // Configure style properties and caching
    this.configureStyleObject(styleObject, styleId)
    return styleObject
  }

  /**
   * createStyleObjectByType - Create style object with appropriate prototype based on type
   *
   * Maps style types to their corresponding prototypes and creates VM objects.
   * Supports FILL (paint), TEXT, EFFECT, and GRID style types with proper
   * error handling for unsupported types.
   *
   * @param styleType - The type of style to create (FILL, TEXT, EFFECT, GRID)
   * @returns VM object with appropriate prototype
   */
  createStyleObjectByType(styleType) {
    const vm = this.vm
    const stylePrototypes = {
      FILL: this.paintStylePrototype,
      TEXT: this.textStylePrototype,
      EFFECT: this.effectStylePrototype,
      GRID: this.gridStylePrototype,
    }
    const prototype = stylePrototypes[styleType]
    if (!prototype) {
      throw new Error(`Unsupported style type: ${styleType}`)
    }
    return vm.newObject(prototype)
  }

  /**
   * configureStyleObject - Configure style object properties and caching
   *
   * Sets up the style object with proper ID property, freezing, caching,
   * and memory management. Ensures consistent style object configuration
   * across all style types.
   *
   * @param styleObject - The VM style object to configure
   * @param styleId - The style identifier for property and cache setup
   */
  configureStyleObject(styleObject, styleId) {
    const vm = this.vm

    // Define ID property
    vm.defineProp(styleObject, 'id', {
      enumerable: true,
      value: vm.newString(styleId),
    })

    // Freeze object and setup caching
    vm.shallowFreezeObject(styleObject)
    this.cache.set(styleId, styleObject)
    vm.retainHandle(styleObject)
  }
}
