import type { NoOpVm } from '../700654'
import { l7 } from '../189185'
import { fO, VK } from '../452962'
import { getFeatureFlags } from '../601108'
import { fb } from '../622391'
import { x1 } from '../714362'
import { u as _$$u } from '../816730'
import { fn, sH } from '../871411'
import { r as _$$r } from '../955316'
import { Bll, RN1 } from '../../figma_app/763686'
import { l6, uA } from '../../figma_app/781512'
import { mapColorName } from './helper'
import { setupPrototypeFromArgs } from './node-factory'

export let colors = ['yellow', 'orange', 'red', 'pink', 'violet', 'blue', 'teal', 'green'] as const

export function getColorName(e) {
  switch (e) {
    case RN1.RED:
      return 'red'
    case RN1.GREEN:
      return 'green'
    case RN1.BLUE:
      return 'blue'
    case RN1.YELLOW:
      return 'yellow'
    case RN1.PINK:
      return 'pink'
    case RN1.ORANGE:
      return 'orange'
    case RN1.TEAL:
      return 'teal'
    case RN1.VIOLET:
      return 'violet'
  }
}

/**
 * AnnotationCategoryAPI - Provides property and method definitions for annotation category objects.
 * Handles label, color, preset status, removal, color setting, and label setting.
 */
export const AnnotationCategoryAPI = {
  /**
   * Defines the 'label' property for an annotation category.
   * Maps internal annotation category label to API label string.
   */
  label({
    vm,
          defineVmProp,
          getAnnotationCategory,
  }, handle) {
    defineVmProp({
      handle,
      key: 'label',
      options: {
        enumerable: true,
        metricsKey: 'annotationCategory.label',
        get() {
          const category = getAnnotationCategory(this)
          return vm.newString(uA(category))
        },
      },
      canWriteInReadOnly: false,
      hasEditScope: false,
    })
  },
  /**
   * Defines the 'color' property for an annotation category.
   * Maps internal annotation category color to API color string.
   */
  color({
    vm,
          defineVmProp,
          getAnnotationCategory,
  }, handle) {
    defineVmProp({
      handle,
      key: 'color',
      options: {
        enumerable: true,
        metricsKey: 'annotationCategory.color',
        get() {
          const category = getAnnotationCategory(this)
          const colorValue = l6(category)
          if (colorValue === null) {
            x1('annotation-category-plugin', `Category in invalid state exposed to user: ${JSON.stringify(category)}`)
            const fallbackColor = RN1.GREEN
            return vm.newString(getColorName(fallbackColor))
          }
          return vm.newString(getColorName(colorValue))
        },
      },
      canWriteInReadOnly: false,
      hasEditScope: false,
    })
  },
  /**
   * Defines the 'isPreset' property for an annotation category.
   * Indicates if the annotation category is a preset.
   */
  isPreset({
    vm,
             defineVmProp,
             getAnnotationCategory,
  }, handle) {
    defineVmProp({
      handle,
      key: 'isPreset',
      options: {
        enumerable: true,
        metricsKey: 'annotationCategory.isPreset',
        get() {
          const category = getAnnotationCategory(this)
          return vm.newBoolean(category.preset !== Bll.NONE)
        },
      },
      canWriteInReadOnly: false,
      hasEditScope: false,
    })
  },
  /**
   * Defines the 'remove' function for an annotation category.
   * Removes the annotation category from the scene graph.
   */
  remove({
    vm,
           defineVmFunction,
           getAnnotationCategory,
           sceneGraph,
  }, handle) {
    defineVmFunction({
      handle,
      key: 'remove',
      metricsKey: 'annotationCategory.remove',
      cb() {
        const category = getAnnotationCategory(this)
        const root = sceneGraph.getRoot()
        if (root.annotationCategories === null)
          return vm.undefined
        const updatedCategories = root.annotationCategories.filter(e => e.id !== category.id)
        _$$r(() => {
          const err = root.setAnnotationCategories(updatedCategories)
          if (err !== '')
            throw new Error(`Error removing annotation category: ${err}`)
        })
        return vm.undefined
      },
      isAllowedInReadOnly: true,
      isAllowedInFocusViewInteractiveInspection: false,
      hasEditScope: true,
    })
  },
  /**
   * Defines the 'setColor' function for an annotation category.
   * Sets the color of the annotation category.
   */
  setColor({
    vm,
             defineVmFunction,
             getAnnotationCategory,
             sceneGraph,
  }, handle) {
    defineVmFunction({
      handle,
      key: 'setColor',
      metricsKey: 'annotationCategory.setColor',
      cb(colorHandle) {
        const category = getAnnotationCategory(this)
        const colorValue = _$$u({
          vm,
          handle: colorHandle,
          zSchema: _$$z.enum(colors),
          property: 'color',
        })
        const root = sceneGraph.getRoot()
        if (root.annotationCategories === null)
          return vm.undefined
        const updatedCategories = root.annotationCategories.map((e) => {
          if (e.id === category.id) {
            const cat = VK(e)
            return cat.custom === null
              ? cat
              : {
                  ...cat,
                  custom: {
                    ...cat.custom,
                    color: mapColorName(colorValue),
                  },
                }
          }
          return e
        })
        _$$r(() => {
          const err = root.setAnnotationCategories(updatedCategories)
          if (err !== '')
            throw new Error(`Error setting annotation category color: ${err}`)
        })
        return vm.undefined
      },
      isAllowedInReadOnly: true,
      isAllowedInFocusViewInteractiveInspection: false,
      hasEditScope: true,
    })
  },
  /**
   * Defines the 'setLabel' function for an annotation category.
   * Sets the label of the annotation category.
   */
  setLabel({
    vm,
             defineVmFunction,
             getAnnotationCategory,
             sceneGraph,
  }, handle) {
    defineVmFunction({
      handle,
      key: 'setLabel',
      metricsKey: 'annotationCategory.setLabel',
      cb(labelHandle) {
        const category = getAnnotationCategory(this)
        const labelValue = _$$u({
          vm,
          handle: labelHandle,
          zSchema: _$$z.string(),
          property: 'label',
        })
        const root = sceneGraph.getRoot()
        if (root.annotationCategories === null)
          return vm.undefined
        const updatedCategories = root.annotationCategories.map((e) => {
          if (e.id === category.id) {
            const cat = VK(e)
            return cat.custom === null
              ? cat
              : {
                  ...cat,
                  custom: {
                    ...cat.custom,
                    label: labelValue,
                  },
                }
          }
          return e
        })
        _$$r(() => {
          const err = root.setAnnotationCategories(updatedCategories)
          if (err !== '')
            throw new Error(`Error setting annotation category label: ${err}`)
        })
        return vm.undefined
      },
      isAllowedInReadOnly: true,
      isAllowedInFocusViewInteractiveInspection: false,
      hasEditScope: true,
    })
  },
}
let annotationCategoryApiMethods = [AnnotationCategoryAPI.label, AnnotationCategoryAPI.color, AnnotationCategoryAPI.isPreset, AnnotationCategoryAPI.remove, AnnotationCategoryAPI.setColor, AnnotationCategoryAPI.setLabel]

export class AnnotationCategoryFactory {
  vm: NoOpVm
  annotationCategoryPrototype: any
  sceneGraph: any

  constructor(e) {
    // Set properties with proper types
    this.vm = e.vm
    this.annotationCategoryPrototype = setupPrototypeFromArgs(e, 'AnnotationCategory', ...annotationCategoryApiMethods)
    this.sceneGraph = e.sceneGraph
  }

  createAnnotationCategoryHandle(e) {
    let t = this.vm
    if (!fn(sH(e)))
      return t.$$null
    let i = t.newObject(this.annotationCategoryPrototype)
    t.defineProp(i, 'id', {
      enumerable: true,
      writable: false,
      value: t.newString(e),
    })
    return i
  }

  getLocalAnnotationCategoriesAsync() {
    let e = this.vm
    let {
      promise,
      resolve,
      reject,
    } = e.newPromise()
    getFeatureFlags().plugins_annotations_seat_check && !fb()
      ? reject(e.newString('A Full or Dev seat is required to get annotation categories'))
      : e.registerPromise(iJ(this.sceneGraph)).then((t) => {
          let r = e.newArray()
          for (let [i, a] of t.entries()) {
            let t = this.createAnnotationCategoryHandle(a.id)
            if (e.isNull(t)) {
              reject(e.newString('Failed to create annotation category'))
              return
            }
            e.setProp(r, i.toString(), t)
          }
          resolve(r)
        }).catch((t) => {
          reject(e.newString(t.message))
        })
    return promise
  }

  getLocalAnnotationCategoryByIdAsync(e) {
    let t = this.vm
    let {
      promise,
      resolve,
      reject,
    } = t.newPromise()
    getFeatureFlags().plugins_annotations_seat_check && !fb()
      ? reject(t.newString('A Full or Dev seat is required to get annotation categories'))
      : t.registerPromise(iJ(this.sceneGraph)).then((i) => {
          let r = i.find(t => t.id === e)
          if (void 0 === r) {
            resolve(t.$$null)
            return
          }
          resolve(this.createAnnotationCategoryHandle(r.id))
        }).catch((e) => {
          reject(t.newString(e.message))
        })
    return promise
  }

  createAnnotationCategoryAsync(e, t) {
    let i = this.vm
    let {
      promise,
      resolve,
      reject,
    } = i.newPromise()
    getFeatureFlags().plugins_annotations_seat_check && !fb()
      ? reject(i.newString('A Full seat is required to create annotation categories'))
      : i.registerPromise(iJ(this.sceneGraph)).then((n) => {
          let s = fO(this.sceneGraph)
          let o = {
            id: s,
            preset: Bll.NONE,
            custom: {
              label: e,
              color: mapColorName(t),
            },
          }
          let l = this.sceneGraph.getRoot()
          let d = [...n, o]
          _$$r(() => l7.plugin('update-annotation-categories', () => {
            let e = l.setAnnotationCategories(d)
            if (e !== '') {
              reject(i.newString(e))
              return
            }
            let t = this.createAnnotationCategoryHandle(s)
            if (i.isNull(t)) {
              reject(i.newString('Failed to create annotation category'))
              return
            }
            resolve(t)
          }))
        })
    return promise
  }
}

async function iJ(nodeAdapter) {
  // iJ - Get annotation categories, initializing if necessary

  const rootNode = nodeAdapter.getRoot()
  let annotationCategories = rootNode.annotationCategories

  // Initialize annotation categories if not already available
  if (annotationCategories === null) {
    await Promise.resolve()
    l7.plugin('initialize-annotation-categories', () => {
      const initializationError = rootNode.initializeAnnotationCategories()
      if (initializationError !== '') {
        throw new Error(initializationError)
      }
      annotationCategories = rootNode.annotationCategories
    })
  }
  if (annotationCategories === null) {
    throw new Error('Annotation categories not initialized')
  }
  return annotationCategories
}
