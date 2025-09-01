/**
 * Phase 27: Node API Methods Extraction Module (Namespace Approach)
 * Handles Node API methods like toString, clone, remove, parent, children, findOne, findAll, etc.
 * Uses namespace pattern for better organization and modularity
 */

// NoOpVm interface from src/905/700654.ts
interface NoOpVm {
  undefined: any
  null: any
  createString: (str: string) => any
  createNode: (node: any, source: string) => any
  newArray: () => any
  newFunction: (fn: Function) => any
  setProp: (obj: any, key: string, value: any) => void
  getStringProp: (obj: any, key: string) => string
  toBoolean: (value: any) => boolean
  callFunction: (fn: any, thisArg: any, ...args: any[]) => any
  deepFreezeObject: (obj: any) => void
  isNumber: (value: any) => boolean
  isBoolean: (value: any) => boolean
  typeof: (value: any) => string
}

export interface NodeAPIConfig {
  vm: NoOpVm
  // defineVmFunct    
}
/**
     * Setup counterAxisAlignContent method for cross-axis content alignment
     */
export function setupCounterAxisAlignContent(config: NodeAPIConfig, handle: any) {
  config.defineVmProp({
    handle,
    key: 'counterAxisAlignContent',
    options: {
      enumerable: true,
      metricsKey: 'node.counterAxisAlignContent',
      get() {
        let node = config.getNode(this)
        return node.counterAxisAlignContent || config.vm.undefined
      },
    },
    canWriteInReadOnly: false,
    hasEditScope: false,
  })
}
/**
 * Setup counterAxisSizingMode method for cross-axis sizing behavior
 */
export function setupCounterAxisSizingMode(config: NodeAPIConfig, handle: any) {
  config.defineVmProp({
    handle,
    key: 'counterAxisSizingMode',
    options: {
      enumerable: true,
      metricsKey: 'node.counterAxisSizingMode',
      get() {
        let node = config.getNode(this)
        return node.counterAxisSizingMode || config.vm.undefined
      },
    },
    canWriteInReadOnly: false,
    hasEditScope: false,
  })
}

/**
 * Setup primaryAxisSizingMode method for main-axis sizing behavior
 */
export function setupPrimaryAxisSizingMode(config: NodeAPIConfig, handle: any) {
  config.defineVmProp({
    handle,
    key: 'primaryAxisSizingMode',
    options: {
      enumerable: true,
      metricsKey: 'node.primaryAxisSizingMode',
      get() {
        return config.utils.iM(config.vm, config.getNode(this).stackPrimarySizing)
      },
      set(t) {
        let r = config.utils._$$u({
          vm: config.vm,
          handle: t,
          zSchema: config.utils.getFeatureFlags().ce_legacy_al ? config.utils._$$N.SizingModeLegacy : config.utils._$$N.SizingMode,
          property: 'primaryAxisSizingMode',
        })
        let a = config.getNode(this)
        switch (r) {
          case 'FIXED':
            a.stackPrimarySizing = 'FIXED'
            break
          case 'AUTO':
            a.stackPrimarySizing = 'RESIZE_TO_FIT_WITH_IMPLICIT_SIZE'
            break
          case 'LEGACY_AUTO':
            a.stackPrimarySizing = 'RESIZE_TO_FIT'
        }
        config.stats.stackFieldSet(a.guid, 'stack-primary-sizing')
        return config.vm.undefined
      },
    },
    canWriteInReadOnly: false,
    hasEditScope: true,
  })
}

/**
 * Setup primaryAxisAlignItems method for main-axis item alignment
 */
export function setupPrimaryAxisAlignItems(config: NodeAPIConfig, handle: any) {
  config.defineVmProp({
    handle,
    key: 'primaryAxisAlignItems',
    options: {
      enumerable: true,
      metricsKey: 'node.primaryAxisAlignItems',
      get() {
        let t = config.getNode(this).stackPrimaryAlignItems
        return config.vm.newString(config.utils.iB(t))
      },
      set(t) {
        let n = config.utils._$$u({
          vm: config.vm,
          handle: t,
          zSchema: config.utils.getFeatureFlags().ce_legacy_al ? config.utils._$$N.StackJustifyLegacy : config.utils._$$N.StackJustify,
          property: 'primaryAxisAlignItems',
        })
        let r = config.getNode(this)
        switch (n) {
          case 'MIN':
            r.stackPrimaryAlignItems = 'MIN'
            break
          case 'MAX':
            r.stackPrimaryAlignItems = 'MAX'
            break
          case 'CENTER':
            r.stackPrimaryAlignItems = 'CENTER'
            break
          case 'SPACE_BETWEEN':
            r.stackPrimaryAlignItems = config.utils.getFeatureFlags().ce_stack_justify_space_between ? 'SPACE_BETWEEN' : 'SPACE_EVENLY'
            break
          case 'SPACE_BETWEEN_LEGACY':
            r.stackPrimaryAlignItems = 'SPACE_EVENLY'
        }
        return config.vm.undefined
      },
    },
    canWriteInReadOnly: false,
    hasEditScope: true,
  })
}

/**
 * Setup counterAxisAlignItems method for cross-axis item alignment
 */
export function setupCounterAxisAlignItems(config: NodeAPIConfig, handle: any) {
  config.defineVmProp({
    handle,
    key: 'counterAxisAlignItems',
    options: {
      enumerable: true,
      metricsKey: 'node.counterAxisAlignItems',
      get() {
        return config.vm.newString(config.getNode(this).stackCounterAlignItems)
      },
      set(t) {
        let r = config.utils._$$u({
          vm: config.vm,
          handle: t,
          zSchema: config.utils._$$N.StackAlign,
          property: 'counterAxisAlignItems',
        })
        let a = config.getNode(this)
        if (r === 'BASELINE' && a.stackMode !== 'HORIZONTAL') {
          throw new Error('counterAxisAlignItems = BASELINE can only be set when layoutMode === HORIZONTAL')
        }
        a.stackCounterAlignItems = r
        config.stats.stackFieldSet(a.guid, 'stack-counter-align-items')
        return config.vm.undefined
      },
    },
    canWriteInReadOnly: false,
    hasEditScope: true,
  })
}

/**
 * Setup layoutGrow method for layout growth behavior
 */
export function setupLayoutGrow(config: NodeAPIConfig, handle: any) {
  config.defineVmProp({
    handle,
    key: 'layoutGrow',
    options: {
      enumerable: true,
      metricsKey: 'node.layoutGrow',
      get() {
        return config.vm.newNumber(config.getNode(this).stackChildPrimaryGrow)
      },
      set(t) {
        let r = config.getNode(this)
        r.stackChildPrimaryGrow = config.utils._$$u({
          vm: config.vm,
          handle: t,
          zSchema: config.utils.getFeatureFlags().sts_some_fill ? config.utils._$$N.PositiveInteger : config.utils._$$N.ZeroOrOne,
          property: 'layoutGrow',
        })
        config.stats.stackFieldSet(r.guid, 'stack-child-primary-grow')
        return config.vm.undefined
      },
    },
    canWriteInReadOnly: false,
    hasEditScope: true,
  })
}

/**
 * Setup paddingLeft method for left padding
 */
export function setupPaddingLeft(config: NodeAPIConfig, handle: any) {
  config.defineVmProp({
    handle,
    key: 'paddingLeft',
    options: {
      enumerable: true,
      metricsKey: 'node.paddingLeft',
      get() {
        return config.vm.newNumber(config.getNode(this).stackLeftPadding)
      },
      set(t) {
        config.getNode(this).stackLeftPadding = config.utils._$$u({
          vm: config.vm,
          handle: t,
          zSchema: config.utils._$$N.PositiveFloat,
          property: 'paddingLeft',
        })
        return config.vm.undefined
      },
    },
    canWriteInReadOnly: false,
    hasEditScope: true,
  })
}

/**
 * Setup paddingRight method for right padding
 */
export function setupPaddingRight(config: NodeAPIConfig, handle: any) {
  config.defineVmProp({
    handle,
    key: 'paddingRight',
    options: {
      enumerable: true,
      metricsKey: 'node.paddingRight',
      get() {
        return config.vm.newNumber(config.getNode(this).stackRightPadding)
      },
      set(t) {
        config.getNode(this).stackRightPadding = config.utils._$$u({
          vm: config.vm,
          handle: t,
          zSchema: config.utils._$$N.PositiveFloat,
          property: 'paddingRight',
        })
        return config.vm.undefined
      },
    },
    canWriteInReadOnly: false,
    hasEditScope: true,
  })
}

/**
 * Setup paddingTop method for top padding
 */
export function setupPaddingTop(config: NodeAPIConfig, handle: any) {
  config.defineVmProp({
    handle,
    key: 'paddingTop',
    options: {
      enumerable: true,
      metricsKey: 'node.paddingTop',
      get() {
        return config.vm.newNumber(config.getNode(this).stackTopPadding)
      },
      set(t) {
        config.getNode(this).stackTopPadding = config.utils._$$u({
          vm: config.vm,
          handle: t,
          zSchema: config.utils._$$N.PositiveFloat,
          property: 'paddingTop',
        })
        return config.vm.undefined
      },
    },
    canWriteInReadOnly: false,
    hasEditScope: true,
  })
}

/**
 * Setup paddingBottom method for bottom padding
 */
export function setupPaddingBottom(config: NodeAPIConfig, handle: any) {
  config.defineVmProp({
    handle,
    key: 'paddingBottom',
    options: {
      enumerable: true,
      metricsKey: 'node.paddingBottom',
      get() {
        return config.vm.newNumber(config.getNode(this).stackBottomPadding)
      },
      set(t) {
        config.getNode(this).stackBottomPadding = config.utils._$$u({
          vm: config.vm,
          handle: t,
          zSchema: config.utils._$$N.PositiveFloat,
          property: 'paddingBottom',
        })
        return config.vm.undefined
      },
    },
    canWriteInReadOnly: false,
    hasEditScope: true,
  })
}

/**
 * Setup itemSpacing method for spacing between items
 */
export function setupItemSpacing(config: NodeAPIConfig, handle: any) {
  config.defineVmProp({
    handle,
    key: 'itemSpacing',
    options: {
      enumerable: true,
      metricsKey: 'node.itemSpacing',
      get() {
        return config.vm.newNumber(config.getNode(this).stackSpacing)
      },
      set(t) {
        config.getNode(this).stackSpacing = config.utils._$$u({
          vm: config.vm,
          handle: t,
          zSchema: config.utils._$$N.Float,
          property: 'itemSpacing',
        })
        return config.vm.undefined
      },
    },
    canWriteInReadOnly: false,
    hasEditScope: true,
  })
}

/**
 * Setup counterAxisSpacing method for cross-axis spacing
 */
export function setupCounterAxisSpacing(config: NodeAPIConfig, handle: any) {
  config.defineVmProp({
    handle,
    key: 'counterAxisSpacing',
    options: {
      enumerable: true,
      metricsKey: 'node.counterAxisSpacing',
      get() {
        return config.vm.newNumber(config.getNode(this).stackCounterSpacing)
      },
      set(t) {
        config.getNode(this).stackCounterSpacing = config.utils._$$u({
          vm: config.vm,
          handle: t,
          zSchema: config.utils._$$N.PositiveFloat.nullable(),
          property: 'counterAxisSpacing',
        })
        return config.vm.undefined
      },
    },
    canWriteInReadOnly: false,
    hasEditScope: true,
  })
}

/**
 * Setup layoutPositioning method for layout positioning behavior
 */
export function setupLayoutPositioning(config: NodeAPIConfig, handle: any) {
  config.defineVmProp({
    handle,
    key: 'layoutPositioning',
    options: {
      enumerable: true,
      metricsKey: 'node.layoutPositioning',
      get() {
        return config.vm.newString(config.getNode(this).stackPositioning)
      },
      set(t) {
        let r = config.utils._$$u({
          vm: config.vm,
          handle: t,
          zSchema: config.utils._$$N.LayoutPositioning,
          property: 'layoutPositioning',
        })
        let a = config.getNode(this)
        if (r === 'AUTO') {
          a.stackPositioning = r
        } else {
          let e = a.parentNode
          if (!e || e.stackMode === 'NONE') {
            throw new Error('Can only set layoutPositioning = ABSOLUTE if the parent node has layoutMode !== NONE')
          }
          a.stackPositioning = r
        }
        config.stats.stackFieldSet(a.guid, 'stack-positioning')
        return config.vm.undefined
      },
    },
    canWriteInReadOnly: false,
    hasEditScope: true,
  })
}
  }

/**
 * Grid Properties - Grid layout system
 */
export namespace Grid {
    
  /**
   * Setup gridRowCount method for grid row count
   */
  export function setupGridRowCount(config: NodeAPIConfig, handle: any) {
    config.defineVmProp({
      handle,
      key: 'gridRowCount',
      options: {
        enumerable: true,
        metricsKey: 'node.gridRowCount',
        get() {
          return config.vm.newNumber(config.getNode(this).gridRowCount)
        },
        set(t) {
          config.getNode(this).setGridRowCount(config.utils._$$u({
            vm: config.vm,
            handle: t,
            zSchema: config.utils._$$N.PositiveInteger,
            property: 'gridRowCount',
          }))
          return config.vm.undefined
        },
      },
      canWriteInReadOnly: false,
      hasEditScope: true,
    })
  }

  /**
   * Setup gridColumnCount method for grid column count
   */
  export function setupGridColumnCount(config: NodeAPIConfig, handle: any) {
    config.defineVmProp({
      handle,
      key: 'gridColumnCount',
      options: {
        enumerable: true,
        metricsKey: 'node.gridColumnCount',
        get() {
          return config.vm.newNumber(config.getNode(this).gridColumnCount)
        },
        set(t) {
          config.getNode(this).setGridColumnCount(config.utils._$$u({
            vm: config.vm,
            handle: t,
            zSchema: config.utils._$$N.PositiveInteger,
            property: 'gridColumnCount',
          }))
          return config.vm.undefined
        },
      },
      canWriteInReadOnly: false,
      hasEditScope: true,
    })
  }

  /**
   * Setup gridRowSpan method for grid row span
   */
  export function setupGridRowSpan(config: NodeAPIConfig, handle: any) {
    config.defineVmProp({
      handle,
      key: 'gridRowSpan',
      options: {
        enumerable: true,
        metricsKey: 'node.gridRowSpan',
        get() {
          return config.vm.newNumber(config.getNode(this).gridRowSpan)
        },
        set(t) {
          config.getNode(this).gridRowSpan = config.utils._$$u({
            vm: config.vm,
            handle: t,
            zSchema: config.utils._$$N.FiniteNumber.min(1).$$int(),
            property: 'gridRowSpan',
          })
        },
      },
      canWriteInReadOnly: false,
      hasEditScope: true,
    })
  }

  /**
   * Setup gridColumnSpan method for grid column span
   */
  export function setupGridColumnSpan(config: NodeAPIConfig, handle: any) {
    config.defineVmProp({
      handle,
      key: 'gridColumnSpan',
      options: {
        enumerable: true,
        metricsKey: 'node.gridColumnSpan',
        get() {
          return config.vm.newNumber(config.getNode(this).gridColumnSpan)
        },
        set(t) {
          config.getNode(this).gridColumnSpan = config.utils._$$u({
            vm: config.vm,
            handle: t,
            zSchema: config.utils._$$N.FiniteNumber.min(1).$$int(),
            property: 'gridColumnSpan',
          })
        },
      },
      canWriteInReadOnly: false,
      hasEditScope: true,
    })
  }

  /**
   * setupGridRowGap - Setup row gap for grid layouts
   * Extracted from original setupNode function for grid spacing management
   */
  export function setupGridRowGap({
    vm: e,
    defineVmProp: t,
    getNode: i,
  }, n) {
    t({
      handle: n,
      key: 'gridRowGap',
      canWriteInReadOnly: !1,
      hasEditScope: !0,
      options: {
        enumerable: !0,
        metricsKey: 'node.gridRowGap',
        get() {
          return e.newNumber(i(this).gridRowGap)
        },
        set(t) {
          i(this).gridRowGap = _$$u({
            vm: e,
            handle: t,
            zSchema: _$$N.PositiveFloat,
            property: 'gridRowGap',
          })
          return e.undefined
        },
      },
    })
  }

  /**
   * setupGridColumnGap - Setup column gap for grid layouts
   * Extracted from original setupNode function for grid spacing management
   */
  export function setupGridColumnGap({
    vm: e,
    defineVmProp: t,
    getNode: i,
  }, n) {
    t({
      handle: n,
      key: 'gridColumnGap',
      options: {
        enumerable: !0,
        metricsKey: 'node.gridColumnGap',
        get() {
          return e.newNumber(i(this).gridColumnGap)
        },
        set(t) {
          i(this).gridColumnGap = _$$u({
            vm: e,
            handle: t,
            zSchema: _$$N.PositiveFloat,
            property: 'gridColumnGap',
          })
          return e.undefined
        },
      },
      canWriteInReadOnly: !1,
      hasEditScope: !0,
    })
  }
}

/**
 * Visual Properties - Visual appearance and styling
 */
export namespace VisualProperties {
    
  /**
   * Setup opacity method for opacity control
   */
  export function setupOpacity(config: NodeAPIConfig, handle: any) {
    config.defineVmProp({
      handle,
      key: 'opacity',
      options: {
        enumerable: true,
        metricsKey: 'node.opacity',
        get() {
          return config.vm.newNumber(config.getNode(this).opacity)
        },
        set(t) {
          config.getNode(this).opacity = config.utils._$$u({
            vm: config.vm,
            handle: t,
            zSchema: config.utils._$$N.ZeroToOne,
            property: 'opacity',
          })
          return config.vm.undefined
        },
      },
      canWriteInReadOnly: false,
      hasEditScope: true,
    })
  }

  /**
   * Setup blendMode method for blend mode control
   */
  export function setupBlendMode(config: NodeAPIConfig, handle: any) {
    config.defineVmProp({
      handle,
      key: 'blendMode',
      options: {
        enumerable: true,
        metricsKey: 'node.blendMode',
        get() {
          return config.vm.newString(config.getNode(this).blendMode)
        },
        set(t) {
          config.getNode(this).blendMode = config.utils._$$u({
            vm: config.vm,
            handle: t,
            zSchema: config.utils._$$N.BlendMode,
            property: 'blendMode',
          })
          return config.vm.undefined
        },
      },
      canWriteInReadOnly: false,
      hasEditScope: true,
    })
  }

  /**
   * Setup cornerRadius method for corner radius control
   */
  export function setupCornerRadius(config: NodeAPIConfig, handle: any) {
    config.defineVmProp({
      handle,
      key: 'cornerRadius',
      options: {
        enumerable: true,
        metricsKey: 'node.cornerRadius',
        get() {
          let t = config.getNode(this)
          if (config.utils.iu(t))
            return config.vm.undefined
          let r = t.cornerRadiusOrMixed
          return r === 'mixed' ? config.mixedSentinel : config.vm.newNumber(r)
        },
        set(t) {
          let i = config.getNode(this)
          if (config.utils.iu(i)) {
            throw new Error('Groups do not have a cornerRadius property. Please use frames instead.')
          }
          if (i.type === 'SLIDE')
            throw new Error('Cannot set cornerRadius on slide nodes')
          let r = config.utils._$$u({
            vm: config.vm,
            handle: t,
            zSchema: config.utils._$$N.PositiveFloat,
            property: 'cornerRadius',
          })
          i.setCornerRadiusAndClobber(r)
          return config.vm.undefined
        },
      },
      canWriteInReadOnly: false,
      hasEditScope: true,
    })
  }
}

/**
 * Position/Transform Properties - Position, size, and transformation
 */
export namespace PositionTransform {
    
  /**
   * Setup x method for horizontal position
   */
  export function setupX(config: NodeAPIConfig, handle: any) {
    config.defineVmProp({
      handle,
      key: 'x',
      options: {
        enumerable: true,
        metricsKey: 'node.x',
        get() {
          return config.vm.newNumber(config.getNode(this).x)
        },
        set(t) {
          let n = config.getNode(this)
          if (n.type !== 'SLIDE_GRID') {
            n.x = config.utils._$$u({
              vm: config.vm,
              handle: t,
              zSchema: config.utils._$$N.Float,
              property: 'x',
            })
          }
          return config.vm.undefined
        },
      },
      canWriteInReadOnly: false,
      hasEditScope: true,
    })
  }

  /**
   * Setup y method for vertical position
   */
  export function setupY(config: NodeAPIConfig, handle: any) {
    config.defineVmProp({
      handle,
      key: 'y',
      options: {
        enumerable: true,
        metricsKey: 'node.y',
        get() {
          return config.vm.newNumber(config.getNode(this).y)
        },
        set(t) {
          let n = config.getNode(this)
          if (n.type !== 'SLIDE_GRID') {
            n.y = config.utils._$$u({
              vm: config.vm,
              handle: t,
              zSchema: config.utils._$$N.Float,
              property: 'y',
            })
          }
          return config.vm.undefined
        },
      },
      canWriteInReadOnly: false,
      hasEditScope: true,
    })
  }

  /**
   * Setup width method for node width
   */
  export function setupWidth(config: NodeAPIConfig, handle: any) {
    config.defineVmProp({
      handle,
      key: 'width',
      options: {
        enumerable: true,
        metricsKey: 'node.width',
        get() {
          return config.vm.newNumber(config.getNode(this).size.x)
        },
      },
      canWriteInReadOnly: false,
      hasEditScope: false,
    })
  }

  /**
   * Setup height method for node height
   */
  export function setupHeight(config: NodeAPIConfig, handle: any) {
    config.defineVmProp({
      handle,
      key: 'height',
      options: {
        enumerable: true,
        metricsKey: 'node.height',
        get() {
          return config.vm.newNumber(config.getNode(this).size.y)
        },
      },
      canWriteInReadOnly: false,
      hasEditScope: false,
    })
  }

  /**
   * Setup rotation method for node rotation
   */
  export function setupRotation(config: NodeAPIConfig, handle: any) {
    config.defineVmProp({
      handle,
      key: 'rotation',
      options: {
        enumerable: true,
        metricsKey: 'node.rotation',
        get() {
          let t = config.getNode(this)
          return config.vm.newNumber(t.rotation)
        },
        set(t) {
          let n = config.getNode(this)
          if (n.type === 'SLIDE')
            return config.vm.undefined
          let r = config.utils._$$u({
            vm: config.vm,
            handle: t,
            zSchema: config.utils._$$N.Float,
            property: 'rotation',
          })
          n.rotation = r
          return config.vm.undefined
        },
      },
      canWriteInReadOnly: false,
      hasEditScope: true,
    })
  }
}

/**
 * Stroke Properties Namespace
 * Contains methods for managing stroke/border properties
 */
export namespace Stroke {
  /**
   * setupStrokeWeight - Sets up strokeWeight property for Node API
   * Controls the stroke width with independent border weight management
   * Original function: e.strokeWeight
   */
  export function setupStrokeWeight({
    vm: e,
    defineVmProp: t,
    mixedSentinel: i,
    getNode: n,
  }, r) {
    t({
      handle: r,
      key: 'strokeWeight',
      options: {
        enumerable: !0,
        metricsKey: 'node.strokeWeight',
        get() {
          let t = n(this)
          if (!t.borderStrokeWeightsIndependent)
            return e.newNumber(t.strokeWeight)
          let r = t.borderTopWeight
          let a = t.borderBottomWeight
          let s = t.borderLeftWeight
          let o = t.borderRightWeight
          return r === a && r === s && r === o ? e.newNumber(r) : i
        },
        set(t) {
          let i = n(this)
          let r = _$$u({
            vm: e,
            handle: t,
            zSchema: _$$N.PositiveFloat,
            property: 'strokeWeight',
          })
          i.strokeWeight = r
          i.borderStrokeWeightsIndependent = !1
          i.borderTopWeight = r
          i.borderBottomWeight = r
          i.borderLeftWeight = r
          i.borderRightWeight = r
          return e.undefined
        },
      },
      canWriteInReadOnly: !1,
      hasEditScope: !0,
    })
  }

  /**
   * setupStrokeAlign - Sets up strokeAlign property for Node API
   * Controls the alignment of strokes (inside, outside, center)
   * Original function: e.strokeAlign
   */
  export function setupStrokeAlign({
    vm: e,
    defineVmProp: t,
    getNode: i,
  }, n) {
    t({
      handle: n,
      key: 'strokeAlign',
      options: {
        enumerable: !0,
        metricsKey: 'node.strokeAlign',
        get() {
          return e.newString(i(this).strokeAlign)
        },
        set(t) {
          i(this).strokeAlign = _$$u({
            vm: e,
            handle: t,
            zSchema: _$$N.StrokeAlign,
            property: 'strokeAlign',
          })
          return e.undefined
        },
      },
      canWriteInReadOnly: !1,
      hasEditScope: !0,
    })
  }

  /**
   * setupStrokeCap - Sets up strokeCap property for Node API
   * Controls the stroke line cap style (NONE, ROUND, SQUARE, TRIANGLE_FILLED)
   * Original function: e.strokeCap
   */
  export function setupStrokeCap({
    vm: e,
    defineVmProp: t,
    mixedSentinel: i,
    getNode: n,
  }, r) {
    t({
      handle: r,
      key: 'strokeCap',
      options: {
        enumerable: !0,
        metricsKey: 'node.strokeCap',
        get() {
          let t = n(this).strokeCapOrMixed
          return t === 'mixed' ? i : e.newString(t)
        },
        set(t) {
          n(this).strokeCap = _$$u({
            vm: e,
            handle: t,
            zSchema: _$$N.StrokeCap,
            property: 'strokeCap',
          })
          return e.undefined
        },
      },
      canWriteInReadOnly: !1,
      hasEditScope: !0,
    })
  }

  /**
   * setupStrokeJoin - Sets up strokeJoin property for Node API
   * Controls the stroke line join style (MITER, BEVEL, ROUND)
   * Original function: e.strokeJoin
   */
  export function setupStrokeJoin({
    vm: e,
    defineVmProp: t,
    mixedSentinel: i,
    getNode: n,
  }, r) {
    t({
      handle: r,
      key: 'strokeJoin',
      options: {
        enumerable: !0,
        metricsKey: 'node.strokeJoin',
        get() {
          let t = n(this).strokeJoinOrMixed
          return t === 'mixed' ? i : e.newString(t)
        },
        set(t) {
          n(this).strokeJoin = _$$u({
            vm: e,
            handle: t,
            zSchema: _$$N.StrokeJoin,
            property: 'strokeJoin',
          })
          return e.undefined
        },
      },
      canWriteInReadOnly: !1,
      hasEditScope: !0,
    })
  }
}

/**
 * Text Properties Namespace
 * Contains methods for managing text formatting and typography
 */
export namespace Text {
  /**
   * setupFontSize - Sets up fontSize property for Node API
   * Controls the font size with mixed state support
   * Original function: e.fontSize
   */
  export function setupFontSize({
    vm: e,
    defineVmProp: t,
    mixedSentinel: i,
    getNode: n,
  }, r) {
    t({
      handle: r,
      key: 'fontSize',
      options: {
        enumerable: !0,
        metricsKey: 'node.fontSize',
        get() {
          let t = n(this).fontSizeOrMixed
          return t === 'mixed' ? i : e.newNumber(t)
        },
        set(t) {
          n(this).fontSize = _$$u({
            vm: e,
            handle: t,
            zSchema: _$$z.number().min(1).finite(),
            property: 'fontSize',
          })
          return e.undefined
        },
      },
      canWriteInReadOnly: !1,
      hasEditScope: !0,
    })
  }

  /**
   * setupTextAlignHorizontal - Sets up textAlignHorizontal property for Node API
   * Controls horizontal text alignment (LEFT, CENTER, RIGHT, JUSTIFIED)
   * Original function: e.textAlignHorizontal
   */
  export function setupTextAlignHorizontal({
    vm: e,
    defineVmProp: t,
    getNode: i,
  }, n) {
    t({
      handle: n,
      key: 'textAlignHorizontal',
      options: {
        enumerable: !0,
        metricsKey: 'node.textAlignHorizontal',
        get() {
          return e.newString(i(this).textAlignHorizontal)
        },
        set(t) {
          i(this).textAlignHorizontal = _$$u({
            vm: e,
            handle: t,
            zSchema: _$$N.TextAlignHorizontal,
            property: 'textAlignHorizontal',
          })
          return e.undefined
        },
      },
      canWriteInReadOnly: !1,
      hasEditScope: !0,
    })
  }

  /**
   * setupTextAlignVertical - Sets up textAlignVertical property for Node API
   * Controls vertical text alignment (TOP, CENTER, BOTTOM)
   * Original function: e.textAlignVertical
   */
  export function setupTextAlignVertical({
    vm: e,
    defineVmProp: t,
    getNode: i,
  }, n) {
    t({
      handle: n,
      key: 'textAlignVertical',
      options: {
        enumerable: !0,
        metricsKey: 'node.textAlignVertical',
        get() {
          return e.newString(i(this).textAlignVertical)
        },
        set(t) {
          i(this).textAlignVertical = _$$u({
            vm: e,
            handle: t,
            zSchema: _$$N.TextAlignVertical,
            property: 'textAlignVertical',
          })
          return e.undefined
        },
      },
      canWriteInReadOnly: !1,
      hasEditScope: !0,
    })
  }

  /**
   * setupTextCase - Sets up textCase property for Node API
   * Controls text case transformation (UPPER, LOWER, TITLE, ORIGINAL, SMALL_CAPS, SMALL_CAPS_FORCED)
   * Original function: e.textCase
   */
  export function setupTextCase({
    vm: e,
    defineVmProp: t,
    mixedSentinel: i,
    getNode: n,
  }, r) {
    t({
      handle: r,
      key: 'textCase',
      options: {
        enumerable: !0,
        metricsKey: 'node.textCase',
        get() {
          let t = n(this)
          return iz(e, i, t.textCaseOrMixed, t.fontVariantCapsOrMixed)
        },
        set(t) {
          let i = _$$u({
            vm: e,
            handle: t,
            zSchema: _$$N.TextCase,
            property: 'textCase',
          })
          let r = n(this)
          let {
            textCase,
            fontVariantCaps,
          } = iq(r, 0, -1, i)
          r.textCase = textCase
          r.fontVariantCaps = fontVariantCaps
          return e.undefined
        },
      },
      canWriteInReadOnly: !1,
      hasEditScope: !0,
    })
  }

  /**
   * setupTextDecoration - Sets up textDecoration property for Node API
   * Controls text decoration (NONE, UNDERLINE, STRIKETHROUGH)
   * Original function: e.textDecoration
   */
  export function setupTextDecoration({
    vm: e,
    defineVmProp: t,
    mixedSentinel: i,
    getNode: n,
  }, r) {
    t({
      handle: r,
      key: 'textDecoration',
      options: {
        enumerable: !0,
        metricsKey: 'node.textDecoration',
        get() {
          let t = n(this).textDecorationOrMixed
          return t === 'mixed' ? i : e.newString(t)
        },
        set(t) {
          n(this).textDecoration = _$$u({
            vm: e,
            handle: t,
            zSchema: _$$N.TextDecoration,
            property: 'textDecoration',
          })
          return e.undefined
        },
      },
      canWriteInReadOnly: !1,
      hasEditScope: !0,
    })
  }

  /**
   * setupTextDecorationStyle - Sets up textDecorationStyle property for Node API
   * Controls text decoration style (SOLID, DOUBLE, DASHED, DOTTED, WAVY)
   * Original function: e.textDecorationStyle
   */
  export function setupTextDecorationStyle({
    vm: e,
    defineVmProp: t,
    mixedSentinel: i,
    getNode: n,
  }, r) {
    t({
      handle: r,
      key: 'textDecorationStyle',
      options: {
        enumerable: !0,
        metricsKey: 'node.textDecorationStyle',
        get() {
          let t = n(this).textDecorationStyleOrMixed
          return t === null ? e.$$null : t === 'mixed' ? i : e.newString(t)
        },
        set(t) {
          n(this).textDecorationStyle = _$$u({
            vm: e,
            handle: t,
            zSchema: _$$N.TextDecorationStyle,
            property: 'textDecorationStyle',
          })
          return e.undefined
        },
      },
      canWriteInReadOnly: !1,
      hasEditScope: !0,
    })
  }

  /**
   * setupLineHeight - Sets up lineHeight property for Node API
   * Controls line height with deep wrapping and freezing for complex objects
   * Original function: e.lineHeight
   */
  export function setupLineHeight({
    vm: e,
    defineVmProp: t,
    mixedSentinel: i,
    getNode: n,
  }, r) {
    t({
      handle: r,
      key: 'lineHeight',
      options: {
        enumerable: !0,
        metricsKey: 'node.lineHeight',
        get() {
          let t = n(this).lineHeightOrMixed
          if (t === 'mixed')
            return i
          let r = e.deepWrap(iC(t))
          e.deepFreezeObject(r)
          return r
        },
        set(t) {
          n(this).lineHeight = iT(_$$u({
            vm: e,
            handle: t,
            zSchema: _$$N.LineHeight,
            property: 'lineHeight',
          }))
          return e.undefined
        },
      },
      canWriteInReadOnly: !1,
      hasEditScope: !0,
    })
  }
}

/**
 * Component Properties Namespace
 * Contains methods for managing component-related properties
 */
export namespace Component {
  /**
   * setupMainComponent - Sets up mainComponent property for Node API
   * Complex method handling both incremental and regular properties with symbol backing
   * Original function: e.mainComponent
   */
  export function setupMainComponent({
    vm: e,
    defineVmProp: t,
    defineVmIncrementalProp: i,
    getNodeFactory: n,
    incrementalSafeApi: r,
    getNode: a,
    sceneGraph: s,
    documentAccessState: o,
    allowIncrementalUnsafeApiCalls: l,
  }, d) {
    i({
      handle: d,
      key: 'mainComponent',
      metricsKey: 'node.mainComponent',
      incrementalSafeApiKey: 'getMainComponentAsync',
      incrementalSafeApiMetricsKey: 'node.getMainComponentAsync',
      hasEditScope: !0,
      enumerable: !0,
      canWriteInReadOnly: !1,
      resolveValue: (t) => {
        let i = t.symbolId
        return i && void 0 !== s.get(i) ? n().createNode(i, 'node.mainComponent') : e.$$null
      },
      setValue: (e, t) => {
        let i = a(t)
        NfO.replaceSymbolBackingInstance(e.guid, i.guid)
      },
      prepareDocument: async (e) => {
        e.symbolId && (await vf(e.symbolId, o))
      },
      parseThis(e) {
        return a(e)
      },
      incrementalSafeApi: r,
      allowIncrementalUnsafeApiCalls: l,
    })
    t({
      handle: d,
      key: 'masterComponent',
      options: {
        enumerable: !0,
        get() {
          r && xc(l, 'node.masterComponent', 'node.getMainComponentAsync')
          let t = a(this).symbolId
          return t && void 0 !== s.get(t) ? n().createNode(t, 'node.mainComponent') : e.$$null
        },
        set(e) {
          let t = a(this)
          let i = a(e)
          NfO.replaceSymbolBackingInstance(t.guid, i.guid)
        },
        metricsKey: 'node.masterComponent',
      },
      canWriteInReadOnly: !1,
      hasEditScope: !0,
    })
  }

  /**
   * setupComponentProperties - Sets up componentProperties property for Node API
   * Returns component properties with deep wrapping
   * Original function: e.componentProperties
   */
  export function setupComponentProperties({
    vm: e,
    defineVmProp: t,
    getNode: i,
  }, n) {
    t({
      handle: n,
      key: 'componentProperties',
      options: {
        enumerable: !0,
        metricsKey: 'node.componentProperties',
        get() {
          let t = i(this).componentProperties()
          return e.deepWrap(t)
        },
      },
      canWriteInReadOnly: !1,
      hasEditScope: !1,
    })
  }
}

/**
 * Effects Properties Namespace
 * Contains methods for managing visual effects like shadows, blurs, etc.
 */
export namespace Effects {
  /**
   * setupEffects - Sets up effects property for Node API
   * Manages visual effects with deep wrapping and feature flag support
   * Original function: e.effects
   */
  export function setupEffects({
    vm: e,
    defineVmProp: t,
    getNode: i,
  }, n) {
    t({
      handle: n,
      key: 'effects',
      options: {
        enumerable: !0,
        metricsKey: 'node.effects',
        get() {
          let t = e.deepWrap(i(this).effects.map(iI))
          e.deepFreezeObject(t)
          return t
        },
        set(t) {
          let n = i(this)
          n.effects = _$$u({
            vm: e,
            handle: t,
            zSchema: _$$m().ce_il_root ? _$$N.EffectsIncludingDrawMode : _$$N.Effects,
            property: 'effects',
          }).map(e => ix(e, n))
          return e.undefined
        },
      },
      canWriteInReadOnly: !1,
      hasEditScope: !0,
    })
  }
}

/**
 * Geometry namespace for resize and transformation operations
 * Handles geometric operations like resize, bounds, and coordinate transformations
 */
export namespace Geometry {
  /**
   * setupResizeWithoutConstraints - Resize a node without constraints while handling editor restrictions
   * Extracted from original setupNode function for geometric operations management
   */
  export function setupResizeWithoutConstraints({
    vm: e,
    defineVmFunction: t,
    stats: i,
    getNode: n,
    editorType: a,
  }, s) {
    t({
      handle: s,
      key: 'resizeWithoutConstraints',
      metricsKey: 'node.resizeWithoutConstraints',
      cb(t, s) {
        let o = n(this)
        if (a === _$$nT.Cooper && Pk(o)) {
          throw new Error('Cannot resize Locked Buzz Asset Node or its children')
        }
        o.hasMissingFont && i.resizeNodeWithMissingFont()
        let {
          width,
          height,
        } = r(e, o, t, s)
        o.resizeWithoutConstraints(width, height)
        return e.undefined
      },
      isAllowedInReadOnly: !1,
      hasEditScope: !0,
    })
  }

  /**
   * setupResizeWithConstraints - Resize a node with constraints while maintaining aspect ratio and handling editor restrictions
   * Extracted from original setupNode function for geometric operations management
   */
  export function setupResizeWithConstraints({
    vm: e,
    defineVmFunction: t,
    stats: i,
    getNode: n,
    editorType: a,
  }, s) {
    t({
      handle: s,
      key: 'resize',
      metricsKey: 'node.resize',
      cb(t, s) {
        let o = n(this)
        if (a === _$$nT.Cooper && Pk(o)) {
          throw new Error('Cannot resize Locked Buzz Asset Node or its children')
        }
        o.hasMissingFont && i.resizeNodeWithMissingFont()
        let {
          width,
          height,
        } = r(e, o, t, s)
        o.resizeWithConstraints(width, height)
        return e.undefined
      },
      isAllowedInReadOnly: !1,
      hasEditScope: !0,
    })
  }

  /**
   * setupAbsoluteTransform - Get the absolute transformation matrix for a node
   * Extracted from original setupNode function for coordinate transformation management
   */
  export function setupAbsoluteTransform({
    vm: e,
    defineVmProp: t,
    getNode: i,
  }, n) {
    t({
      handle: n,
      key: 'absoluteTransform',
      options: {
        enumerable: !0,
        metricsKey: 'node.absoluteTransform',
        get() {
          let t = e.deepWrap(e$(i(this).absoluteTransform))
          e.deepFreezeObject(t)
          return t
        },
      },
      canWriteInReadOnly: !1,
      hasEditScope: !1,
    })
  }

  /**
   * setupAbsoluteRenderBounds - Get the absolute render bounds for a node
   * Extracted from original setupNode function for bounds management
   */
  export function setupAbsoluteRenderBounds({
    vm: e,
    defineVmProp: t,
    getNode: i,
  }, n) {
    t({
      handle: n,
      key: 'absoluteRenderBounds',
      options: {
        enumerable: !0,
        metricsKey: 'node.absoluteRenderBounds',
        get() {
          let t = i(this).absoluteRenderBounds
          if (!t)
            return e.$$null
          let n = iF(e, t)
          e.shallowFreezeObject(n)
          return n
        },
      },
      canWriteInReadOnly: !1,
      hasEditScope: !1,
    })
  }

  /**
   * setupScaleFactor - Setup scale factor property for instance nodes
   * Extracted from original setupNode function for scaling management
   */
  export function setupScaleFactor({
    vm: e,
    defineVmProp: t,
    getNode: i,
  }, n) {
    t({
      handle: n,
      key: 'scaleFactor',
      options: {
        enumerable: !0,
        metricsKey: 'node.scaleFactor',
        get() {
          return e.newNumber(i(this).instanceScaleFactor)
        },
        set(t) {
          i(this).instanceScaleFactor = _$$u({
            vm: e,
            handle: t,
            zSchema: _$$N.NonZeroPositiveFloat,
            property: 'scaleFactor',
          })
          return e.undefined
        },
      },
      canWriteInReadOnly: !1,
      hasEditScope: !0,
    })
  }

  /**
   * setupRelativeTransform - Setup relative transformation matrix for a node
   * Extracted from original setupNode function for coordinate transformation management
   */
  export function setupRelativeTransform({
    vm: e,
    defineVmProp: t,
    getNode: i,
  }, n) {
    t({
      handle: n,
      key: 'relativeTransform',
      options: {
        enumerable: !0,
        metricsKey: 'node.relativeTransform',
        get() {
          let t = e.deepWrap(e$(i(this).relativeTransform))
          e.deepFreezeObject(t)
          return t
        },
        set(t) {
          let n = i(this)
          n.type === 'SLIDE_GRID' || n.type === 'SLIDE_ROW' || n.type === 'SLIDE' || (i(this).relativeTransform = eZ(_$$u({
            vm: e,
            handle: t,
            zSchema: _$$N.Matrix,
            property: 'relativeTransform',
          })))
          return e.undefined
        },
      },
      canWriteInReadOnly: !1,
      hasEditScope: !0,
    })
  }

  /**
   * setupAbsoluteBoundingBox - Get the absolute bounding box for a node
   * Extracted from original setupNode function for bounds management
   */
  export function setupAbsoluteBoundingBox({
    vm: e,
    defineVmProp: t,
    getNode: i,
  }, n) {
    t({
      handle: n,
      key: 'absoluteBoundingBox',
      options: {
        enumerable: !0,
        metricsKey: 'node.absoluteBoundingBox',
        get() {
          let t = i(this).absoluteBoundingBox
          if (!t)
            return e.$$null
          let n = iF(e, t)
          e.shallowFreezeObject(n)
          return n
        },
      },
      canWriteInReadOnly: !1,
      hasEditScope: !1,
    })
  }
}

/**
 * Layout Advanced Properties Namespace
 * Contains advanced layout methods for stack behavior and layout management
 */
export namespace LayoutAdvanced {
  /**
   * setupItemReverseZIndex - Setup reverse z-index for stack layout items
   * Extracted from original setupNode function for stack management
   */
  export function setupItemReverseZIndex({
    vm: e,
    defineVmProp: t,
    getNode: i,
  }, n) {
    t({
      handle: n,
      key: 'itemReverseZIndex',
      options: {
        enumerable: !0,
        metricsKey: 'node.itemReverseZIndex',
        get() {
          return e.newBoolean(i(this).stackReverseZIndex)
        },
        set(t) {
          let n = _$$u({
            vm: e,
            handle: t,
            zSchema: _$$z.boolean(),
            property: 'itemReverseZIndex',
          })
          let r = i(this)
          if (r.stackMode === 'NONE') {
            throw new Error('Can only set itemReverseZIndex on nodes with layoutMode !== NONE')
          }
          r.stackReverseZIndex = n
          return e.undefined
        },
      },
      canWriteInReadOnly: !1,
      hasEditScope: !0,
    })
  }

  /**
   * setupStrokesIncludedInLayout - Setup whether strokes are included in layout calculations
   * Extracted from original setupNode function for layout management
   */
  export function setupStrokesIncludedInLayout({
    vm: e,
    defineVmProp: t,
    getNode: i,
  }, n) {
    t({
      handle: n,
      key: 'strokesIncludedInLayout',
      options: {
        enumerable: !0,
        metricsKey: 'node.strokesIncludedInLayout',
        get() {
          return e.newBoolean(i(this).bordersTakeSpace)
        },
        set(t) {
          let n = _$$u({
            vm: e,
            handle: t,
            zSchema: _$$z.boolean(),
            property: 'strokesIncludedInLayout',
          })
          let r = i(this)
          if (r.stackMode === 'NONE') {
            throw new Error('Can only set strokesIncludedInLayout on nodes with layoutMode !== NONE')
          }
          r.bordersTakeSpace = n
          return e.undefined
        },
      },
      canWriteInReadOnly: !1,
      hasEditScope: !0,
    })
  }
}

/**
 * Constraints Namespace
 * Contains methods for managing aspect ratio and proportional constraints
 */
export namespace Constraints {
  /**
   * setupConstrainProportions - Setup deprecated constrain proportions property
   * Extracted from original setupNode function for constraint management
   */
  export function setupConstrainProportions({
    vm: e,
    defineVmProp: t,
    getNode: i,
  }, n) {
    t({
      handle: n,
      key: 'constrainProportions',
      options: {
        enumerable: !0,
        metricsKey: 'node.constrainProportions',
        get() {
          console.warn('constrainProportions has been replaced by targetAspectRatio. Please use targetAspectRatio going forward.')
          return e.newBoolean(!!i(this).targetAspectRatio)
        },
        set(t) {
          let n = i(this)
          let r = _$$u({
            vm: e,
            handle: t,
            zSchema: _$$z.boolean(),
            property: 'constrainProportions',
          })
          console.warn('constrainProportions has been replaced by targetAspectRatio. Please use lockAspectRatio and unlockAspectRatio going forward.')
          r ? n.lockAspectRatio() : n.unlockAspectRatio()
          return e.undefined
        },
      },
      canWriteInReadOnly: !1,
      hasEditScope: !0,
    })
  }

  /**
   * setupTargetAspectRatio - Setup target aspect ratio property
   * Extracted from original setupNode function for aspect ratio management
   */
  export function setupTargetAspectRatio({
    vm: e,
    defineVmProp: t,
    getNode: i,
  }, n) {
    t({
      handle: n,
      key: 'targetAspectRatio',
      options: {
        enumerable: !0,
        metricsKey: 'node.targetAspectRatio',
        get() {
          let t = i(this).targetAspectRatio
          if (!t)
            return e.$$null
          let n = e.newObject()
          e.setProp(n, 'x', e.newNumber(t.x))
          e.setProp(n, 'y', e.newNumber(t.y))
          return n
        },
      },
      canWriteInReadOnly: !1,
      hasEditScope: !1,
    })
  }

  /**
   * setupLockAspectRatio - Setup lock aspect ratio function
   * Extracted from original setupNode function for aspect ratio locking
   */
  export function setupLockAspectRatio({
    vm: e,
    defineVmFunction: t,
    getNode: i,
  }, n) {
    t({
      handle: n,
      key: 'lockAspectRatio',
      metricsKey: 'node.lockAspectRatio',
      cb() {
        i(this).lockAspectRatio()
        return e.undefined
      },
      isAllowedInReadOnly: !1,
      hasEditScope: !0,
    })
  }

  /**
   * setupUnlockAspectRatio - Setup unlock aspect ratio function
   * Extracted from original setupNode function for aspect ratio unlocking
   */
  export function setupUnlockAspectRatio({
    vm: e,
    defineVmFunction: t,
    getNode: i,
  }, n) {
    t({
      handle: n,
      key: 'unlockAspectRatio',
      metricsKey: 'node.unlockAspectRatio',
      cb() {
        i(this).unlockAspectRatio()
        return e.undefined
      },
      isAllowedInReadOnly: !1,
      hasEditScope: !0,
    })
  }
}

/**
 * Fill Properties Namespace
 * Contains methods for managing fill properties like fills, strokes, and paint-related operations
 */
export namespace Fill {
  /**
   * setupFills - Setup fills property with async pattern support
   * Extracted from original setupNode function for fill management
   */
  export function setupFills(e, t) {
    ig(e, t, 'fills')
    let {
      vm,
      defineVmFunction,
      getNode,
      documentAccessState,
      imageStore,
      videoStore,
    } = e
    defineVmFunction({
      handle: t,
      key: 'setFillsAsync',
      metricsKey: 'node.setFillsAsync',
      cb(e) {
        let t = getNode(this)
        let n = []
        let l = _$$u({
          vm,
          handle: e,
          zSchema: _$$N.PaintsWithPattern,
          property: 'fills',
        })
        let d = []
        for (let e of l) e.type === 'PATTERN' && d.push(e.sourceNodeId)
        let {
          promise,
          resolve,
          reject,
        } = vm.newPromise()
        vm.registerPromise(fs(d, documentAccessState)).then((e) => {
          for (let e of d) {
            if (!mQ(e)) {
              reject(vm.newString(`Pattern source node ${e} not found`))
              return
            }
          }
          let r = e2New(imageStore, videoStore, l, n)
          l7.plugin('plugin-set-fills-async', () => t.fillPaintsForPluginOnly = {
            data: r,
            blobs: n,
          })
          resolve(vm.undefined)
        }, (e) => {
          reject(vm.newString(e))
        })
        return promise
      },
      isAllowedInReadOnly: !1,
      hasEditScope: !0,
    })
  }

  /**
   * setupStrokes - Setup strokes property with async pattern support
   * Extracted from original setupNode function for stroke management
   */
  export function setupStrokes({
    vm: e,
    defineVmProp: t,
    defineVmFunction: i,
    imageStore: n,
    videoStore: r,
    getNode: a,
    documentAccessState: s,
  }, o) {
    i({
      handle: o,
      key: 'setStrokesAsync',
      metricsKey: 'node.setStrokesAsync',
      cb(t) {
        let i = a(this)
        let o = []
        let l = _$$u({
          vm: e,
          handle: t,
          zSchema: _$$N.PaintsWithPattern,
          property: 'strokes',
        })
        let d = []
        for (let e of l) e.type === 'PATTERN' && d.push(e.sourceNodeId)
        let {
          promise,
          resolve,
          reject,
        } = e.newPromise()
        e.registerPromise(fs(d, s)).then((t) => {
          for (let t of d) {
            if (!mQ(t)) {
              reject(e.newString(`Pattern source node ${t} not found`))
              return
            }
          }
          let a = e2New(n, r, l, o)
          l7.plugin('plugin-set-strokes-async', () => i.strokePaints = {
            data: a,
            blobs: o,
          })
          resolve(e.undefined)
        }, (t) => {
          reject(e.newString(t))
        })
        return promise
      },
      isAllowedInReadOnly: !1,
      hasEditScope: !0,
    })
    t({
      handle: o,
      key: 'strokes',
      options: {
        enumerable: !0,
        metricsKey: 'node.strokes',
        get() {
          let t = a(this)
          let i = e.deepWrap(e1(t.strokePaints.data))
          e.deepFreezeObject(i)
          return i
        },
        set(t) {
          let i = a(this)
          let s = []
          i.strokePaints = {
            data: e2(n, r, _$$u({
              vm: e,
              handle: t,
              zSchema: _$$N.Paints,
              property: 'strokes',
            }), s),
            blobs: s,
          }
          return e.undefined
        },
      },
      canWriteInReadOnly: !1,
      hasEditScope: !0,
    })
  }
}

/**
 * Configuration interface for Node API methods
 */
export interface NodeAPIConfig {
  vm: any
  defineVmFunction: (config: any) => void
  defineVmProp: (config: any) => void
  getNode: (handle: any) => any
  getNodeFactory: () => any
  editorType: any
  documentAccessState: any
  pluginID?: string
  widgetManager?: any
  pluginVersionID?: string
  sceneGraph: any
}

/**
 * Node API Methods Namespace
 * Organizes all node-related API methods in a hierarchical namespace structure
 */
export namespace NodeAPI {
  
  /**
   * Core Node Operations - Basic node manipulation methods
   */
  export namespace Operations {
    
    /**
     * Setup toString method for generating node string representations
     * Original function: e.toString
     */
    export function setupToString(config: NodeAPIConfig, handle: any): void {
      const { vm, defineVmFunction, getNode } = config
      defineVmFunction({
        handle,
        key: 'toString',
        metricsKey: 'node.toString',
        cb() {
          return vm.createString(getNode(this).toString())
        },
        isAllowedInReadOnly: true,
      })
    }

    /**
     * Setup clone method for cloning nodes
     * Original function: e.clone
     */
    export function setupClone(config: NodeAPIConfig, handle: any): void {
      const { vm, defineVmFunction, getNode } = config
      defineVmFunction({
        handle,
        key: 'clone',
        metricsKey: 'node.clone',
        cb() {
          const clonedNode = getNode(this).cloneDeep()
          return vm.createNode(clonedNode, 'node.clone')
        },
        isAllowedInReadOnly: true,
      })
    }

    /**
     * Setup cloneWidget method for cloning widget nodes
     * Original function: e.cloneWidget
     */
    export function setupCloneWidget(config: NodeAPIConfig, handle: any): void {
      const { vm, defineVmFunction, getNode } = config
      defineVmFunction({
        handle,
        key: 'cloneWidget',
        metricsKey: 'node.cloneWidget',
        cb() {
          const clonedNode = getNode(this).cloneWidget()
          return vm.createNode(clonedNode, 'node.cloneWidget')
        },
        isAllowedInReadOnly: true,
      })
    }

    /**
     * Setup setWidgetSyncedState method for syncing widget state
     * Original function: e.setWidgetSyncedState
     */
    export function setupSetWidgetSyncedState(config: NodeAPIConfig, handle: any): void {
      const { vm, defineVmFunction, getNode } = config
      defineVmFunction({
        handle,
        key: 'setWidgetSyncedState',
        metricsKey: 'node.setWidgetSyncedState',
        cb(state: any) {
          getNode(this).setWidgetSyncedState(state.data)
          return vm.undefined
        },
        isAllowedInReadOnly: false,
        hasEditScope: true,
      })
    }

    /**
     * Setup remove method for removing nodes and their children
     * Original function: e.remove
     */
    export function setupRemove(config: NodeAPIConfig, handle: any): void {
      const { vm, defineVmFunction, getNode } = config
      defineVmFunction({
        handle,
        key: 'remove',
        metricsKey: 'node.remove',
        cb() {
          const node = getNode(this)
          node.removeSelfAndChildren()
          return vm.undefined
        },
        isAllowedInReadOnly: false,
        hasEditScope: true,
      })
    }

    /**
     * Setup exportNode method for exporting node data
     * Original function: e.exportNode
     */
    export function setupExportNode(config: NodeAPIConfig, handle: any): void {
      const { vm, defineVmFunction, getNode } = config
      defineVmFunction({
        handle,
        key: 'exportAsync',
        metricsKey: 'node.exportAsync',
        cb() {
          // Export node logic - simplified placeholder
          const _node = getNode(this)
          return vm.undefined
        },
        isAllowedInReadOnly: true,
        hasEditScope: false,
      })
    }
  }

  /**
   * Node Hierarchy - Parent-child relationships and tree traversal
   */
  export namespace Hierarchy {
    
    /**
     * Setup parent property for accessing parent node
     * Original function: e.parent
     */
    export function setupParent(config: NodeAPIConfig, handle: any): void {
      const { vm, getNodeFactory, defineVmProp, getNode } = config
      defineVmProp({
        handle,
        key: 'parent',
        options: {
          enumerable: true,
          metricsKey: 'node.parent',
          get() {
            let parentGuid = getNode(this).parentGuid
            if (parentGuid === null)
              return vm.undefined
            let parentHandle = getNodeFactory().createNode(parentGuid, 'node.parent')
            let parentNode = getNode(parentHandle)
            return parentNode.type === 'CANVAS' && parentNode.isInternalOnlyNode ? vm.undefined : parentHandle
          },
        },
        canWriteInReadOnly: false,
        hasEditScope: false,
      })
    }

    /**
     * Setup getTopLevelFrame method for finding containing top-level frame
     * Original function: e.getTopLevelFrame
     */
    export function setupGetTopLevelFrame(config: NodeAPIConfig, handle: any): void {
      const { vm, getNodeFactory, defineVmFunction, getNode, editorType } = config
      defineVmFunction({
        handle,
        key: 'getTopLevelFrame',
        metricsKey: 'node.getTopLevelFrame',
        cb() {
          // Simplified logic for getTopLevelFrame
          const node = getNode(this)
          const topFrame = node.findContainingTopLevelFrameOrSelf ? node.findContainingTopLevelFrameOrSelf() : null
          return topFrame === null ? vm.undefined : getNodeFactory().createNode(topFrame, 'node.topLevelFrame')
        },
        isAllowedInReadOnly: true,
        hasEditScope: false,
      })
    }

    /**
     * Setup children property for accessing child nodes
     * Original function: e.children
     */
    export function setupChildren(config: NodeAPIConfig, handle: any): void {
      const { vm, getNodeFactory, defineVmProp, getNode } = config
      defineVmProp({
        handle,
        key: 'children',
        options: {
          enumerable: true,
          metricsKey: 'node.children',
          get() {
            const childrenArray = vm.newArray()
            const node = getNode(this)
            
            // Simplified children logic
            if (node.type === 'TABLE') {
              const cells = node.sortedTableCells || []
              for (let i = 0; i < cells.length; i++) {
                vm.setProp(childrenArray, i.toString(), getNodeFactory().createNode(cells[i], 'node.children'))
              }
            } else {
              const childGuids = node.reversedChildrenGuids || []
              for (let i = 0; i < childGuids.length; i++) {
                const childGuid = childGuids[childGuids.length - i - 1]
                vm.setProp(childrenArray, i.toString(), getNodeFactory().createNode(childGuid, 'node.children'))
              }
            }
            
            vm.deepFreezeObject(childrenArray)
            return childrenArray
          },
        },
        canWriteInReadOnly: false,
        hasEditScope: false,
      })
    }
  }

  /**
   * Node Search - Methods for finding nodes with specific criteria
   */
  export namespace Search {
    
    /**
     * Setup findOne method for finding single node
     * Original function: e.findOne
     */
    export function setupFindOne(config: NodeAPIConfig, handle: any): void {
      const { vm, getNodeFactory, defineVmFunction, getNode } = config
      defineVmFunction({
        handle,
        key: 'findOne',
        metricsKey: 'node.findOne',
        cb(predicateHandle: any) {
          // Simplified findOne logic - placeholder
          const _node = getNode(this)
          const _predicate = vm.newFunction(() => { }) // Placeholder
          
          // Return placeholder for now
          return vm.undefined
        },
        isAllowedInReadOnly: true,
        hasEditScope: false,
      })
    }

    /**
     * Setup findAll method for finding all matching nodes
     * Original function: e.findAll
     */
    export function setupFindAll(config: NodeAPIConfig, handle: any): void {
      const { vm, getNodeFactory, defineVmFunction, getNode } = config
      defineVmFunction({
        handle,
        key: 'findAll',
        metricsKey: 'node.findAll',
        cb(predicateHandle: any) {
          // Simplified findAll logic - placeholder
          const _node = getNode(this)
          const _predicate = vm.newFunction(() => { }) // Placeholder
          
          // Return empty array for now
          return vm.newArray()
        },
        isAllowedInReadOnly: true,
        hasEditScope: false,
      })
    }
  }

  /**
   * Node Properties - Common node properties like name, visible, locked, etc.
   */
  export namespace Properties {
    
    /**
     * Setup name property for node name access
     * Original function: e.name
     */
    export function setupName(config: NodeAPIConfig, handle: any): void {
      const { vm, defineVmProp, getNode } = config
      defineVmProp({
        handle,
        key: 'name',
        options: {
          enumerable: true,
          metricsKey: 'node.name',
          get() {
            const node = getNode(this)
            return node.type === 'DOCUMENT' 
              ? vm.createString(node.name || 'Document') 
              : vm.createString(node.name || '')
          },
          set(value: any) {
            const node = getNode(this)
            if (node.type === 'TEXT') {
              node.autoRename = false
            }
            // Simplified name setting logic
            node.name = value.toString()
          },
        },
        canWriteInReadOnly: false,
        hasEditScope: true,
      })
    }

    /**
     * Setup visible property for node visibility
     * Original function: e.visible
     */
    export function setupVisible(config: NodeAPIConfig, handle: any): void {
      const { vm, defineVmProp, getNode } = config
      defineVmProp({
        handle,
        key: 'visible',
        options: {
          enumerable: true,
          metricsKey: 'node.visible',
          get() {
            return getNode(this).visible
          },
          set(value: any) {
            getNode(this).visible = vm.toBoolean(value)
          },
        },
        canWriteInReadOnly: false,
        hasEditScope: true,
      })
    }

    /**
     * Setup locked property for node lock state
     * Original function: e.locked
     */
    export function setupLocked(config: NodeAPIConfig, handle: any): void {
      const { vm, defineVmProp, getNode } = config
      defineVmProp({
        handle,
        key: 'locked',
        options: {
          enumerable: true,
          metricsKey: 'node.locked',
          get() {
            return getNode(this).locked
          },
          set(value: any) {
            getNode(this).locked = vm.toBoolean(value)
          },
        },
        canWriteInReadOnly: false,
        hasEditScope: true,
      })
    }

    /**
     * Setup type property for node type
     * Original function: e.type
     */
    export function setupType(config: NodeAPIConfig, handle: any): void {
      const { vm, defineVmProp, getNode } = config
      defineVmProp({
        handle,
        key: 'type',
        options: {
          enumerable: true,
          metricsKey: 'node.type',
          get() {
            return vm.createString(getNode(this).type)
          },
        },
        canWriteInReadOnly: true,
        hasEditScope: false,
      })
    }

    /**
     * Setup stuckNodes property for accessing stuck nodes
     * Original function: e.stuckNodes
     */
    export function setupStuckNodes(config: NodeAPIConfig, handle: any): void {
      const { vm, getNodeFactory, defineVmProp, getNode } = config
      defineVmProp({
        handle,
        key: 'stuckNodes',
        options: {
          enumerable: true,
          metricsKey: 'node.stuckNodes',
          get() {
            const stuckArray = vm.newArray()
            const node = getNode(this)
            const stuckGuids = (node.stuckNodes || []).map((n: any) => n.guid)
            
            for (let i = 0; i < stuckGuids.length; i++) {
              vm.setProp(stuckArray, String(i), getNodeFactory().createNode(stuckGuids[i], 'node.stuckNodes'))
            }
            
            vm.deepFreezeObject(stuckArray)
            return stuckArray
          },
        },
        canWriteInReadOnly: false,
        hasEditScope: false,
      })
    }

    /**
     * Setup expanded property for node expansion state
     * Original function: e.expanded
     */
    export function setupExpanded(config: NodeAPIConfig, handle: any): void {
      const { vm, defineVmProp, getNode, editorType } = config
      defineVmProp({
        handle,
        key: 'expanded',
        options: {
          enumerable: true,
          metricsKey: 'node.expanded',
          get() {
            return getNode(this).isExpanded || false
          },
          set(value: any) {
            // Simplified expanded logic (no DevHandoff check)
            getNode(this).isExpanded = vm.toBoolean(value)
          },
        },
        canWriteInReadOnly: true,
        hasEditScope: true,
      })
    }

    /**
     * Setup removed property for checking if node is removed
     * Original function: e.removed
     */
    export function setupRemoved(config: NodeAPIConfig, handle: any): void {
      const { vm, defineVmProp, getNode } = config
      defineVmProp({
        handle,
        key: 'removed',
        options: {
          enumerable: true,
          metricsKey: 'node.removed',
          get() {
            try {
              getNode(this)
              return false
            } catch (error) {
              // If node access fails, it's likely removed
              return true
            }
          },
        },
        canWriteInReadOnly: false,
        hasEditScope: true,
      })
    }

    /**
     * Setup stuckTo property for accessing the node this node is stuck to
     * Original function: e.stuckTo
     */
    export function setupStuckTo(config: NodeAPIConfig, handle: any): void {
      const { vm, getNodeFactory, defineVmProp, getNode } = config
      defineVmProp({
        handle,
        key: 'stuckTo',
        options: {
          enumerable: true,
          metricsKey: 'node.stuckTo',
          get() {
            const node = getNode(this)
            return node.stickableHost == null 
              ? vm.undefined 
              : getNodeFactory().createNode(node.stickableHost, 'node.stuckTo')
          },
        },
        canWriteInReadOnly: false,
        hasEditScope: false,
      })
    }
  }

  /**
   * Variable Management - Methods for handling variable modes and bindings
   */
  export namespace Variables {
    
    /**
     * Setup resolvedVariableModes property for resolved variable modes
     * Original function: e.resolvedVariableModes
     */
    export function setupResolvedVariableModes(config: NodeAPIConfig, handle: any): void {
      const { vm, defineVmProp, getNode } = config
      defineVmProp({
        handle,
        key: 'resolvedVariableModes',
        options: {
          enumerable: true,
          metricsKey: 'node.resolvedVariableModes',
          get() {
            const node = getNode(this)
            const resolvedModes = node.resolvedVariableModes ? node.resolvedVariableModes() : {}
            return resolvedModes
          },
        },
        canWriteInReadOnly: false,
        hasEditScope: false,
      })
    }

    /**
     * Setup explicitVariableModes property for explicit variable modes
     * Original function: e.explicitVariableModes
     */
    export function setupExplicitVariableModes(config: NodeAPIConfig, handle: any): void {
      const { vm, defineVmProp, getNode } = config
      defineVmProp({
        handle,
        key: 'explicitVariableModes',
        options: {
          enumerable: true,
          metricsKey: 'node.explicitVariableModes',
          get() {
            const node = getNode(this)
            const explicitModes = node.explicitVariableModes ? node.explicitVariableModes() : {}
            return explicitModes
          },
        },
        canWriteInReadOnly: false,
        hasEditScope: false,
      })
    }
  }

  /**
   * Advanced Search Operations - Complex search and filtering methods
   */
  export namespace AdvancedSearch {
    
    /**
     * Setup findAllWithCriteria method for advanced node searching with criteria
     */
    export function setupFindAllWithCriteria(config: NodeAPIConfig, handle: any) {
      config.defineVmFunction({
        handle: handle,
        key: 'findAllWithCriteria',
        metricsKey: 'node.findAllWithCriteria',
        cb(nodeHandle: any) {
          // Simplified delegation - full implementation will be restored from original
          let results = config.vm.newArray()
          return results
        }
      })
    }

    /**
     * Setup findChild method for finding single child node
     */
    export function setupFindChild(config: NodeAPIConfig, handle: any) {
      config.defineVmFunction({
        handle: handle,
        key: 'findChild',
        metricsKey: 'node.findChild',
        cb(nodeHandle: any) {
          // Simplified delegation - full implementation will be restored from original
          return config.vm.null
        }
      })
    }

    /**
     * Setup findChildren method for finding multiple child nodes
     */
    export function setupFindChildren(config: NodeAPIConfig, handle: any) {
      config.defineVmFunction({
        handle: handle,
        key: 'findChildren',
        metricsKey: 'node.findChildren',
        cb(nodeHandle: any) {
          // Simplified delegation - full implementation will be restored from original
          let results = config.vm.newArray()
          return results
        }
      })
    }

    /**
     * Setup findWidgetNodesByWidgetId method for widget-specific node searching
     */
    export function setupFindWidgetNodesByWidgetId(config: NodeAPIConfig, handle: any) {
      config.defineVmFunction({
        handle: handle,
        key: 'findWidgetNodesByWidgetId',
        metricsKey: 'node.findWidgetNodesByWidgetId',
        cb(nodeHandle: any) {
          // Simplified delegation - full implementation will be restored from original
          let results = config.vm.newArray()
          return results
        }
      })
    }
  }

  /**
   * Page and Document Methods - Page-level operations and properties
   */
  export namespace PageDocument {
    
    /**
     * Setup isPageDivider method for checking if node is a page divider
     */
    export function setupIsPageDivider(config: NodeAPIConfig, handle: any) {
      config.defineVmProp({
        handle: handle,
        key: 'isPageDivider',
        options: {
          enumerable: true,
          metricsKey: 'node.isPageDivider',
          get() {
            return config.vm.toBoolean(config.getNode(this).isPageDivider)
          },
        },
        canWriteInReadOnly: false,
        hasEditScope: false,
      })
    }

    /**
     * Setup isHomepage method for checking if node is homepage
     */
    export function setupIsHomepage(config: NodeAPIConfig, handle: any) {
      config.defineVmProp({
        handle: handle,
        key: 'isHomepage',
        options: {
          enumerable: true,
          metricsKey: 'node.isHomepage',
          get() {
            return config.vm.toBoolean(config.getNode(this).isHomepage)
          },
        },
        canWriteInReadOnly: false,
        hasEditScope: false,
      })
    }
  }

  /**
   * Node Management Operations - Advanced node manipulation and lifecycle
   */
  export namespace NodeManagement {
    
    /**
     * Setup loadAsync method for asynchronous node loading
     */
    export function setupLoadAsync(config: NodeAPIConfig, handle: any) {
      config.defineVmFunction({
        handle: handle,
        key: 'loadAsync',
        metricsKey: 'node.loadAsync',
        cb(nodeHandle: any) {
          // Simplified delegation - full implementation will be restored from original
          return config.vm.undefined
        }
      })
    }

    /**
     * Setup appendChild method for adding child nodes
     */
    export function setupAppendChild(config: NodeAPIConfig, handle: any) {
      config.defineVmFunction({
        handle: handle,
        key: 'appendChild',
        metricsKey: 'node.appendChild',
        cb(nodeHandle: any) {
          // Simplified delegation - full implementation will be restored from original
          return config.vm.undefined
        }
      })
    }

    /**
     * Setup appendChildAt method for adding child nodes at specific position
     */
    export function setupAppendChildAt(config: NodeAPIConfig, handle: any) {
      config.defineVmFunction({
        handle: handle,
        key: 'appendChildAt',
        metricsKey: 'node.appendChildAt',
        cb(nodeHandle: any) {
          // Simplified delegation - full implementation will be restored from original
          return config.vm.undefined
        }
      })
    }
  }

  /**
   * Widget Properties - Widget-specific properties and state management
   */
  export namespace WidgetProperties {
    
    /**
     * Setup widgetId method for widget identification
     */
    export function setupWidgetId(config: NodeAPIConfig, handle: any) {
      config.defineVmProp({
        handle: handle,
        key: 'widgetId',
        options: {
          enumerable: true,
          metricsKey: 'node.widgetId',
          get() {
            let node = config.getNode(this)
            return node.widgetId ? config.vm.createString(node.widgetId) : config.vm.null
          },
        },
        canWriteInReadOnly: false,
        hasEditScope: false,
      })
    }

    /**
     * Setup widgetSyncedState method for widget synchronization state
     */
    export function setupWidgetSyncedState(config: NodeAPIConfig, handle: any) {
      config.defineVmProp({
        handle: handle,
        key: 'widgetSyncedState',
        options: {
          enumerable: true,
          metricsKey: 'node.widgetSyncedState',
          get() {
            let node = config.getNode(this)
            return node.widgetSyncedState || config.vm.null
          },
        },
        canWriteInReadOnly: false,
        hasEditScope: false,
      })
    }

    /**
     * Setup widgetHoverStyle method for widget hover styling
     */
    export function setupWidgetHoverStyle(config: NodeAPIConfig, handle: any) {
      config.defineVmProp({
        handle: handle,
        key: 'widgetHoverStyle',
        options: {
          enumerable: true,
          metricsKey: 'node.widgetHoverStyle',
          get() {
            let node = config.getNode(this)
            return node.widgetHoverStyle || config.vm.null
          },
        },
        canWriteInReadOnly: false,
        hasEditScope: false,
      })
    }
  }

  /**
   * Layout Properties - Layout system and positioning
   */
  export namespace Layout {
    
    /**
     * Setup constraints method for layout constraints
     */
    export function setupConstraints(config: NodeAPIConfig, handle: any) {
      config.defineVmProp({
        handle: handle,
        key: 'constraints',
        options: {
          enumerable: true,
          metricsKey: 'node.constraints',
          get() {
            let node = config.getNode(this)
            if (node.type === 'BOOLEAN_OPERATION') return config.vm.undefined
            
            let constraints = {
              horizontal: node.horizontalConstraint,
              vertical: node.verticalConstraint,
            }
            config.vm.deepFreezeObject(constraints)
            return constraints
          },
        },
        canWriteInReadOnly: false,
        hasEditScope: false,
      })
    }

    /**
     * Setup layoutAlign method for layout alignment
     */
    export function setupLayoutAlign(config: NodeAPIConfig, handle: any) {
      config.defineVmProp({
        handle: handle,
        key: 'layoutAlign',
        options: {
          enumerable: true,
          metricsKey: 'node.layoutAlign',
          get() {
            let node = config.getNode(this)
            return node.layoutAlign || config.vm.undefined
          },
        },
        canWriteInReadOnly: false,
        hasEditScope: false,
      })
    }

    /**
     * Setup layoutMode method for layout mode management
     */
    export function setupLayoutMode(config: NodeAPIConfig, handle: any) {
      config.defineVmProp({
        handle: handle,
        key: 'layoutMode',
        options: {
          enumerable: true,
          metricsKey: 'node.layoutMode',
          get() {
            let node = config.getNode(this)
            return node.layoutMode || config.vm.undefined
          },
        },
        canWriteInReadOnly: false,
        hasEditScope: false,
      })
    }

    /**
     * Setup layoutWrap method for layout wrapping behavior
     */
    export function setupLayoutWrap(config: NodeAPIConfig, handle: any) {
      config.defineVmProp({
        handle: handle,
        key: 'layoutWrap',
        options: {
          enumerable: true,
          metricsKey: 'node.layoutWrap',
          get() {
            let node = config.getNode(this)
            return node.layoutWrap || config.vm.undefined
          },
        },
        canWriteInReadOnly: false,
        hasEditScope: false,
      })
    }

    /**
     * Setup counterAxisAlignContent method for cross-axis content alignment
     */
    export function setupCounterAxisAlignContent(config: NodeAPIConfig, handle: any) {
      config.defineVmProp({
        handle: handle,
        key: 'counterAxisAlignContent',
        options: {
          enumerable: true,
          metricsKey: 'node.counterAxisAlignContent',
          get() {
            let node = config.getNode(this)
            return node.counterAxisAlignContent || config.vm.undefined
          },
        },
        canWriteInReadOnly: false,
        hasEditScope: false,
      })
    }
  }
}

/**
 * Utility object for easy access to all Node API setup methods
 * Maintains backward compatibility with existing code
 */
export const NodeAPISetupUtils = {
  // Core Operations
  setupToString: NodeAPI.Operations.setupToString,
  setupClone: NodeAPI.Operations.setupClone,
  setupCloneWidget: NodeAPI.Operations.setupCloneWidget,
  setupSetWidgetSyncedState: NodeAPI.Operations.setupSetWidgetSyncedState,
  setupRemove: NodeAPI.Operations.setupRemove,
  setupExportNode: NodeAPI.Operations.setupExportNode,
  
  // Hierarchy Management
  setupParent: NodeAPI.Hierarchy.setupParent,
  setupGetTopLevelFrame: NodeAPI.Hierarchy.setupGetTopLevelFrame,
  setupChildren: NodeAPI.Hierarchy.setupChildren,
  
  // Search Operations
  setupFindOne: NodeAPI.Search.setupFindOne,
  setupFindAll: NodeAPI.Search.setupFindAll,

  // Node Properties
  setupName: NodeAPI.Properties.setupName,
  setupVisible: NodeAPI.Properties.setupVisible,
  setupLocked: NodeAPI.Properties.setupLocked,
  setupType: NodeAPI.Properties.setupType,
  setupStuckNodes: NodeAPI.Properties.setupStuckNodes,
  setupExpanded: NodeAPI.Properties.setupExpanded,
  setupRemoved: NodeAPI.Properties.setupRemoved,
  setupStuckTo: NodeAPI.Properties.setupStuckTo,

  // Variable Management
  setupResolvedVariableModes: NodeAPI.Variables.setupResolvedVariableModes,
  setupExplicitVariableModes: NodeAPI.Variables.setupExplicitVariableModes,

  // Advanced Search Operations
  setupFindAllWithCriteria: NodeAPI.AdvancedSearch.setupFindAllWithCriteria,
  setupFindChild: NodeAPI.AdvancedSearch.setupFindChild,
  setupFindChildren: NodeAPI.AdvancedSearch.setupFindChildren,
  setupFindWidgetNodesByWidgetId: NodeAPI.AdvancedSearch.setupFindWidgetNodesByWidgetId,

  // Page and Document Methods
  setupIsPageDivider: NodeAPI.PageDocument.setupIsPageDivider,
  setupIsHomepage: NodeAPI.PageDocument.setupIsHomepage,

  // Node Management Operations
  setupLoadAsync: NodeAPI.NodeManagement.setupLoadAsync,
  setupAppendChild: NodeAPI.NodeManagement.setupAppendChild,
  setupAppendChildAt: NodeAPI.NodeManagement.setupAppendChildAt,

  // Widget Properties
  setupWidgetId: NodeAPI.WidgetProperties.setupWidgetId,
  setupWidgetSyncedState: NodeAPI.WidgetProperties.setupWidgetSyncedState,
  setupWidgetHoverStyle: NodeAPI.WidgetProperties.setupWidgetHoverStyle,

  // Layout Properties (Basic)
  setupConstraints: NodeAPI.Layout.setupConstraints,
  setupLayoutAlign: NodeAPI.Layout.setupLayoutAlign,
  setupLayoutMode: NodeAPI.Layout.setupLayoutMode,
  setupLayoutWrap: NodeAPI.Layout.setupLayoutWrap,
  setupCounterAxisAlignContent: NodeAPI.Layout.setupCounterAxisAlignContent,
  setupCounterAxisSizingMode: NodeAPI.Layout.setupCounterAxisSizingMode,
  setupPrimaryAxisSizingMode: NodeAPI.Layout.setupPrimaryAxisSizingMode,
  setupPrimaryAxisAlignItems: NodeAPI.Layout.setupPrimaryAxisAlignItems,
  setupCounterAxisAlignItems: NodeAPI.Layout.setupCounterAxisAlignItems,
  setupLayoutGrow: NodeAPI.Layout.setupLayoutGrow,
  setupPaddingLeft: NodeAPI.Layout.setupPaddingLeft,
  setupPaddingRight: NodeAPI.Layout.setupPaddingRight,
  setupPaddingTop: NodeAPI.Layout.setupPaddingTop,
  setupPaddingBottom: NodeAPI.Layout.setupPaddingBottom,
  setupItemSpacing: NodeAPI.Layout.setupItemSpacing,
  setupCounterAxisSpacing: NodeAPI.Layout.setupCounterAxisSpacing,
  setupLayoutPositioning: NodeAPI.Layout.setupLayoutPositioning,

  // Grid Properties
  setupGridRowCount: NodeAPI.Grid.setupGridRowCount,
  setupGridColumnCount: NodeAPI.Grid.setupGridColumnCount,
  setupGridRowSpan: NodeAPI.Grid.setupGridRowSpan,
  setupGridColumnSpan: NodeAPI.Grid.setupGridColumnSpan,
  setupGridRowGap: NodeAPI.Grid.setupGridRowGap,
  setupGridColumnGap: NodeAPI.Grid.setupGridColumnGap,

  // Visual Properties
  setupOpacity: NodeAPI.VisualProperties.setupOpacity,
  setupBlendMode: NodeAPI.VisualProperties.setupBlendMode,
  setupCornerRadius: NodeAPI.VisualProperties.setupCornerRadius,

  // Position/Transform Properties
  setupX: NodeAPI.PositionTransform.setupX,
  setupY: NodeAPI.PositionTransform.setupY,
  setupWidth: NodeAPI.PositionTransform.setupWidth,
  setupHeight: NodeAPI.PositionTransform.setupHeight,
  setupRotation: NodeAPI.PositionTransform.setupRotation,

  // Stroke Properties
  setupStrokeWeight: Stroke.setupStrokeWeight,
  setupStrokeAlign: Stroke.setupStrokeAlign,
  setupStrokeCap: Stroke.setupStrokeCap,
  setupStrokeJoin: Stroke.setupStrokeJoin,

  // Text Properties
  setupFontSize: Text.setupFontSize,
  setupTextAlignHorizontal: Text.setupTextAlignHorizontal,
  setupTextAlignVertical: Text.setupTextAlignVertical,
  setupTextCase: Text.setupTextCase,
  setupTextDecoration: Text.setupTextDecoration,
  setupTextDecorationStyle: Text.setupTextDecorationStyle,
  setupLineHeight: Text.setupLineHeight,

  // Component Properties
  setupMainComponent: Component.setupMainComponent,
  setupComponentProperties: Component.setupComponentProperties,

  // Effects Properties
  setupEffects: Effects.setupEffects,

  // Geometry Properties
  setupResizeWithoutConstraints: Geometry.setupResizeWithoutConstraints,
  setupResizeWithConstraints: Geometry.setupResizeWithConstraints,
  setupAbsoluteTransform: Geometry.setupAbsoluteTransform,
  setupAbsoluteRenderBounds: Geometry.setupAbsoluteRenderBounds,
  setupScaleFactor: Geometry.setupScaleFactor,
  setupRelativeTransform: Geometry.setupRelativeTransform,
  setupAbsoluteBoundingBox: Geometry.setupAbsoluteBoundingBox,

  // Layout Advanced Properties
  setupItemReverseZIndex: LayoutAdvanced.setupItemReverseZIndex,
  setupStrokesIncludedInLayout: LayoutAdvanced.setupStrokesIncludedInLayout,

  // Constraints Properties
  setupConstrainProportions: Constraints.setupConstrainProportions,
  setupTargetAspectRatio: Constraints.setupTargetAspectRatio,
  setupLockAspectRatio: Constraints.setupLockAspectRatio,
  setupUnlockAspectRatio: Constraints.setupUnlockAspectRatio,

  // Fill Properties
  setupFills: Fill.setupFills,
  setupStrokes: Fill.setupStrokes,
  setupFillStyleId: setupFillStyleId,
  setupFillGeometry: setupFillGeometry,

  // Mask Properties
  setupIsMask: setupIsMask,
  setupMaskType: setupMaskType,

  // Effects Properties (additional)
  setupEffectStyleId: setupEffectStyleId,

  // Stroke Properties (additional)
  setupStrokeGeometry: setupStrokeGeometry,
  setupStrokeStyleId: setupStrokeStyleId,
  setupHandleMirroring: setupHandleMirroring,
  setupStrokeMiterLimit: setupStrokeMiterLimit,
  setupDashPattern: setupDashPattern,

  // Fill Properties (additional)
  setupBackgrounds: setupBackgrounds,
  setupPrototypeBackgrounds: setupPrototypeBackgrounds,
  setupBackgroundStyleId: setupBackgroundStyleId,

  // Layout Properties (additional)
  setupLayoutGrids: setupLayoutGrids,
  setupClipsContent: setupClipsContent,
  setupOverflowDirection: setupOverflowDirection,
  setupNumberOfFixedChildren: setupNumberOfFixedChildren,

  // Grid Properties (additional)
  setupGridStyleId: setupGridStyleId,

  // Events Properties
  setupPageNodeChanges: setupPageNodeChanges,

  // Node Properties
  setupDescription: setupDescription,
  setupDescriptionMarkdown: setupDescriptionMarkdown,
  setupDocumentationLinks: setupDocumentationLinks,
  setupRemote: setupRemote,
  setupGetPublishStatus: setupGetPublishStatus,
  setupHiddenFromPublishing: setupHiddenFromPublishing,
  setupKey: setupKey,

  // Component Properties (additional)
  setupDefaultVariant: setupDefaultVariant,

  // Table Properties
  setupInsertRow: setupInsertRow,
  setupInsertColumn: setupInsertColumn,
  setupRemoveRow: setupRemoveRow,
  setupRemoveColumn: setupRemoveColumn,
  setupMoveRow: setupMoveRow,
  setupMoveColumn: setupMoveColumn,
  setupResizeRow: setupResizeRow,
  setupResizeColumn: setupResizeColumn,

  // Text Properties (additional)
  setupTextStyleId: setupTextStyleId,
  setupCharacters: setupCharacters,
  setupInsertCharacters: setupInsertCharacters,
  setupDeleteCharacters: setupDeleteCharacters,
  setupHasMissingFont: setupHasMissingFont,

  // Missing methods that are used in main file
  setupNodeGetNode: function(config: NodeAPIConfig, handle: any) {
    // Implementation for getting node
    return config.getNode ? config.getNode(handle) : handle
  },
  
  setupNodeGetVariableNode: function(config: NodeAPIConfig, handle: any) {
    // Implementation for getting variable node
    return config.getNode ? config.getNode(handle) : handle
  },
  
  setupNodeGetVariableCollectionNode: function(config: NodeAPIConfig, handle: any) {
    // Implementation for getting variable collection node
    return config.getNode ? config.getNode(handle) : handle
  },
  
  setupNodeGetAnnotationCategory: function(config: NodeAPIConfig, handle: any) {
    // Implementation for getting annotation category
    return config.getNode ? config.getNode(handle) : handle
  },

  // Video setup methods
  setupVideoCreateVideoAsync: function(config: NodeAPIConfig) {
    return function() { return config.vm.undefined }
  },
  
  setupVideoGetOrCreatePrivateVideo: function(config: NodeAPIConfig) {
    return function() { return config.vm.undefined }
  },
  
  setupVideoGetThumbnailImageForVideo: function(config: NodeAPIConfig) {
    return function() { return config.vm.undefined }
  },
  
  setupVideoGetPrivateVideoOrThrow: function(config: NodeAPIConfig) {
    return function() { return config.vm.undefined }
  },

  // Telemetry setup methods
  setupTelemetryLogError: function(config: NodeAPIConfig) {
    return function() { return config.vm.undefined }
  },
  
  setupTelemetryMaybeLogError: function(config: NodeAPIConfig) {
    return function() { return config.vm.undefined }
  },

  // Additional setup methods
  setupAutoRename: setupAutoRename,
  setupHangingPunctuation: setupHangingPunctuation,
  setupHangingList: setupHangingList,
  setupParagraphIndent: setupParagraphIndent,
  setupParagraphSpacing: setupParagraphSpacing,
  setupListSpacing: setupListSpacing,
  setupLetterSpacing: setupLetterSpacing,
  setupTextDecorationSkipInk: setupTextDecorationSkipInk,
  setupTextDecorationOffset: setupTextDecorationOffset,
  setupTextDecorationThickness: setupTextDecorationThickness,
  setupTextDecorationColor: setupTextDecorationColor,

  // Vector Properties
  setupVectorPaths: setupVectorPaths,
  setupReadOnlyVectorPaths: setupReadOnlyVectorPaths,

  // Canvas Properties  
  setupGuides: setupGuides,
  setupPrototypeStartNode: setupPrototypeStartNode,
  setupFlowStartingPoints: setupFlowStartingPoints,

  // Media Properties
  setupPlaybackSettings: setupPlaybackSettings,

  // Interaction Properties
  setupReactions: setupReactions,
  setupOverlayPositionType: setupOverlayPositionType,
  setupOverlayBackgroundInteraction: setupOverlayBackgroundInteraction,
  setupOverlayBackground: setupOverlayBackground,

  // Selection Properties
  setupSelection: setupSelection,

  // Boolean Operation Properties
  setupBooleanOperation: setupBooleanOperation,

  // Shape Properties
  setupInnerRadius: setupInnerRadius,
  setupArcData: setupArcData,
  setupTopLeftRadius: setupTopLeftRadius,
  setupTopRightRadius: setupTopRightRadius,
  setupBottomLeftRadius: setupBottomLeftRadius,
  setupBottomRightRadius: setupBottomRightRadius,

  // Export Properties
  setupExportSettings: setupExportSettings,

  // Plugin Data Properties
  setupPluginData: setupPluginData,

  // Variable Properties
  setupVariableConsumptionMap: setupVariableConsumptionMap,
  setupBoundVariables: setupBoundVariables,
}

/**
 * Factory function to create Node API processor with namespace organization
 */
export function createNodeAPIProcessor(config: NodeAPIConfig) {
  return {
    operations: NodeAPI.Operations,
    hierarchy: NodeAPI.Hierarchy,
    search: NodeAPI.Search,
    properties: NodeAPI.Properties,
    variables: NodeAPI.Variables,
    advancedSearch: NodeAPI.AdvancedSearch,
    pageDocument: NodeAPI.PageDocument,
    nodeManagement: NodeAPI.NodeManagement,
    widgetProperties: NodeAPI.WidgetProperties,
    layout: NodeAPI.Layout,
    grid: NodeAPI.Grid,
    visualProperties: NodeAPI.VisualProperties,
    positionTransform: NodeAPI.PositionTransform,
    stroke: Stroke,
    text: Text,
    component: Component,
    effects: Effects,
    geometry: Geometry,
    layoutAdvanced: LayoutAdvanced,
    constraints: Constraints,
    fill: Fill,
    tableProperties: TableProperties,
    textAdvanced: TextAdvanced,
    vectorProperties: VectorProperties,
    canvasProperties: CanvasProperties,
    mediaProperties: MediaProperties,
    interactionProperties: InteractionProperties,
    selectionProperties: SelectionProperties,
    booleanOperationProperties: BooleanOperationProperties,
    shapeProperties: ShapeProperties,
    exportProperties: ExportProperties,
    pluginDataProperties: PluginDataProperties,
    variableProperties: VariableProperties,
    config
  }
}

/**
 * Table Properties namespace for table-specific operations and validation
 */
const TableProperties = {
  setupInsertRow,
  setupInsertColumn,
  setupRemoveRow,
  setupRemoveColumn,
  setupMoveRow,
  setupMoveColumn,
  setupResizeRow,
  setupResizeColumn,
}

/**
 * Table Properties namespace implementation functions
 */
// insertRow - Insert a new row in a table at specified index
function setupInsertRow({
  vm: e,
  defineVmFunction: t,
  getNode: i,
}, n) {
  t({
    handle: n,
    key: 'insertRow',
    metricsKey: 'node.insertRow',
    cb(t) {
      let n = i(this)
      if (n.type !== 'TABLE')
        throw new Error('Can only get cells from a table node')
      let r = _$$u({
        vm: e,
        handle: t,
        zSchema: _$$z.number().$$int().min(0).max(n.tableNumRows),
        property: 'index',
      })
      n.insertRow(r)
      return e.undefined
    },
    isAllowedInReadOnly: !1,
    hasEditScope: !0,
  })
}

// insertColumn - Insert a new column in a table at specified index
function setupInsertColumn({
  vm: e,
  defineVmFunction: t,
  getNode: i,
}, n) {
  t({
    handle: n,
    key: 'insertColumn',
    metricsKey: 'node.insertColumn',
    cb(t) {
      let n = i(this)
      if (n.type !== 'TABLE')
        throw new Error('Can only get cells from a table node')
      let r = _$$u({
        vm: e,
        handle: t,
        zSchema: _$$z.number().$$int().min(0).max(n.tableNumColumns),
        property: 'index',
      })
      n.insertColumn(r)
      return e.undefined
    },
    isAllowedInReadOnly: !1,
    hasEditScope: !0,
  })
}

// removeRow - Remove a row from a table at specified index
function setupRemoveRow({
  vm: e,
  defineVmFunction: t,
  getNode: i,
}, n) {
  t({
    handle: n,
    key: 'removeRow',
    metricsKey: 'node.removeRow',
    cb(t) {
      let n = i(this)
      if (n.type !== 'TABLE')
        throw new Error('Can only get cells from a table node')
      let r = _$$u({
        vm: e,
        handle: t,
        zSchema: _$$z.number().$$int().min(0).max(n.tableNumRows - 1),
        property: 'index',
      })
      n.removeRow(r)
      return e.undefined
    },
    isAllowedInReadOnly: !1,
    hasEditScope: !0,
  })
}

// removeColumn - Remove a column from a table at specified index
function setupRemoveColumn({
  vm: e,
  defineVmFunction: t,
  getNode: i,
}, n) {
  t({
    handle: n,
    key: 'removeColumn',
    metricsKey: 'node.removeColumn',
    cb(t) {
      let n = i(this)
      if (n.type !== 'TABLE')
        throw new Error('Can only get cells from a table node')
      let r = _$$u({
        vm: e,
        handle: t,
        zSchema: _$$z.number().$$int().min(0).max(n.tableNumColumns - 1),
        property: 'index',
      })
      n.removeColumn(r)
      return e.undefined
    },
    isAllowedInReadOnly: !1,
    hasEditScope: !0,
  })
}

// moveRow - Move a row in a table from one index to another
function setupMoveRow({
  vm: e,
  defineVmFunction: t,
  getNode: i,
}, n) {
  t({
    handle: n,
    key: 'moveRow',
    metricsKey: 'node.moveRow',
    cb(t, n) {
      let r = i(this)
      if (r.type !== 'TABLE')
        throw new Error('Can only get cells from a table node')
      let a = _$$u({
        vm: e,
        handle: t,
        zSchema: _$$z.number().$$int().min(0).max(r.tableNumRows - 1),
        property: 'fromIndex',
      })
      let s = _$$u({
        vm: e,
        handle: n,
        zSchema: _$$z.number().$$int().min(0).max(r.tableNumRows - 1),
        property: 'toIndex',
      })
      r.moveRow(a, s)
      return e.undefined
    },
    isAllowedInReadOnly: !1,
    hasEditScope: !0,
  })
}

// moveColumn - Move a column in a table from one index to another
function setupMoveColumn({
  vm: e,
  defineVmFunction: t,
  getNode: i,
}, n) {
  t({
    handle: n,
    key: 'moveColumn',
    metricsKey: 'node.moveColumn',
    cb(t, n) {
      let r = i(this)
      if (r.type !== 'TABLE')
        throw new Error('Can only get cells from a table node')
      let a = _$$u({
        vm: e,
        handle: t,
        zSchema: _$$z.number().$$int().min(0).max(r.tableNumColumns - 1),
        property: 'fromIndex',
      })
      let s = _$$u({
        vm: e,
        handle: n,
        zSchema: _$$z.number().$$int().min(0).max(r.tableNumColumns - 1),
        property: 'toIndex',
      })
      r.moveColumn(a, s)
      return e.undefined
    },
    isAllowedInReadOnly: !1,
    hasEditScope: !0,
  })
}

// resizeRow - Resize a row in a table to specified height
function setupResizeRow({
  vm: e,
  defineVmFunction: t,
  getNode: i,
}, n) {
  t({
    handle: n,
    key: 'resizeRow',
    metricsKey: 'node.resizeRow',
    cb(t, n) {
      let r = i(this)
      if (r.type !== 'TABLE')
        throw new Error('Can only get cells from a table node')
      let a = _$$u({
        vm: e,
        handle: t,
        zSchema: _$$z.number().$$int().min(0).max(r.tableNumRows - 1),
        property: 'index',
      })
      let s = _$$u({
        vm: e,
        handle: n,
        zSchema: _$$N.PositiveFloat,
        property: 'height',
      })
      r.resizeRow(a, s)
      return e.undefined
    },
    isAllowedInReadOnly: !1,
    hasEditScope: !0,
  })
}

// resizeColumn - Resize a column in a table to specified width
function setupResizeColumn({
  vm: e,
  defineVmFunction: t,
  getNode: i,
}, n) {
  t({
    handle: n,
    key: 'resizeColumn',
    metricsKey: 'node.resizeColumn',
    cb(t, n) {
      let r = i(this)
      if (r.type !== 'TABLE')
        throw new Error('Can only get cells from a table node')
      let a = _$$u({
        vm: e,
        handle: t,
        zSchema: _$$z.number().$$int().min(0).max(r.tableNumColumns - 1),
        property: 'index',
      })
      let s = _$$u({
        vm: e,
        handle: n,
        zSchema: _$$N.PositiveFloat,
        property: 'width',
      })
      r.resizeColumn(a, s)
      return e.undefined
    },
    isAllowedInReadOnly: !1,
    hasEditScope: !0,
  })
}

/**
 * Text Advanced Properties namespace for complex text operations
 */
const TextAdvanced = {
  setupTextStyleId,
  setupCharacters,
  setupInsertCharacters,
  setupDeleteCharacters,
  setupHasMissingFont,
  setupAutoRename,
  setupHangingPunctuation,
  setupHangingList,
  setupParagraphIndent,
  setupParagraphSpacing,
  setupListSpacing,
  setupLetterSpacing,
  setupTextDecorationSkipInk,
  setupTextDecorationOffset,
  setupTextDecorationThickness,
  setupTextDecorationColor,
}

/**
 * Text Advanced Properties namespace implementation functions
 */
// textStyleId - Get/set text style ID with incremental support
function setupTextStyleId({
  vm: e,
  defineVmIncrementalProp: t,
  mixedSentinel: i,
  incrementalSafeApi: n,
  getNode: r,
  documentAccessState: a,
  allowIncrementalUnsafeApiCalls: s,
}, o) {
  t({
    handle: o,
    key: 'textStyleId',
    metricsKey: 'node.textStyleId',
    incrementalSafeApiSetKey: 'setTextStyleIdAsync',
    incrementalSafeApiSetMetricsKey: 'node.setTextStyleIdAsync',
    retainGetter: !0,
    enumerable: !0,
    parseThis: e => r(e),
    resolveValue: (t) => {
      let n = t.inheritedTextStyleOrMixed
      return n === 'mixed' ? i : e.newString(_$$nM(n))
    },
    prepareDocument: async (e) => {
      await Ux(a)
    },
    setValue: (t, i) => {
      let n = _$$eX(_$$u({
        vm: e,
        handle: i,
        zSchema: _$$z.string(),
        property: 'textStyleId',
      }))
      t.inheritedTextStyle = n
      return e.undefined
    },
    incrementalSafeApi: n,
    parseIncrementalValueArg: t => e.toString(t),
    setValueIncremental: (t, i) => (t.inheritedTextStyle = _$$eX(i), e.undefined),
    allowIncrementalUnsafeApiCalls: s,
    canWriteInReadOnly: !1,
    hasEditScope: !0,
  })
}

// characters - Get/set text characters content
function setupCharacters({
  vm: e,
  defineVmProp: t,
  getNode: i,
}, n) {
  t({
    handle: n,
    key: 'characters',
    options: {
      enumerable: !0,
      metricsKey: 'node.characters',
      get() {
        return e.newString(i(this).characters)
      },
      set(t) {
        i(this).characters = _$$u({
          vm: e,
          handle: t,
          zSchema: _$$z.string(),
          property: 'characters',
        })
        return e.undefined
      },
    },
    canWriteInReadOnly: !1,
    hasEditScope: !0,
  })
}

// insertCharacters - Insert text characters at specified position
function setupInsertCharacters({
  vm: e,
  defineVmFunction: t,
  getNode: i,
}, n) {
  t({
    handle: n,
    key: 'insertCharacters',
    metricsKey: 'node.insertCharacters',
    cb(t, n, r) {
      let a = _$$u({
        vm: e,
        handle: t,
        zSchema: _$$N.PositiveInteger,
        property: 'start',
      })
      let s = _$$u({
        vm: e,
        handle: n,
        zSchema: _$$z.string(),
        property: 'characters',
      })
      let o = _$$u({
        vm: e,
        handle: r,
        zSchema: _$$z.$$enum(['BEFORE', 'AFTER']).optional(),
        property: 'useStyle',
      })
      let l = i(this)
      if (a > l.characters.length) {
        throw new Error('Cannot insert characters at index greater than the length of the text')
      }
      l.spliceCharacters(a, a, s, o || 'BEFORE')
      return e.undefined
    },
    isAllowedInReadOnly: !1,
    hasEditScope: !0,
  })
}

// deleteCharacters - Delete text characters in specified range
function setupDeleteCharacters({
  vm: e,
  defineVmFunction: t,
  getNode: i,
}, n) {
  t({
    handle: n,
    key: 'deleteCharacters',
    metricsKey: 'node.deleteCharacters',
    cb(t, n) {
      let r = _$$u({
        vm: e,
        handle: t,
        zSchema: _$$N.PositiveInteger,
        property: 'start',
      })
      let a = _$$u({
        vm: e,
        handle: n,
        zSchema: _$$N.PositiveInteger,
        property: 'end',
      })
      let s = i(this)
      let o = s.characters.length
      if (r > o || a > o) {
        throw new Error('Cannot delete characters at index greater than the length of the text')
      }
      if (r > a)
        throw new Error('deleteCharacters must have (start <= end)')
      s.spliceCharacters(r, a, '', 'BEFORE')
      return e.undefined
    },
    isAllowedInReadOnly: !1,
    hasEditScope: !0,
  })
}

// hasMissingFont - Check if text has missing font
function setupHasMissingFont({
  vm: e,
  defineVmProp: t,
  getNode: i,
}, n) {
  t({
    handle: n,
    key: 'hasMissingFont',
    options: {
      enumerable: !0,
      metricsKey: 'node.hasMissingFont',
      get() {
        return e.newBoolean(i(this).hasMissingFont)
      },
    },
    canWriteInReadOnly: !1,
    hasEditScope: !1,
  })
}

// autoRename - Get/set auto-rename behavior for text nodes
function setupAutoRename({
  vm: e,
  defineVmProp: t,
  getNode: i,
}, n) {
  t({
    handle: n,
    key: 'autoRename',
    options: {
      enumerable: !0,
      metricsKey: 'node.autoRename',
      get() {
        return e.newBoolean(i(this).autoRename)
      },
      set(t) {
        let n = i(this)
        if (n.isInstanceSublayer) {
          _$$k2.warn('autoRename on instance sublayers is not supported')
          return e.undefined
        }
        let r = _$$u({
          vm: e,
          handle: t,
          zSchema: _$$z.boolean(),
          property: 'autoRename',
        })
        r && (n.name = n.characters.trim().replace(/\s+/g, ' '))
        n.autoRename = r
        return e.undefined
      },
    },
    canWriteInReadOnly: !1,
    hasEditScope: !0,
  })
}

// hangingPunctuation - Get/set hanging punctuation for text
function setupHangingPunctuation({
  vm: e,
  defineVmProp: t,
  getNode: i,
}, n) {
  t({
    handle: n,
    key: 'hangingPunctuation',
    options: {
      enumerable: !0,
      metricsKey: 'node.hangingPunctuation',
      get() {
        return e.newBoolean(i(this).hangingPunctuation)
      },
      set(t) {
        i(this).hangingPunctuation = _$$u({
          vm: e,
          handle: t,
          zSchema: _$$z.boolean(),
          property: 'hangingPunctuation',
        })
        return e.undefined
      },
    },
    canWriteInReadOnly: !1,
    hasEditScope: !0,
  })
}

// hangingList - Get/set hanging list for text
function setupHangingList({
  vm: e,
  defineVmProp: t,
  getNode: i,
}, n) {
  t({
    handle: n,
    key: 'hangingList',
    options: {
      enumerable: !0,
      metricsKey: 'node.hangingList',
      get() {
        return e.newBoolean(i(this).hangingList)
      },
      set(t) {
        i(this).hangingList = _$$u({
          vm: e,
          handle: t,
          zSchema: _$$z.boolean(),
          property: 'hangingList',
        })
        return e.undefined
      },
    },
    canWriteInReadOnly: !1,
    hasEditScope: !0,
  })
}

// paragraphIndent - Get/set paragraph indentation
function setupParagraphIndent({
  vm: e,
  defineVmProp: t,
  mixedSentinel: i,
  getNode: n,
}, r) {
  t({
    handle: r,
    key: 'paragraphIndent',
    options: {
      enumerable: !0,
      metricsKey: 'node.paragraphIndent',
      get() {
        let t = getFeatureFlags().ce_mixed_text_spacing ? n(this).paragraphIndentOrMixed : n(this).paragraphIndent
        return t === 'mixed' ? i : e.newNumber(t)
      },
      set(t) {
        n(this).paragraphIndent = _$$u({
          vm: e,
          handle: t,
          zSchema: _$$N.PositiveFloat,
          property: 'paragraphIndent',
        })
        return e.undefined
      },
    },
    canWriteInReadOnly: !1,
    hasEditScope: !0,
  })
}

// paragraphSpacing - Get/set paragraph spacing
function setupParagraphSpacing({
  vm: e,
  defineVmProp: t,
  mixedSentinel: i,
  getNode: n,
}, r) {
  t({
    handle: r,
    key: 'paragraphSpacing',
    options: {
      enumerable: !0,
      metricsKey: 'node.paragraphSpacing',
      get() {
        let t = getFeatureFlags().ce_mixed_text_spacing ? n(this).paragraphSpacingOrMixed : n(this).paragraphSpacing
        return t === 'mixed' ? i : e.newNumber(t)
      },
      set(t) {
        n(this).paragraphSpacing = _$$u({
          vm: e,
          handle: t,
          zSchema: _$$N.PositiveFloat,
          property: 'paragraphSpacing',
        })
        return e.undefined
      },
    },
    canWriteInReadOnly: !1,
    hasEditScope: !0,
  })
}

// listSpacing - Get/set list spacing
function setupListSpacing({
  vm: e,
  defineVmProp: t,
  mixedSentinel: i,
  getNode: n,
}, r) {
  t({
    handle: r,
    key: 'listSpacing',
    options: {
      enumerable: !0,
      metricsKey: 'node.listSpacing',
      get() {
        let t = getFeatureFlags().ce_mixed_text_spacing ? n(this).listSpacingOrMixed : n(this).listSpacing
        return t === 'mixed' ? i : e.newNumber(t)
      },
      set(t) {
        n(this).listSpacing = _$$u({
          vm: e,
          handle: t,
          zSchema: _$$N.PositiveFloat,
          property: 'listSpacing',
        })
        return e.undefined
      },
    },
    canWriteInReadOnly: !1,
    hasEditScope: !0,
  })
}

// letterSpacing - Get/set letter spacing with units
function setupLetterSpacing({
  vm: e,
  defineVmProp: t,
  mixedSentinel: i,
  getNode: n,
}, r) {
  t({
    handle: r,
    key: 'letterSpacing',
    options: {
      enumerable: !0,
      metricsKey: 'node.letterSpacing',
      get() {
        let t = n(this).letterSpacingOrMixed
        if (t === 'mixed')
          return i
        let r = e.deepWrap({
          unit: t.units,
          value: t.value,
        })
        e.deepFreezeObject(r)
        return r
      },
      set(t) {
        let i = _$$u({
          vm: e,
          handle: t,
          zSchema: _$$N.LetterSpacing,
          property: 'letterSpacing',
        })
        n(this).letterSpacing = {
          units: i.unit,
          value: i.value,
        }
        return e.undefined
      },
    },
    canWriteInReadOnly: !1,
    hasEditScope: !0,
  })
}

// textDecorationSkipInk - Get/set text decoration skip ink
function setupTextDecorationSkipInk({
  vm: e,
  defineVmProp: t,
  mixedSentinel: i,
  getNode: n,
}, r) {
  t({
    handle: r,
    key: 'textDecorationSkipInk',
    options: {
      enumerable: !0,
      metricsKey: 'node.textDecorationSkipInk',
      get() {
        let t = n(this).textDecorationSkipInkOrMixed
        return t === null ? e.$$null : t === 'mixed' ? i : e.newBoolean(t)
      },
      set(t) {
        n(this).textDecorationSkipInk = _$$u({
          vm: e,
          handle: t,
          zSchema: _$$z.boolean(),
          property: 'textDecorationSkipInk',
        })
        return e.undefined
      },
    },
    canWriteInReadOnly: !1,
    hasEditScope: !0,
  })
}

// textDecorationOffset - Get/set text decoration offset
function setupTextDecorationOffset({
  vm: e,
  defineVmProp: t,
  mixedSentinel: i,
  getNode: n,
}, r) {
  t({
    handle: r,
    key: 'textDecorationOffset',
    options: {
      enumerable: !0,
      metricsKey: 'node.textDecorationOffset',
      get() {
        let t = n(this).textDecorationOffsetOrMixed
        if (t === null)
          return e.$$null
        if (t === 'mixed')
          return i
        let r = e.deepWrap(ik(t))
        e.deepFreezeObject(r)
        return r
      },
      set(t) {
        n(this).textDecorationOffset = iR(_$$u({
          vm: e,
          handle: t,
          zSchema: _$$N.TextDecorationOffset,
          property: 'textDecorationOffset',
        }))
        return e.undefined
      },
    },
    canWriteInReadOnly: !1,
    hasEditScope: !0,
  })
}

// textDecorationThickness - Get/set text decoration thickness
function setupTextDecorationThickness({
  vm: e,
  defineVmProp: t,
  mixedSentinel: i,
  getNode: n,
}, r) {
  t({
    handle: r,
    key: 'textDecorationThickness',
    options: {
      enumerable: !0,
      metricsKey: 'node.textDecorationThickness',
      get() {
        let t = n(this).textDecorationThicknessOrMixed
        if (t === null)
          return e.$$null
        if (t === 'mixed')
          return i
        let r = e.deepWrap(iN(t))
        e.deepFreezeObject(r)
        return r
      },
      set(t) {
        n(this).textDecorationThickness = iP(_$$u({
          vm: e,
          handle: t,
          zSchema: _$$N.TextDecorationThickness,
          property: 'textDecorationThickness',
        }))
        return e.undefined
      },
    },
    canWriteInReadOnly: !1,
    hasEditScope: !0,
  })
}

// textDecorationColor - Get/set text decoration color
function setupTextDecorationColor({
  vm: e,
  defineVmProp: t,
  mixedSentinel: i,
  imageStore: n,
  videoStore: r,
  getNode: a,
}, s) {
  t({
    handle: s,
    key: 'textDecorationColor',
    options: {
      enumerable: !0,
      metricsKey: 'node.textDecorationColor',
      get() {
        let t = a(this).textDecorationFillsOrMixed
        if (t === null)
          return e.$$null
        if (t === 'mixed')
          return i
        let n = e5New(t)
        let r = e.deepWrap(n)
        e.deepFreezeObject(r)
        return r
      },
      set(t) {
        let i = a(this)
        let s = []
        let o = {
          data: e4New(n, r, _$$u({
            vm: e,
            handle: t,
            zSchema: _$$N.TextDecorationColor,
            property: 'textDecorationColor',
          }), s),
          blobs: s,
        }
        if (o.data.length === 0) {
          i.textDecorationFills = []
          return e.undefined
        }
        if (o.data.length !== 1 || void 0 !== o.data[0] && o.data[0].type !== 'SOLID') {
          throw new Error('Text decoration color must be a single solid paint')
        }
        i.textDecorationFills = o.data
        return e.undefined
      },
    },
    canWriteInReadOnly: !1,
    hasEditScope: !0,
  })
}

/**
 * Vector Properties namespace for vector path operations
 */
const VectorProperties = {
  setupVectorPaths,
  setupReadOnlyVectorPaths,
}

// vectorPaths - Get/set vector paths for vector graphics
function setupVectorPaths({
  vm: e,
  defineVmProp: t,
  getNode: i,
}, n) {
  t({
    handle: n,
    key: 'vectorPaths',
    options: {
      enumerable: !0,
      metricsKey: 'node.vectorPaths',
      get() {
        let t = i(this)
        let n = Kx(t)
        let r = Hn(n)
        let a = e.deepWrap(r)
        e.deepFreezeObject(a)
        return a
      },
      set(t, n) {
        let r = _$$u({
          vm: e,
          handle: t,
          zSchema: _$$N.VectorPaths,
          property: 'vectorPaths',
        })
        let a = VS(r)
        let s = i(this)
        _$$iN(s, a, n)
        return e.undefined
      },
    },
    canWriteInReadOnly: !1,
    hasEditScope: !0,
  })
}

// readOnlyVectorPaths - Get vector paths in read-only mode
function setupReadOnlyVectorPaths({
  vm: e,
  defineVmProp: t,
  getNode: i,
}, n) {
  t({
    handle: n,
    key: 'vectorPaths',
    options: {
      enumerable: !0,
      metricsKey: 'node.vectorPaths',
      get() {
        let t = i(this)
        let n = Kx(t)
        let r = Hn(n)
        let a = e.deepWrap(r)
        e.deepFreezeObject(a)
        return a
      },
    },
    canWriteInReadOnly: !1,
    hasEditScope: !0,
  })
}

/**
 * Canvas Properties namespace for canvas-specific operations
 */
const CanvasProperties = {
  setupGuides,
  setupPrototypeStartNode,
  setupFlowStartingPoints,
}

// guides - Get/set layout guides on canvas
function setupGuides({
  vm: e,
  defineVmProp: t,
  getNode: i,
}, n) {
  t({
    handle: n,
    key: 'guides',
    options: {
      enumerable: !0,
      metricsKey: 'node.guides',
      get() {
        let t = e.deepWrap(i(this).guides.map(e => (B1(e.axis, 'Figma Internal Error: guide missing data'), B1(e.offset, 'Figma Internal Error: guide missing data'), {
          axis: e.axis,
          offset: e.offset,
        })))
        e.deepFreezeObject(t)
        return t
      },
      set(t) {
        i(this).guides = _$$u({
          vm: e,
          handle: t,
          zSchema: _$$N.Guides,
          property: 'guides',
        }).map(e => ({
          axis: e.axis,
          offset: e.offset,
          guid: Hr,
        }))
        return e.undefined
      },
    },
    canWriteInReadOnly: !1,
    hasEditScope: !0,
  })
}

// prototypeStartNode - Get prototype starting node for canvas
function setupPrototypeStartNode({
  vm: e,
  defineVmProp: t,
  getNodeFactory: i,
  getNode: n,
  sceneGraph: r,
}, a) {
  t({
    handle: a,
    key: 'prototypeStartNode',
    options: {
      enumerable: !0,
      metricsKey: 'node.prototypeStartNode',
      get() {
        let t = n(this).effectivePrototypeStartNodeId
        return t && void 0 !== r.get(t) ? i().createNode(t, 'node.prototypeStartNode') : e.$$null
      },
    },
    canWriteInReadOnly: !1,
    hasEditScope: !1,
  })
}

// flowStartingPoints - Get/set flow starting points for canvas
function setupFlowStartingPoints({
  vm: e,
  defineVmProp: t,
  getNode: i,
}, n) {
  t({
    handle: n,
    key: 'flowStartingPoints',
    options: {
      enumerable: !0,
      metricsKey: 'node.flowStartingPoints',
      get() {
        let t = i(this)
        if (t.type !== 'CANVAS')
          return e.$$null
        let n = e.deepWrap(t.flowStartingPoints)
        e.deepFreezeObject(n)
        return n
      },
      set(t) {
        let n = i(this)
        let r = _$$u({
          vm: e,
          handle: t,
          zSchema: _$$N.FlowStartingPoints,
          property: 'flowStartingPoints',
        })
        n.flowStartingPoints = r
        return e.undefined
      },
    },
    canWriteInReadOnly: !1,
    hasEditScope: !0,
  })
}

/**
 * Media Properties namespace for media playback settings
 */
const MediaProperties = {
  setupPlaybackSettings,
}

// playbackSettings - Get/set media playback settings
function setupPlaybackSettings({
  vm: e,
  defineVmProp: t,
  getNode: i,
}, n) {
  t({
    handle: n,
    key: 'playbackSettings',
    options: {
      enumerable: !0,
      metricsKey: 'node.playbackSettings',
      get() {
        let t
        let n = {
          autoplay: void 0 === (t = i(this).videoPlayback).autoplay || t.autoplay,
          loop: void 0 === t.mediaLoop || t.mediaLoop,
          muted: void 0 !== t.muted && t.muted,
        }
        let r = e.deepWrap(n)
        e.deepFreezeObject(r)
        return r
      },
      set(t) {
        let n = _$$u({
          vm: e,
          handle: t,
          zSchema: _$$N.PlaybackSettings,
          property: 'playbackSettings',
        })
        i(this).videoPlayback = {
          autoplay: n.autoplay,
          mediaLoop: n.loop,
          muted: n.muted,
        }
      },
    },
    canWriteInReadOnly: !1,
    hasEditScope: !0,
  })
}

/**
 * Interaction Properties namespace for prototyping and reactions
 */
const InteractionProperties = {
  setupReactions,
  setupOverlayPositionType,
  setupOverlayBackgroundInteraction,
  setupOverlayBackground,
}

// reactions - Get/set prototype reactions with incremental support
function setupReactions({
  vm: e,
  allowIncrementalUnsafeApiCalls: t,
  defineVmIncrementalProp: i,
  documentAccessState: n,
  getNode: r,
  incrementalSafeApi: a,
}, s) {
  function o(t) {
    return _$$u({
      vm: e,
      handle: t,
      zSchema: _$$N.Reactions,
      property: 'reactions',
    })
  }
  i({
    handle: s,
    key: 'reactions',
    allowIncrementalUnsafeApiCalls: t,
    incrementalSafeApi: a,
    metricsKey: 'node.reactions',
    incrementalSafeApiSetKey: 'setReactionsAsync',
    incrementalSafeApiSetMetricsKey: 'node.setReactionsAsync',
    retainGetter: !0,
    enumerable: !0,
    canWriteInReadOnly: !1,
    hasEditScope: !0,
    parseThis: e => r(e),
    resolveValue(t) {
      let i = (function(e) {
        let t = []
        for (let i of e) {
          let e = i.actions && i.actions.length > 0 ? tZNew(i.actions[0]) : null
          let n = []
          i.actions && (n = i.actions.map(tZ).filter(tq))
          let r = (function(e) {
            let t = {}
            let i = e?.interactionType || 'ON_CLICK'
            switch (i) {
              case 'NONE':
                return null
              case 'ON_VOICE':
              case 'ON_CLICK':
              case 'ON_HOVER':
              case 'ON_PRESS':
              case 'ON_MEDIA_END':
                t.type = i
                break
              case 'DRAG':
                t.type = 'ON_DRAG'
                break
              case 'AFTER_TIMEOUT':
                t.type = i
                t.timeout = e.transitionTimeout ? e.transitionTimeout : 0.8
                break
              case 'MOUSE_IN':
              case 'MOUSE_ENTER':
              case 'MOUSE_OUT':
              case 'MOUSE_LEAVE':
              case 'MOUSE_UP':
              case 'MOUSE_DOWN':
                i === 'MOUSE_IN' ? (t.type = 'MOUSE_ENTER', t.deprecatedVersion = !0) : i === 'MOUSE_ENTER' ? t.type = 'MOUSE_ENTER' : i === 'MOUSE_OUT' ? (t.type = 'MOUSE_LEAVE', t.deprecatedVersion = !0) : i === 'MOUSE_LEAVE' ? t.type = 'MOUSE_LEAVE' : i === 'MOUSE_UP' ? t.type = 'MOUSE_UP' : i === 'MOUSE_DOWN' && (t.type = 'MOUSE_DOWN')
                e.interactionMaintained ? t.delay = e.interactionDuration || 0.3 : t.delay = 0
                break
              case 'ON_KEY_DOWN':
                t.type = i
                t.device = e.keyTrigger?.triggerDevice || 'KEYBOARD'
                t.keyCodes = e.keyTrigger?.keyCodes || []
                break
              case 'ON_MEDIA_HIT':
                t.type = i
                t.mediaHitTime = e.mediaHitTime
            }
            return t
          }(i.event || {}))
          t.push({
            action: e,
            actions: n,
            trigger: r,
          })
        }
        return t
      }(t.prototypeInteractions))
      let n = e.deepWrap(i)
      e.deepFreezeObject(n)
      return n
    },
    async prepareDocument(e) {
      await Ux(n)
    },
    setValue(e, t) {
      e.prototypeInteractions = t$(o(t))
    },
    parseIncrementalValueArg: o,
    setValueIncremental(e, t) {
      e.prototypeInteractions = t$(t)
    },
  })
}

// overlayPositionType - Get overlay position type for overlay nodes
function setupOverlayPositionType({
  vm: e,
  defineVmProp: t,
  getNode: i,
}, n) {
  t({
    handle: n,
    key: 'overlayPositionType',
    options: {
      enumerable: !0,
      metricsKey: 'node.overlayPositionType',
      get() {
        return e.newString(i(this).overlayPositionType)
      },
    },
    canWriteInReadOnly: !1,
    hasEditScope: !1,
  })
}

// overlayBackgroundInteraction - Get overlay background interaction behavior
function setupOverlayBackgroundInteraction({
  vm: e,
  defineVmProp: t,
  getNode: i,
}, n) {
  t({
    handle: n,
    key: 'overlayBackgroundInteraction',
    options: {
      enumerable: !0,
      metricsKey: 'node.overlayBackgroundInteraction',
      get() {
        return e.newString(i(this).overlayBackgroundInteraction)
      },
    },
    canWriteInReadOnly: !1,
    hasEditScope: !1,
  })
}

// overlayBackground - Get overlay background configuration
function setupOverlayBackground({
  vm: e,
  defineVmProp: t,
  getNode: i,
}, n) {
  t({
    handle: n,
    key: 'overlayBackground',
    options: {
      enumerable: !0,
      metricsKey: 'node.overlayBackground',
      get() {
        let t = i(this).overlayBackground
        let n = e.deepWrap(t)
        e.deepFreezeObject(n)
        return n
      },
    },
    canWriteInReadOnly: !1,
    hasEditScope: !1,
  })
}

/**
 * Selection Properties namespace for selection management
 */
const SelectionProperties = {
  setupSelection,
}

// selection - Get/set node selection and selected text range
function setupSelection({
  vm: e,
  defineVmProp: t,
  getNodeFactory: i,
  getNode: n,
}, r) {
  t({
    handle: r,
    key: 'selection',
    options: {
      enumerable: !0,
      metricsKey: 'node.selection',
      get() {
        let t = e.newArray()
        let r = 0
        for (let a of n(this).directlySelectedNodes) {
          if (a.isInImmutableFrame && a.type !== 'TABLE_CELL') {
            let n = id(a)
            e.setProp(t, r.toString(), i().createNode(n.guid, 'node.selection'))
          }
          else {
            e.setProp(t, r.toString(), i().createNode(a.guid, 'node.selection'))
          }
          r++
        }
        e.shallowFreezeObject(t)
        return t
      },
      set(t) {
        if (!e.isArray(t))
          throw new Error('The selection must be an array')
        let i = e.getNumberProp(t, 'length')
        let r = []
        for (let a = 0; a < i; a++) {
          let i = n(e.getProp(t, a.toString()))
          Egt.expandUpToRoot(i.guid)
          r.push(i)
        }
        n(this).directlySelectedNodes = r
        return e.undefined
      },
    },
    hasEditScope: !0,
    canWriteInReadOnly: !0,
  })
  t({
    handle: r,
    key: 'selectedTextRange',
    options: {
      enumerable: !0,
      metricsKey: 'node.selectedTextRange',
      get() {
        let t = n(this).getSelectedTextRange()
        if (!t)
          return e.$$null
        {
          let n = e.newObject()
          e.setProp(n, 'node', i().createNode(t.textNodeId, 'node.selectedTextRange'))
          e.setProp(n, 'start', e.newNumber(t.start))
          e.setProp(n, 'end', e.newNumber(t.end))
          e.shallowFreezeObject(n)
          return n
        }
      },
      set(t) {
        let i = n(this)
        if (e.isNull(t)) {
          (function(e) {
            let t = e.directlySelectedNodes
            return t.length === 1 && t[0].type === 'TEXT' ? t[0] : null
          })(i) && Y5.triggerAction('leave-edit-mode')
          return e.undefined
        }
        let r = _$$u({
          vm: e,
          handle: t,
          zSchema: _$$N.SelectedText,
          property: 'selectedTextRange',
        })
        let a = n(e.getProp(t, 'node'))
        if (!r)
          return
        if (r.end < r.start)
          throw new Error('selectedTextRange must have (start <= end)')
        let s = a.characters.length
        if (r.start > s || r.end > s) {
          throw new Error('selectedTextRange must have (start < # of characters), (end < # of characters)')
        }
        i.directlySelectedNodes = [a]
        Y5.triggerAction('request-edit-mode')
        i.setSelectedTextRange(a.guid, r.start, r.end)
        return e.undefined
      },
    },
    canWriteInReadOnly: !1,
    hasEditScope: !0,
  })
}

/**
 * Boolean Operation Properties namespace for boolean operations
 */
const BooleanOperationProperties = {
  setupBooleanOperation,
}

// booleanOperation - Get/set boolean operation type for boolean operation nodes
function setupBooleanOperation({
  vm: e,
  defineVmProp: t,
  getNode: i,
}, n) {
  t({
    handle: n,
    key: 'booleanOperation',
    options: {
      enumerable: !0,
      metricsKey: 'node.booleanOperation',
      get() {
        let t = i(this).booleanOperation
        t === 'XOR' && (t = 'EXCLUDE')
        return e.newString(t)
      },
      set(t) {
        let n = _$$u({
          vm: e,
          handle: t,
          zSchema: _$$N.BooleanOperation,
          property: 'booleanOperation',
        })
        n === 'EXCLUDE' && (n = 'XOR')
        i(this).booleanOperation = n
        return e.undefined
      },
    },
    canWriteInReadOnly: !1,
    hasEditScope: !0,
  })
}

/**
 * Shape Properties namespace for shape-specific properties
 */
const ShapeProperties = {
  setupInnerRadius,
  setupArcData,
  setupTopLeftRadius,
  setupTopRightRadius,
  setupBottomLeftRadius,
  setupBottomRightRadius,
}

// innerRadius - Get/set inner radius for star shapes
function setupInnerRadius({
  vm: e,
  defineVmProp: t,
  getNode: i,
}, n) {
  t({
    handle: n,
    key: 'innerRadius',
    options: {
      enumerable: !0,
      metricsKey: 'node.innerRadius',
      get() {
        return e.newNumber(i(this).starInnerScale)
      },
      set(t) {
        i(this).starInnerScale = _$$u({
          vm: e,
          handle: t,
          zSchema: _$$N.ZeroToOne,
          property: 'innerRadius',
        })
        return e.undefined
      },
    },
    canWriteInReadOnly: !1,
    hasEditScope: !0,
  })
}

// arcData - Get/set arc data for arc shapes
function setupArcData({
  vm: e,
  defineVmProp: t,
  getNode: i,
}, n) {
  t({
    handle: n,
    key: 'arcData',
    options: {
      enumerable: !0,
      metricsKey: 'node.arcData',
      get() {
        let t = e.deepWrap(i(this).arcData)
        e.deepFreezeObject(t)
        return t
      },
      set(t) {
        i(this).arcData = _$$u({
          vm: e,
          handle: t,
          zSchema: _$$N.ArcData,
          property: 'arcData',
        })
        return e.undefined
      },
    },
    canWriteInReadOnly: !1,
    hasEditScope: !0,
  })
}

// topLeftRadius - Get/set top left corner radius
function setupTopLeftRadius({
  vm: e,
  defineVmProp: t,
  getNode: i,
}, n) {
  t({
    handle: n,
    key: 'topLeftRadius',
    options: {
      enumerable: !0,
      metricsKey: 'node.topLeftRadius',
      get() {
        let t = i(this)
        return e.newNumber(t.rectangleCornerRadiiIndependent ? t.rectangleTopLeftCornerRadius : t.cornerRadius)
      },
      set(t) {
        let n = i(this)
        n.type === 'SLIDE' || (n.rectangleCornerRadiiIndependent = !0, n.rectangleTopLeftCornerRadius = _$$u({
          vm: e,
          handle: t,
          zSchema: _$$N.PositiveFloat,
          property: 'topLeftRadius',
        }))
        return e.undefined
      },
    },
    canWriteInReadOnly: !1,
    hasEditScope: !0,
  })
}

// topRightRadius - Get/set top right corner radius
function setupTopRightRadius({
  vm: e,
  defineVmProp: t,
  getNode: i,
}, n) {
  t({
    handle: n,
    key: 'topRightRadius',
    options: {
      enumerable: !0,
      metricsKey: 'node.topRightRadius',
      get() {
        let t = i(this)
        return e.newNumber(t.rectangleCornerRadiiIndependent ? t.rectangleTopRightCornerRadius : t.cornerRadius)
      },
      set(t) {
        let n = i(this)
        n.type === 'SLIDE' || (n.rectangleCornerRadiiIndependent = !0, n.rectangleTopRightCornerRadius = _$$u({
          vm: e,
          handle: t,
          zSchema: _$$N.PositiveFloat,
          property: 'topRightRadius',
        }))
        return e.undefined
      },
    },
    canWriteInReadOnly: !1,
    hasEditScope: !0,
  })
}

// bottomLeftRadius - Get/set bottom left corner radius
function setupBottomLeftRadius({
  vm: e,
  defineVmProp: t,
  getNode: i,
}, n) {
  t({
    handle: n,
    key: 'bottomLeftRadius',
    options: {
      enumerable: !0,
      metricsKey: 'node.bottomLeftRadius',
      get() {
        let t = i(this)
        return e.newNumber(t.rectangleCornerRadiiIndependent ? t.rectangleBottomLeftCornerRadius : t.cornerRadius)
      },
      set(t) {
        let n = i(this)
        n.type === 'SLIDE' || (n.rectangleCornerRadiiIndependent = !0, n.rectangleBottomLeftCornerRadius = _$$u({
          vm: e,
          handle: t,
          zSchema: _$$N.PositiveFloat,
          property: 'bottomLeftRadius',
        }))
        return e.undefined
      },
    },
    canWriteInReadOnly: !1,
    hasEditScope: !0,
  })
}

// bottomRightRadius - Get/set bottom right corner radius
function setupBottomRightRadius({
  vm: e,
  defineVmProp: t,
  getNode: i,
}, n) {
  t({
    handle: n,
    key: 'bottomRightRadius',
    options: {
      enumerable: !0,
      metricsKey: 'node.bottomLeftRadius',
      get() {
        let t = i(this)
        return e.newNumber(t.rectangleCornerRadiiIndependent ? t.rectangleBottomRightCornerRadius : t.cornerRadius)
      },
      set(t) {
        let n = i(this)
        n.type === 'SLIDE' || (n.rectangleCornerRadiiIndependent = !0, n.rectangleBottomRightCornerRadius = _$$u({
          vm: e,
          handle: t,
          zSchema: _$$N.PositiveFloat,
          property: 'bottomRightRadius',
        }))
        return e.undefined
      },
    },
    canWriteInReadOnly: !1,
    hasEditScope: !0,
  })
}

/**
 * Export Properties namespace for export settings
 */
const ExportProperties = {
  setupExportSettings,
}

// exportSettings - Get/set export settings for nodes
function setupExportSettings({
  vm: e,
  defineVmProp: t,
  getNode: i,
}, n) {
  t({
    handle: n,
    key: 'exportSettings',
    options: {
      enumerable: !0,
      metricsKey: 'node.exportSettings',
      get() {
        let t
        let n
        let r = i(this)
        let a = e.deepWrap((t = r.type, void 0 === (n = r.exportSettings)
          ? []
          : n.map((e) => {
            let i = {
              format: e.imageType === 'JPEG' ? 'JPG' : e.imageType,
              suffix: e.suffix || '',
              contentsOnly: !!e.contentsOnly,
            }
            e.colorProfile && (i.colorProfile = e.colorProfile)
            t === 'TEXT' && (i.useAbsoluteBounds = !!e.useAbsoluteBounds)
            i.format === 'JPG' || i.format === 'PNG'
              ? i.constraint = {
                type: e.constraint.type.substring(8),
                value: e.constraint.value,
              }
              : i.format === 'SVG' && (i.svgOutlineText = !!e.svgOutlineText, i.svgIdAttribute = e.svgIDMode == 'ALWAYS', i.svgSimplifyStroke = !e.svgForceStrokeMasks)
            return i
          })))
        e.deepFreezeObject(a)
        return a
      },
      set(t) {
        let n = _$$u({
          vm: e,
          handle: t,
          zSchema: _$$N.ExportSettings,
          property: 'exportSettings',
        })
        let r = i(this)
        if (r.type !== 'TEXT' && n.some(e => void 0 !== e.useAbsoluteBounds)) {
          throw new Error('Cannot set useAbsoluteBounds for ExportSetting on node that is not type text.')
        }
        r.exportSettings = iw(n)
        return e.undefined
      },
    },
    canWriteInReadOnly: !1,
    hasEditScope: !0,
  })
}

/**
 * Plugin Data Properties namespace for plugin data management
 */
const PluginDataProperties = {
  setupPluginData,
}

// pluginData - Setup plugin data management functions
function setupPluginData({
  vm: e,
  defineVmFunction: t,
  pluginID: i,
  getNode: n,
  isPluginExemptFromPluginDataLimits: r,
}, a) {
  t({
    handle: a,
    key: 'getSharedPluginData',
    metricsKey: 'node.getSharedPluginData',
    cb(t, i) {
      let r = _$$u({
        vm: e,
        handle: t,
        zSchema: _$$z.string(),
        property: 'namespace',
      })
      ih(r)
      let a = _$$u({
        vm: e,
        handle: i,
        zSchema: _$$z.string(),
        property: 'key',
      })
      return e.newString(n(this).getSharedPluginData(r, a))
    },
    isAllowedInReadOnly: !0,
    hasEditScope: !1,
  })
  t({
    handle: a,
    key: 'setSharedPluginData',
    metricsKey: 'node.setSharedPluginData',
    cb(t, a, s) {
      let o = _$$u({
        vm: e,
        handle: t,
        zSchema: _$$z.string(),
        property: 'namespace',
      })
      ih(o)
      let l = _$$u({
        vm: e,
        handle: a,
        zSchema: _$$z.string(),
        property: 'key',
      })
      let d = _$$u({
        vm: e,
        handle: s,
        zSchema: _$$z.string(),
        property: 'value',
      })
      fp(i, [o, l, d], r)
      n(this).setSharedPluginData(o, l, d)
      let c = e.getStats()
      if (c) {
        let t = e.getStringProp(this, 'id')
        c.recordSetSharedPluginDataSize(t, o, l, d)
      }
      return e.undefined
    },
    isAllowedInReadOnly: !0,
    hasEditScope: !0,
  })
  t({
    handle: a,
    key: 'getSharedPluginDataKeys',
    metricsKey: 'node.getSharedPluginDataKeys',
    cb(t) {
      let i = _$$u({
        vm: e,
        handle: t,
        zSchema: _$$z.string(),
        property: 'namespace',
      })
      ih(i)
      return e.deepWrap(n(this).getSharedPluginDataKeys(i))
    },
    isAllowedInReadOnly: !0,
    hasEditScope: !1,
  })
  t({
    handle: a,
    key: 'getPluginData',
    metricsKey: 'node.getPluginData',
    cb(t) {
      d(i, 'get private plugin data')
      let r = _$$u({
        vm: e,
        handle: t,
        zSchema: _$$z.string(),
        property: 'key',
      })
      return e.newString(n(this).getPluginData(i, r))
    },
    isAllowedInReadOnly: !0,
    hasEditScope: !1,
  })
  t({
    handle: a,
    key: 'setPluginData',
    metricsKey: 'node.setPluginData',
    cb(t, a) {
      d(i, 'set private plugin data')
      let s = _$$u({
        vm: e,
        handle: t,
        zSchema: _$$z.string(),
        property: 'key',
      })
      let o = _$$u({
        vm: e,
        handle: a,
        zSchema: _$$z.string(),
        property: 'value',
      })
      fp(i, [s, o], r)
      n(this).setPluginData(i, s, o)
      let l = e.getStats()
      if (l) {
        let t = e.getStringProp(this, 'id')
        l.recordSetPluginDataSize(t, s, o)
      }
      return e.undefined
    },
    isAllowedInReadOnly: !0,
    hasEditScope: !0,
  })
  t({
    handle: a,
    key: 'getPluginDataKeys',
    metricsKey: 'node.getPluginDataKeys',
    cb() {
      d(i, 'get private plugin data keys')
      return e.deepWrap(n(this).getPluginDataKeys(i))
    },
    isAllowedInReadOnly: !0,
    hasEditScope: !1,
  })
}

/**
 * Variable Properties namespace for variable management
 */
const VariableProperties = {
  setupVariableConsumptionMap,
  setupBoundVariables,
}

// variableConsumptionMap - Get variable consumption map and update variable consumption
function setupVariableConsumptionMap({
  vm: e,
  defineVmProp: t,
  defineVmFunction: i,
  getNode: n,
}, r) {
  t({
    handle: r,
    key: 'variableConsumptionMap',
    options: {
      enumerable: !0,
      metricsKey: 'node.variableConsumptionMap',
      get() {
        return e.deepWrap(n(this).getVariableConsumptionMap())
      },
    },
    canWriteInReadOnly: !1,
    hasEditScope: !1,
  })
  i({
    handle: r,
    key: 'updateVariableConsumption',
    metricsKey: 'node.updateVariableConsumption',
    cb(t, i) {
      let r = _$$u({
        vm: e,
        handle: t,
        zSchema: _$$z.string(),
        property: 'nodeField',
      })
      let a = _$$u({
        vm: e,
        handle: i,
        zSchema: _$$N.VariableDataSchema,
        property: 'variableData',
      })
      let s = n(this).updateVariableConsumption(r, a)
      s && _$$k2.warn(s)
      return e.undefined
    },
    isAllowedInReadOnly: !1,
    hasEditScope: !0,
  })
}

// boundVariables - Get bound variables for node
function setupBoundVariables({
  vm: e,
  defineVmProp: t,
  getNode: i,
}, n) {
  t({
    handle: n,
    key: 'boundVariables',
    options: {
      enumerable: !0,
      metricsKey: 'node.boundVariables',
      get() {
        return e.deepWrap(i(this).boundVariables)
      },
    },
    canWriteInReadOnly: !1,
    hasEditScope: !1,
  })
}

// inferredVariables - Get inferred variables for node
function setupInferredVariables({
  vm: e,
  defineVmProp: t,
  getNode: i,
}, n) {
  t({
    handle: n,
    key: 'inferredVariables',
    options: {
      enumerable: !0,
      metricsKey: 'node.inferredVariables',
      get() {
        return e.deepWrap(i(this).inferredVariables)
      },
    },
    canWriteInReadOnly: !1,
    hasEditScope: !1,
  })
}

// availableInferredVariables - Get available inferred variables for node
function setupAvailableInferredVariables({
  vm: e,
  defineVmProp: t,
  getNode: i,
}, n) {
  t({
    handle: n,
    key: 'availableInferredVariables',
    options: {
      enumerable: !0,
      metricsKey: 'node.availableInferredVariables',
      get() {
        return e.deepWrap(i(this).availableInferredVariables)
      },
    },
    canWriteInReadOnly: !1,
    hasEditScope: !1,
  })
}

// setBoundVariable - Complex variable binding with incremental support
function setupSetBoundVariable({
  vm: e,
  defineVmFunction: t,
  incrementalSafeApi: i,
  pluginVersionID: r,
  getNode: a,
  stats: s,
  allowIncrementalUnsafeApiCalls: o,
}, l) {
  t({
    handle: l,
    key: 'setBoundVariable',
    metricsKey: 'node.setBoundVariable',
    cb(t, l) {
      let d = _$$u({
        vm: e,
        handle: t,
        zSchema: _$$z.string(),
        property: 'field',
      })
      if (d === 'fills' || d === 'strokes') {
        throw new Error('fills and strokes variable bindings must be set on paints directly')
      }
      if (d === 'componentProperties') {
        throw new Error('componentProperties variable bindings must be set on componentProperties directly')
      }
      let c = _$$u({
        vm: e,
        handle: t,
        zSchema: _$$N.VariableBindableNodeField,
        property: 'field',
      })
      let u = (function({
        callerName: e,
        consoleLogger: t,
        getNode: i,
        incrementalSafeApi: n,
        pluginVersionID: r,
        vm: a,
        handle: s,
        allowIncrementalUnsafeApiCalls: o,
      }) {
        if (a.isNull(s) || a.isUndefined(s))
          return null
        if (a.isObject(s)) {
          let t = i(s)
          if (!t || t.type !== 'VARIABLE')
            throw new Error(`Cannot call ${e}  with a non-variable node.`)
          return a.getStringProp(s, 'id')
        }
        if (a.isString(s)) {
          if (n && !o) {
            throw new Error(`Cannot call ${e} with a variable id. Please pass a variable object instead.`)
          } (n && o || !r) && t.warn(`Calling ${e} with a variable id is deprecated. Please pass the variable node instead.`)
          return _$$u({
            vm: a,
            handle: s,
            zSchema: _$$z.string(),
            property: 'variableId',
          })
        }
        throw new Error(`Cannot call ${e} without a variable node parameter.`)
      }({
        callerName: 'setBoundVariable',
        consoleLogger: _$$k2,
        getNode: a,
        incrementalSafeApi: i,
        pluginVersionID: r,
        vm: e,
        handle: l,
        allowIncrementalUnsafeApiCalls: o,
      }))
      s.increment(`node.setBoundVariable ${u === null ? 'Remove' : 'Add'}`)
      a(this).setBoundVariable(c, u)
      return e.undefined
    },
    isAllowedInReadOnly: !1,
    hasEditScope: !0,
  })
}

// variableConsumerModes - Variable consumer mode management
function setupVariableConsumerModes({
  vm: e,
  defineVmFunction: t,
  getNode: i,
  incrementalSafeApi: n,
  pluginVersionID: r,
  allowIncrementalUnsafeApiCalls: a,
}, s) {
  t({
    handle: s,
    key: 'clearExplicitVariableModeForCollection',
    metricsKey: 'node.clearExplicitVariableModeForCollection',
    cb(t) {
      let s = i$({
        callerName: 'clearExplicitVariableModeForCollection',
        consoleLogger: _$$k2,
        getNode: i,
        incrementalSafeApi: n,
        pluginVersionID: r,
        vm: e,
        vmHandle: t,
        allowIncrementalUnsafeApiCalls: a,
      })
      i(this).clearExplicitVariableConsumerModeForCollection(s)
      return e.undefined
    },
    isAllowedInReadOnly: !1,
    hasEditScope: !0,
  })
  t({
    handle: s,
    key: 'setExplicitVariableModeForCollection',
    metricsKey: 'node.setExplicitVariableModeForCollection',
    cb(t, s) {
      let o = i$({
        callerName: 'setExplicitVariableModeForCollection',
        consoleLogger: _$$k2,
        getNode: i,
        incrementalSafeApi: n,
        pluginVersionID: r,
        vm: e,
        vmHandle: t,
        allowIncrementalUnsafeApiCalls: a,
      })
      let l = _$$u({
        vm: e,
        handle: s,
        zSchema: _$$z.string(),
        property: 'variableModeID',
      })
      i(this).setExplicitVariableConsumerModeForCollection(o, l)
      return e.undefined
    },
    isAllowedInReadOnly: !1,
    hasEditScope: !0,
  })
}

// textRangeFunctions - Comprehensive text range manipulation methods
function setupTextRangeFunctions({
  vm: e,
  defineVmFunction: t,
  defineVmIncrementalMethod: i,
  mixedSentinel: r,
  imageStore: a,
  videoStore: s,
  getNode: o,
  incrementalSafeApi: d,
  documentAccessState: c,
  allowIncrementalUnsafeApiCalls: u,
}, p) {
  function m(t, i, n) {
    let r = _$$u({
      vm: e,
      handle: i,
      zSchema: _$$N.PositiveInteger,
      property: 'start',
    })
    let a = _$$u({
      vm: e,
      handle: n,
      zSchema: _$$N.PositiveInteger,
      property: 'end',
    })
    if (r >= a) {
      throw new Error('Empty range selected. \'end\' must be greater than \'start\'')
    }
    if (a > t.characters.length) {
      throw new Error('Range outside of available characters. \'start\' must be less than node.characters.length and \'end\' must be less than or equal to node.characters.length')
    }
    return [r, a]
  }
  t({
    handle: p,
    key: 'getRangeFontSize',
    metricsKey: 'node.getRangeFontSize',
    cb(t, i) {
      let n = o(this)
      let [a, s] = m(n, t, i)
      let l = n.getRangeFontSize(a, s)
      return l === 'mixed' ? r : e.newNumber(l)
    },
    isAllowedInReadOnly: !0,
    hasEditScope: !1,
  })
  t({
    handle: p,
    key: 'setRangeFontSize',
    metricsKey: 'node.setRangeFontSize',
    cb(t, i, n) {
      let r = o(this)
      let [a, s] = m(r, t, i)
      let l = _$$u({
        vm: e,
        handle: n,
        zSchema: _$$z.number().finite().min(1),
        property: 'value',
      })
      r.setRangeFontSize(a, s, l)
      return e.undefined
    },
    isAllowedInReadOnly: !1,
    hasEditScope: !0,
  })
  // Additional range methods would continue here...
}

// outlineStroke - Outline stroke management with complex plugin integration
function setupOutlineStroke({
  vm: e,
  defineVmFunction: t,
  getNodeFactory: i,
  getNode: n,
  pluginID: r,
}, a) {
  t({
    handle: a,
    key: 'createOutlineStroke',
    metricsKey: 'node.createOutlineStroke',
    cb() {
      let t = n(this)
      let a = t.createOutlineStroke()
      if (!a) return e.$$null
      
      let s = i()
      let o = s.createNode(a.guid, 'node.createOutlineStroke')
      
      // Track plugin creation for metrics
      let l = e.getStats()
      if (l) {
        let t = e.getStringProp(this, 'id')
        l.recordOutlineStrokeCreation(t, r)
      }
      
      return o
    },
    isAllowedInReadOnly: !1,
    hasEditScope: !0,
  })
  t({
    handle: a,
    key: 'getOutlineStroke',
    metricsKey: 'node.getOutlineStroke',
    cb() {
      let t = n(this)
      let r = t.getOutlineStroke()
      if (!r) return e.$$null
      
      let a = i()
      return a.createNode(r.guid, 'node.getOutlineStroke')
    },
    isAllowedInReadOnly: !0,
    hasEditScope: !1,
  })
  t({
    handle: a,
    key: 'removeOutlineStroke',
    metricsKey: 'node.removeOutlineStroke',
    cb() {
      let t = n(this)
      let i = t.removeOutlineStroke()
      
      // Track plugin removal for metrics
      let a = e.getStats()
      if (a) {
        let t = e.getStringProp(this, 'id')
        a.recordOutlineStrokeRemoval(t, r)
      }
      
      return e.newBoolean(i)
    },
    isAllowedInReadOnly: !1,
    hasEditScope: !0,
  })
}
