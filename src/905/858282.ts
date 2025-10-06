

import classNames from 'classnames'
import { Fragment as _$$Fragment } from 'react'
import { Fragment, jsx, jsxs } from 'react/jsx-runtime'
import { KeyCodes } from '../905/63728'
import { TabLoop, TabLoopDisplayAs } from '../905/64217'
import { AE, aX, E6, Eo, Ep, F4, F7, Gt, hQ, hv, iE, p8, r4, Si, tz, wH, wx, Xi, z3 } from '../905/175194'
import { ResizeDragContext } from '../905/208152'
import { HeaderModalContainer } from '../905/519092'
import { KeyboardEventWrapper, KeyboardReceiver } from '../905/826900'
import { cssBuilderInstance } from '../cssbuilder/589278'
import { Dm, Uu } from '../figma_app/8833'
import { Ay } from '../figma_app/272902'
import { throwTypeError } from '../figma_app/465776'
import { shouldHandleMultiTouchOrPressure } from '../figma_app/753501'
import { K } from '../figma_app/789979'
import { as, OP } from '../figma_app/792958'
import { generateRecordingKey, handleMouseEvent, RecordingComponent, SKIP_RECORDING } from '../figma_app/878298'


/**
 * A draggable modal view component that supports dragging, resizing, and various UI customizations.
 * This component provides a container for modal content with draggable and resizable capabilities.
 */
export class DraggableModalView extends RecordingComponent {
  // Declare class properties for TypeScript
  stopPropagation: (event: any) => void
  _dragState: string
  _containerRef: any
  computeStyles: (position: any) => any
  _onMouseDown: (event: any) => void
  mouseDown: any
  documentMouseMove: any
  documentMouseUp: any
  onClick: (event: any) => void
  onFocus: (event: any) => void
  onBlur: (event: any) => void
  onContentMouseDown: (event: any) => void
  onKeyDown: (event: any) => void
  getAllowedResizeDirections: () => any[]
  getCurrentBounds: () => any
  contextValue: (isResizing: boolean, isDragging: boolean) => { isResizing: boolean; isDragging: boolean }

  constructor(props) {
    super(props)

    // Bind event handlers
    this.stopPropagation = event => event.stopPropagation()

    // Initialize  properties
    this._dragState = 'None'
    this._containerRef = null

    // Style computation helper
    this.computeStyles = (position) => {
      let styles: any = {}

      // Apply visibility and z-index if specified
      if (this.props.hidden) {
        styles.visibility = 'hidden'
      }

      if (this.props.zIndex) {
        styles.zIndex = this.props.zIndex
      }

      // Full page container styling
      if (this.props.containerFillsPage) {
        styles.left = 0
        styles.right = 0
        styles.bottom = 0
        styles.top = 0
        return styles
      }

      // Position calculation
      let { x, y } = position

      // Pixel-perfect positioning
      if (this.props.makeContentPixelPerfect) {
        let devicePixelRatio = 1 / window.devicePixelRatio
        x = this.roundToPixelGrid(x, devicePixelRatio)
        y = this.roundToPixelGrid(y, devicePixelRatio)
      }

      // Apply position based on constraints
      if (this.props.constraints.x === 'left') {
        styles.left = x
      }
      else {
        styles.right = x
      }

      if (this.props.constraints.y === 'top') {
        styles.top = y
      }
      else {
        styles.bottom = y
      }

      // Dimension handling
      let { width, height } = this.props

      if (this.props.makeContentPixelPerfect && width && height) {
        let {
          roundedWidth,
          roundedHeight,
        } = this.calculatePixelPerfectDimensions({
          width,
          height: height - position.uF,
          devicePixelRatio: window.devicePixelRatio,
        })

        let adjustedHeight = roundedHeight + position.uF
        width = roundedWidth
        height = adjustedHeight
      }

      if (width) {
        styles.width = width
      }

      if (height) {
        styles.height = height
      }

      return styles
    }

    // Mouse event handlers
    this._onMouseDown = (event) => {
      event.stopPropagation()
      if (event.button === 2 || this.props.disableDragging)
        return

      let target = event.target
      const isInteractiveElement = target && (
        target.tagName.toLowerCase() === 'input'
        || target.tagName.toLowerCase() === 'label'
        || target.tagName.toLowerCase() === 'img'
        || target.tagName.toLowerCase() === 'a'
      )

      const hasNotDraggableAttribute = target
        && typeof target.closest == 'function'
        && target.closest('[data-not-draggable]')

      if (!isInteractiveElement && !hasNotDraggableAttribute) {
        if (this.dragState === 'None') {
          this.setDragState('Active', 'nativeEvent' in event ? event.nativeEvent : event)
        }
        else {
          console.error('Should not be already dragging in a mousedown handler')
        }
      }
    }

    this.mouseDown = handleMouseEvent(this, 'mousedown', this._onMouseDown, {
      includeTarget: true,
      recordMetadata: event => ({
        pageX: event.pageX,
        pageY: event.pageY,
      }),
      playbackMetadata: event => ({
        pageX: event.pageX,
        pageY: event.pageY,
      }),
    })

    this.documentMouseMove = handleMouseEvent(this, 'mousemove', (event) => {
      if (this.props.hidden || this.dragState === 'None')
        return SKIP_RECORDING

      if (this.dragState === 'Active') {
        this.setDragState('Dragging', event)
      }

      switch (this.dragState) {
        case 'Active':
        case 'Dragging':
          this.props.onDrag(event)
          break
        default:
          throwTypeError(this.dragState)
      }
    }, {
      recordMetadata: event => ({
        pageX: event.pageX,
        pageY: event.pageY,
      }),
      playbackMetadata: event => ({
        pageX: event.pageX,
        pageY: event.pageY,
      }),
    })

    this.documentMouseUp = handleMouseEvent(this, 'mouseup', (event) => {
      switch (this.dragState) {
        case 'Active':
        case 'Dragging':
          this.setDragState('None', 'nativeEvent' in event ? event.nativeEvent : event)
          break
        case 'None':
          return SKIP_RECORDING
        default:
          throwTypeError(this.dragState)
      }
    })

    // Other event handlers
    this.onClick = (event) => {
      event.stopPropagation()
      this.props.onClick && this.props.onClick(event)
    }

    this.onFocus = (event) => {
      event.stopPropagation()
      this.props.onFocus && this.props.onFocus(event)
    }

    this.onBlur = (event) => {
      this.props.onBlur && this.props.onBlur(event)
    }

    this.onContentMouseDown = (event) => {
      if (this.props.dragHeaderOnly) {
        event.stopPropagation()
      }
    }

    this.onKeyDown = (event) => {
      this.props.onKeyDown?.(event)

      if (event.event.keyCode === KeyCodes.ESCAPE
        && !this.props.ignoreCloseShortcut
        && this.props.onClose) {
        const result = this.props.onClose()
        if (result === 0) {
          event.shouldPropagate = true
        }
        else {
          event.accept()
        }
      }
    }

    // Resize helpers
    this.getAllowedResizeDirections = () => {
      let directions = []

      if (this.props.allowResizeHeight) {
        directions.push(OP.TOP, OP.BOTTOM)
      }

      if (this.props.allowResizeWidth) {
        directions.push(OP.LEFT, OP.RIGHT)
      }

      return directions
    }

    this.getCurrentBounds = () => {
      let width = this.props.width ?? this._containerRef?.clientWidth ?? 0
      let height = this.props.height ?? this._containerRef?.clientHeight ?? 0

      let bounds: any = {
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      }

      if (this.props.constraints.x === 'left') {
        bounds.left = this.props.position.x
        bounds.right = bounds.left + width
      }
      else {
        bounds.right = window.innerWidth - this.props.position.x
        bounds.left = bounds.right - width
      }

      if (this.props.constraints.y === 'top') {
        bounds.top = this.props.position.y
        bounds.bottom = bounds.top + height
      }
      else {
        bounds.bottom = window.innerHeight - this.props.position.y
        bounds.top = bounds.bottom - height
      }

      return bounds
    }

    // Context value helper
    this.contextValue = (isResizing: boolean, isDragging: boolean) => ({
      isResizing,
      isDragging,
    })

    // Initial state
    this.state = {
      isResizing: undefined,
      resizeDirections: [],
    }
  }

  /**
   * Get the current drag state
   * @returns {string} The current drag state ('None', 'Active', or 'Dragging')
   */
  get dragState() {
    return this._dragState
  }

  /**
   * Set the drag state and notify listeners
   * @param {string} state - The new drag state
   * @param {Event} event - The event that triggered the state change
   */
  setDragState(state, event) {
    this._dragState = state
    this.props.onDragStateChange(state, event)
    this.forceUpdate()
  }

  /**
   * Round a value to the pixel grid based on device pixel ratio
   * @param {number} value - The value to round
   * @param {number} devicePixelRatio - The device pixel ratio
   * @param {Function} roundingFunction - The rounding function to use (default: Math.round)
   * @returns {number} The rounded value
   */
  roundToPixelGrid(value, devicePixelRatio, roundingFunction = Math.round) {
    return roundingFunction(value / devicePixelRatio) * devicePixelRatio
  }

  /**
   * Calculate pixel-perfect dimensions for the modal
   * @param {Object} options - The options for calculation
   * @param {number} options.width - The original width
   * @param {number} options.height - The original height
   * @param {number} options.devicePixelRatio - The device pixel ratio
   * @returns {Object} The rounded dimensions
   */
  calculatePixelPerfectDimensions({ width, height, devicePixelRatio }) {
    let pixelRatio = 1 / devicePixelRatio
    let aspectRatio = width / height

    return [
      [Math.round, Math.round],
      [Math.floor, Math.floor],
      [Math.ceil, Math.ceil],
      [Math.round, Math.ceil],
      [Math.floor, Math.round],
      [Math.floor, Math.ceil],
    ].map(([roundWidth, roundHeight]) => ({
      roundedWidth: this.roundToPixelGrid(width, pixelRatio, roundWidth),
      roundedHeight: this.roundToPixelGrid(height, pixelRatio, roundHeight),
    })).filter(({ roundedWidth, roundedHeight }) =>
      roundedWidth / roundedHeight <= aspectRatio
    ).reduce(({ roundedWidth, roundedHeight }, { roundedWidth: newWidth, roundedHeight: newHeight }) =>
      newWidth / newHeight > roundedWidth / roundedHeight
        ? { roundedWidth: newWidth, roundedHeight: newHeight }
        : { roundedWidth, roundedHeight }
    )
  }

  componentDidMount() {
    super.componentDidMount()

    if (shouldHandleMultiTouchOrPressure()) {
      document.addEventListener('pointermove', this.documentMouseMove)
      document.addEventListener('pointerup', this.documentMouseUp, true)
    }
    else {
      document.addEventListener('mousemove', this.documentMouseMove)
      document.addEventListener('mouseup', this.documentMouseUp, true)
    }
  }

  componentWillUnmount() {
    super.componentWillUnmount()

    if (shouldHandleMultiTouchOrPressure()) {
      document.removeEventListener('pointermove', this.documentMouseMove)
      document.removeEventListener('pointerup', this.documentMouseUp, true)
    }
    else {
      document.removeEventListener('mousemove', this.documentMouseMove)
      document.removeEventListener('mouseup', this.documentMouseUp, true)
    }
  }

  render() {
    let computedStyles = this.computeStyles(this.props.position)
    let containerClassNames = this.props.animatedIn ? Xi : Eo

    if (this.dragState === 'Dragging') {
      containerClassNames += ` ${r4}`
    }

    if (this.props.containerClassName) {
      containerClassNames += ` ${this.props.containerClassName}`
    }

    let contentClassNames = this.props.scrollOverflow ? F7 : Gt

    if (this.props.isFigJam) {
      contentClassNames = this.props.scrollOverflow ? F4 : wH
    }

    if (this.props.transparentContentBackground) {
      contentClassNames = aX
    }

    if (this.props.minSize) {
      contentClassNames += ` ${cssBuilderInstance.minW200.minH200.$}`
    }

    if (this.props.fullFrame) {
      contentClassNames += ` ${cssBuilderInstance.wFull.hFull.$}`
    }

    if (this.props.overflowHidden) {
      contentClassNames += ` ${cssBuilderInstance.overflowHidden.$}`
    }

    const usePointerEvents = shouldHandleMultiTouchOrPressure()
    const contentElement = jsx('div', {
      'className': `${hQ} ${this.props.contentContainerClassName || ''}`,
      'onPointerDown': usePointerEvents ? this.onContentMouseDown : undefined,
      'onMouseDown': usePointerEvents ? undefined : this.onContentMouseDown,
      'data-testid': this.props.dataTestId,
      'data-onboarding-key': this.props.dataOnboardingKey,
      'children': jsx(KeyboardReceiver, {
        name: 'Draggable modal',
        handleKeyDown: this.onKeyDown,
        focusOnMount: !this.props.preventKeyboardFocus,
        style: {
          height: '100%',
          width: '100%',
        },
        children: this.props.children,
      }),
    })

    let ContainerComponent = this.props.container || _$$Fragment
    let { allowWheelPassthrough } = this.props
    let wheelPassthroughClass = allowWheelPassthrough ? Uu : ''
    let ResizeTargetComponent = this.props.ResizeTargetComponent ?? K

    return jsxs(Fragment, {
      children: [jsx('div', {
        'ref': Ay(this.props.containerRef, element => this._containerRef = element),
        'aria-labelledby': this.props.titleId,
        'className': `${containerClassNames} ${Dm} ${wheelPassthroughClass}`,
        'data-cancel-insertable-resource-drag-and-drop': !this.props.hidden && !this.props.noCancelDragAndDrop,
        'data-fullscreen-bubble-phase': this.props.beMoreAccessible || undefined,
        'data-testid': 'draggable-modal-view',
        'id': this.props.id,
        'onBlur': this.onBlur,
        'onClick': this.onClick,
        'onFocus': this.onFocus,
        'onKeyDown': (event) => {
          if (event.key === 'Escape') {
            event.stopPropagation()
            this.onKeyDown(new KeyboardEventWrapper(event.nativeEvent))
          }
        },
        'onMouseDown': usePointerEvents ? undefined : this.mouseDown,
        'onPointerDown': usePointerEvents ? this.mouseDown : this.props.preventClickEventBubbling ? this.stopPropagation : undefined,
        'role': 'dialog',
        'style': computedStyles,
        'tabIndex': this.props.tabIndex,
        'children': jsxs(ContainerComponent, {
          ...this.props.containerProps,
          children: [jsxs('div', {
            className: contentClassNames,
            style: this.props.frameStyle,
            ref: this.props.frameRef,
            children: [
              this.props.showArrow && this.props.arrowRelativeX && jsx('div', {
                className: (() => {
                  switch (this.props.arrowPosition) {
                    case 5:
                    case 2:
                      return AE
                    case 3:
                      return Ep
                    case 0:
                      return z3
                    case 1:
                      return this.props.smallArrow ? Si : p8
                    case 4:
                      return tz
                    default:
                      return undefined
                  }
                })(),
                style: {
                  left: this.props.arrowRelativeX,
                  top: this.props.arrowRelativeY,
                },
              }),
              jsx(TabLoop, {
                displayAs: TabLoopDisplayAs.DeprecatedFullHeightBlock,
                children: this.props.title != null
                  ? jsx(HeaderModalContainer, {
                    className: hv,
                    closeButtonClassName: this.props.closeButtonClassName,
                    customButton: this.props.customButton,
                    disableHeaderBottomBorder: this.props.disableHeaderBottomBorder,
                    headerClassname: `${wx} ${this.props.headerClassName || ''}`,
                    headerSize: this.props.headerSize,
                    isCloseHidden: this.props.isCloseHidden,
                    onClose: this.props.onClose,
                    onMouseDown: this.stopPropagation,
                    onMouseMove: this.documentMouseMove,
                    recordingKey: generateRecordingKey(this.props, 'draggableModal'),
                    stickyHeader: this.props.stickyHeader,
                    title: this.props.title,
                    titleIconSvgClassName: this.props.titleIconSvgClassName,
                    titleIconSvgSrc: this.props.titleIconSvgSrc,
                    titleIconURL: this.props.titleIconURL,
                    titleId: this.props.titleId,
                    truncateTitleText: this.props.truncateTitleText,
                    children: jsx(ResizeDragContext.Provider, {
                      value: this.contextValue(!!this.state.isResizing, this._dragState !== 'None'),
                      children: contentElement,
                    }),
                  })
                  : contentElement,
              }),
            ],
          }), jsx(ResizeTargetComponent, {
            allowedResizeDirections: this.getAllowedResizeDirections(),
            getCurrentContainerBounds: () => this.getCurrentBounds(),
            hidden: !!this.props.hidden,
            isResizing: this.state.isResizing,
            lockAspectRatio: !!this.props.lockAspectRatio,
            onEdgeDoubleClick: this.props.onEdgeDoubleClick,
            onResizeEnd: this.props.onResizeEnd,
            recordingKey: generateRecordingKey(this.props, 'resizeTarget'),
            resizeTo: this.props.onResize,
            setIsResizing: state => this.setState({
              isResizing: state,
            }),
            setResizeDirections: directions => this.setState({
              resizeDirections: directions,
            }),
          })],
        }),
      }), (() => {
        let isResizing = this.state.isResizing
        let isDragging = this._dragState === 'Dragging'

        if (!(isResizing || isDragging)) {
          return null
        }

        let resizeDirectionsClass = as(this.state.resizeDirections)
        let draggingClass = E6

        return jsx('div', {
          className: classNames(iE, isResizing ? resizeDirectionsClass : isDragging ? draggingClass : undefined, Dm),
        })
      })()],
    })
  }
}

// @ts-expect-error - displayName is not part of the class type but is used by React dev tools
DraggableModalView.displayName = 'DraggableModalView'

// Export constants
export enum ArrowPosition {
  TOP = 0,
  BOTTOM = 1,
  RIGHT_TITLE = 2,
  RIGHT_BODY = 3,
  LEFT_TITLE = 4,
  TOP_RIGHT = 5,
}

/**
 * Enum for positioning strategies
 * @enum {string}
 */
export enum PositioningStrategy {
  FALLBACK = 'fallback',
  BEST_EFFORT = 'best_effort',
}

/**
 * Enum for drag states
 * @enum {string}
 */
export enum DragState {
  Active = 'Active',
  Dragging = 'Dragging',
  None = 'None',
}

// Export aliases for backward compatibility
export const EL = PositioningStrategy
export const F_ = ArrowPosition
export const mq = DragState

export const b2 = DraggableModalView

