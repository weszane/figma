import { Component, forwardRef, useCallback, useEffect, useId, useImperativeHandle, useLayoutEffect, useRef, useState } from 'react';
import { jsx } from 'react/jsx-runtime';
import { Np } from '../905/175194';
import { isPointInRect, Point } from '../905/736624';
import { ArrowPosition, DraggableModalView, DragState, PositioningStrategy } from '../905/858282';
import { jsFullscreenPreventEventCapture } from '../figma_app/8833';
import { assert, throwTypeError } from '../figma_app/465776';
import { E0, em, G5, I_, Ij, lq } from '../figma_app/792958';
import { useLatestRef } from '../figma_app/922077';
import { n as _$$n } from '../vendor/547481';
export const HEADER_HEIGHT = 41;
export const DEFAULT_CONSTRAINTS = {
  x: 'left',
  y: 'top'
} as const;

/**
 * Enum for controlling when to ensure modal is on screen
 */
export enum EnsureModalOnScreenMode {
  /** Skip ensuring modal is on screen */
  SKIP_ENSURE_MODAL_ON_SCREEN = 0,
  /** Call ensureModalOnScreen method */
  CALL_ENSURE_MODAL_ON_SCREEN = 1,
}

/**
 * Ref methods for the DraggableModal component
 */
interface DraggableModalRef {
  /** Ensure the modal is visible on screen */
  ensureModalOnScreen: () => void;
  /** Get the current content size */
  getCurrentContentSize: () => {
    x: number;
    y: number;
  } | undefined;
  /** Get the modal element */
  getEl: () => HTMLElement | null | undefined;
  /** Set the transform of the modal */
  setTransform: (transformFn: (state: any) => any) => void;
  /** Resize the modal height */
  resizeModalHeight: () => void;
}

/**
 * Props for the DraggableModalManager component
 */
interface DraggableModalManagerProps {
  /** Whether to make the modal more accessible */
  beMoreAccessible?: boolean;
  /** Initial width of the modal */
  initialWidth?: number;
  /** Initial height of the modal */
  initialHeight?: number;
  /** Initial position of the modal */
  initialPosition: Point;
  /** Whether to use on-screen initial position */
  useOnScreenInitialPosition?: boolean;
  /** Whether to always ensure modal is on screen */
  alwaysEnsureModalOnScreen?: boolean;
  /** Whether to always ensure header modal is on screen */
  alwaysEnsureHeaderModalOnScreen?: boolean;
  /** Whether to allow auto-expanding */
  allowAutoExpanding?: boolean;
  /** Tab index for accessibility */
  tabIndex?: number;
  /** Additional props to pass through */
  [key: string]: any;
}
interface DraggableModalBgDisabledProps extends DraggableModalManagerProps {
  clickOutsideToHide?: boolean;
  onClose?: () => void;
}

/**
 * DraggableModalManager component that manages the state and behavior of a draggable modal
 */
export const DraggableModalManager = forwardRef<DraggableModalRef, DraggableModalManagerProps>(({
  beMoreAccessible,
  initialWidth,
  initialHeight,
  initialPosition,
  useOnScreenInitialPosition,
  alwaysEnsureModalOnScreen,
  alwaysEnsureHeaderModalOnScreen,
  allowAutoExpanding,
  tabIndex,
  ...restProps
}, ref) => {
  const modalRef = useRef<DraggableModalInternalRef | null>(null);
  const titleId = useId();
  const [width, setWidth] = useState(initialWidth);
  const [height, setHeight] = useState(initialHeight != null ? initialHeight + HEADER_HEIGHT : undefined);
  const [position, setPosition] = useState(initialPosition);
  const propsRef = useLatestRef({
    initialWidth,
    initialHeight,
    initialPosition,
    useOnScreenInitialPosition,
    alwaysEnsureModalOnScreen,
    alwaysEnsureHeaderModalOnScreen,
    allowAutoExpanding,
    ...restProps
  });
  useImperativeHandle(ref, () => ({
    ensureModalOnScreen: () => modalRef.current?.ensureModalOnScreen(),
    getCurrentContentSize: () => modalRef.current?.getCurrentContentSize(),
    getEl: () => modalRef.current?.getEl(),
    setTransform: transformFn => modalRef.current?.setTransform(transformFn),
    resizeModalHeight: () => modalRef.current?.resizeModalHeight()
  }));

  // Update dimensions when initial props change
  useEffect(() => {
    const hasWidthChanged = propsRef.current?.initialWidth !== initialWidth;
    const hasHeightChanged = propsRef.current?.initialHeight !== initialHeight;
    if (hasWidthChanged) {
      setWidth(initialWidth);
    }
    if (hasHeightChanged) {
      setHeight(initialHeight != null ? initialHeight + HEADER_HEIGHT : undefined);
    }
  }, [propsRef, initialHeight, initialWidth]);

  // Resize modal height if needed
  useEffect(() => {
    if (!initialHeight && !allowAutoExpanding) {
      modalRef.current?.resizeModalHeight();
    }
  }, [modalRef, allowAutoExpanding, initialHeight]);

  /**
   * Trigger ensureModalOnScreen if needed
   */
  const triggerEnsureModalOnScreen = useCallback(() => {
    if (!modalRef.current) return;
    const shouldCall = !modalRef.current.state?.shouldCallEnsureModalIsOnScreen;
    if ((alwaysEnsureModalOnScreen || alwaysEnsureHeaderModalOnScreen) && shouldCall) {
      modalRef.current.setState({
        shouldCallEnsureModalIsOnScreen: true
      });
    }
  }, [modalRef, alwaysEnsureHeaderModalOnScreen, alwaysEnsureModalOnScreen]);

  /**
   * Reset position to initial position
   */
  const resetPositionToInitial = useCallback(() => {
    setPosition(initialPosition);
    triggerEnsureModalOnScreen();
  }, [initialPosition, triggerEnsureModalOnScreen]);

  // Update position when initial position changes
  useLayoutEffect(() => {
    const hasPositionChanged = propsRef.current?.initialPosition && !propsRef.current?.initialPosition.equals(initialPosition);
    const hasCustomPosition = modalRef.current?.state?.hasCustomPosition ?? false;
    if (hasPositionChanged && !hasCustomPosition) {
      if (useOnScreenInitialPosition) {
        const previousPosition = propsRef.current?.initialPosition ?? initialPosition;
        const positionDiff = Point.subtract(previousPosition, initialPosition);
        setPosition(position.subtract(positionDiff));
      } else {
        setPosition(initialPosition);
      }
      triggerEnsureModalOnScreen();
    }
  }, [initialPosition, useOnScreenInitialPosition, propsRef, position, alwaysEnsureModalOnScreen, alwaysEnsureHeaderModalOnScreen, modalRef, triggerEnsureModalOnScreen]);

  // Focus the element if accessible
  useLayoutEffect(() => {
    const element = modalRef.current?.getEl();
    if (beMoreAccessible && element) {
      element.focus();
    }
  }, [beMoreAccessible]);
  const accessibleProps = beMoreAccessible ? {
    titleId,
    tabIndex: tabIndex ?? -1
  } : {};
  return jsx(DraggableModalInternal, {
    ...restProps,
    beMoreAccessible,
    ...accessibleProps,
    ref: modalRef,
    height,
    position,
    resetPositionToInitial,
    setHeight,
    setPosition,
    setWidth,
    width,
    initialPosition,
    initialWidth,
    initialHeight,
    useOnScreenInitialPosition,
    alwaysEnsureModalOnScreen,
    alwaysEnsureHeaderModalOnScreen,
    allowAutoExpanding
  });
});
interface DraggableModalInternalProps {
  width?: number;
  height?: number;
  position: Point;
  setWidth: (width: number | undefined) => void;
  setHeight: (height: number | undefined) => void;
  setPosition: (position: Point) => void;
  resetPositionToInitial: () => void;
  beMoreAccessible?: boolean;
  titleId?: string;
  tabIndex?: number;
  [key: string]: any;
}
interface DraggableModalInternalState {
  hidden: boolean;
  constraints: {
    x: string;
    y: string;
  };
  startingDragPosition: {
    elementPosition: Point;
    mousePosition: Point;
  } | null;
  hasCustomPosition: boolean;
  showArrow: boolean;
  shouldCallEnsureModalIsOnScreen: boolean;
}
interface DraggableModalInternalRef {
  ensureModalOnScreen: () => void;
  getCurrentContentSize: () => {
    x: number;
    y: number;
  } | undefined;
  getEl: () => HTMLElement | null | undefined;
  setTransform: (transformFn: (state: any) => any) => void;
  resizeModalHeight: () => void;
  state: DraggableModalInternalState | null;
  setState: (state: Partial<DraggableModalInternalState>) => void;
}

/**
 * Internal DraggableModal component that handles the actual modal implementation
 */
class DraggableModalInternal extends Component<DraggableModalInternalProps, DraggableModalInternalState> {
  el: HTMLElement | undefined | null = null;
  frameEl: HTMLElement | undefined | null = null;
  inBounds: boolean = false;
  lastInnerWidth: number = window.innerWidth;
  observer: ResizeObserver;
  constructor(props: DraggableModalInternalProps) {
    super(props);
    this.observer = new ResizeObserver(entries => {
      for (const entry of entries) {
        if (this.frameEl === entry.target) {
          this.ensureModalOnScreen();
        }
      }
    });
    this.state = {
      hidden: props.hidden,
      constraints: props.initialConstraints || DEFAULT_CONSTRAINTS,
      startingDragPosition: null,
      hasCustomPosition: false,
      showArrow: true,
      shouldCallEnsureModalIsOnScreen: false
    };
  }
  getEl = () => this.el;
  getHeight = (height: number) => Math.min(height, this.props.maxHeight || height);
  getWidth = (width: number) => Math.min(width, this.props.maxWidth || width);
  minBottomMargin = () => this.props.minBottomMargin ?? I_;
  minTopMargin = () => this.props.minTopMargin ?? G5;
  minLeftMargin = () => this.props.minLeftMargin ?? em;
  minRightMargin = () => this.props.minRightMargin ?? lq;
  resizeModalHeight = () => {
    if (!this.el) return;
    const originalHeight = this.el.style.height;
    this.el.style.height = '';
    const rect = this.el.getBoundingClientRect();
    this.el.style.height = originalHeight;
    if (this.props.height !== rect.height) {
      this.props.setHeight(this.getHeight(rect.height));
      this.props.acceptHeight && this.props.acceptHeight(rect.height);
    }
  };
  getOnScreenPositionOfHeader = (element: HTMLElement) => {
    const {
      top,
      width,
      left
    } = element.getBoundingClientRect();
    const rect = new DOMRect(left, top, width, HEADER_HEIGHT);
    return this.getOnScreenPositionOfBoundingRect(rect);
  };
  getOnScreenPositionOfElement = (element: HTMLElement) => this.getOnScreenPositionOfBoundingRect(element.getBoundingClientRect());
  getOnScreenPositionOfBoundingRect = (rect: DOMRect) => {
    const {
      top,
      bottom,
      width,
      height,
      right,
      left
    } = rect;
    let y = this.props.position.y;
    if (top < this.minTopMargin()) {
      y = this.state.constraints.y === 'top' ? this.minTopMargin() : this.minBottomMargin();
    } else if (!this.props.canRenderBelowViewport && bottom + this.minBottomMargin() > window.innerHeight) {
      y = this.state.constraints.y === 'top' ? Math.max(this.minTopMargin(), window.innerHeight - (height + this.minBottomMargin())) : this.minBottomMargin();
    }
    let x = this.props.position.x;
    const previousRightMargin = this.lastInnerWidth - x;
    const currentRightMargin = window.innerWidth - left;
    if (right > window.innerWidth - this.minRightMargin() && currentRightMargin < previousRightMargin) {
      x = window.innerWidth - previousRightMargin;
    }
    if (this.props.allowPartialHeaderOnScreen) {
      if (right < this.minLeftMargin() + 40) {
        x = this.state.constraints.x === 'left' ? 40 - width : 40;
      } else if (left > window.innerWidth - this.minRightMargin() - 40) {
        x = this.state.constraints.x === 'left' ? window.innerWidth - this.minRightMargin() - 40 : window.innerWidth - this.minRightMargin() - width - 40;
      }
    } else {
      if (left < this.minLeftMargin()) {
        x = this.state.constraints.x === 'left' ? this.minLeftMargin() : this.minLeftMargin() + width;
      } else if (right > window.innerWidth - this.minRightMargin()) {
        x = this.state.constraints.x === 'left' ? window.innerWidth - this.minRightMargin() - width : window.innerWidth - this.minRightMargin();
      }
    }
    return new Point(x, y);
  };
  ensureModalOnScreen = () => {
    if (!this.el) return;
    let newPosition: Point;
    if (this.props.alwaysEnsureHeaderModalOnScreen && !this.props.alwaysEnsureModalOnScreen) {
      newPosition = this.getOnScreenPositionOfHeader(this.el);
    } else {
      newPosition = this.getOnScreenPositionOfElement(this.el);
    }
    if (!newPosition.equals(this.props.position)) {
      this.props.setPosition(newPosition);
    }
    this.lastInnerWidth = window.innerWidth;
  };
  containerRef = (element: HTMLElement | null) => {
    this.el = element;
  };
  frameRef = (element: HTMLElement | null) => {
    this.frameEl = element;
  };
  onDragStateChange = (state: DragState, event: any) => {
    switch (state) {
      case DragState.Active:
        {
          const elementPosition = new Point(this.el!.offsetLeft, this.el!.offsetTop);
          const mousePosition = new Point(event.pageX, event.pageY);
          this.setState({
            constraints: DEFAULT_CONSTRAINTS,
            startingDragPosition: {
              elementPosition,
              mousePosition
            }
          });
          this.props.setPosition(elementPosition);
          break;
        }
      case DragState.Dragging:
        this.props.onDragStart?.(event);
        break;
      case DragState.None:
        {
          const result = this.props.onDragEnd?.(this.props.position) ?? 1;
          this.setState({
            startingDragPosition: null
          });
          if (result && (this.props.alwaysEnsureModalOnScreen || this.props.alwaysEnsureHeaderModalOnScreen)) {
            this.ensureModalOnScreen();
          }
          break;
        }
      default:
        throwTypeError(state);
    }
  };
  onDrag = (event: any) => {
    if (!this.state.startingDragPosition) return;
    const width = this.props.width || 0;
    let newPosition = Ij(event, this.state.startingDragPosition);
    if (!this.props.allowPartialHeaderOnScreen) {
      newPosition = newPosition.clampX({
        x: -(width / 2),
        width: window.innerWidth
      });
    }
    this.setState({
      hasCustomPosition: true
    });
    this.props.setPosition(newPosition);
    if (this.props.bounds) {
      const inBounds = isPointInRect(this.props.bounds, newPosition);
      if (inBounds && !this.inBounds) {
        this.props.onEnterBound?.();
        this.inBounds = true;
      } else if (this.inBounds && !inBounds) {
        this.props.onLeaveBound?.();
        this.inBounds = false;
      }
    }
  };
  onResize = (event: any, data: any) => {
    const result = E0(event, {
      ...data,
      maxHeight: this.props.maxHeight,
      maxWidth: this.props.maxWidth,
      minHeight: this.props.minHeight,
      minWidth: this.props.minWidth
    });
    if (result) {
      this.setState({
        hasCustomPosition: true,
        constraints: {
          x: 'left',
          y: 'top'
        }
      });
      this.props.setWidth(result.width);
      this.props.setHeight(result.height);
      this.props.setPosition(result.position);
      this.props.onResize?.({
        width: result.width,
        height: result.height
      });
    }
  };
  componentDidMount() {
    if (this.props.width && this.props.height || this.props.allowAutoExpanding) {
      this.ensureModalOnScreen();
    } else if (this.el) {
      const {
        width,
        height
      } = this.el.getBoundingClientRect();
      if (this.props.width) {
        this.props.setHeight(this.getHeight(height));
      } else if (this.props.height) {
        this.props.setWidth(this.getWidth(width));
      } else {
        this.props.setWidth(this.getWidth(width));
        this.props.setHeight(this.getHeight(height));
      }
    }
    window.addEventListener('resize', this.ensureModalOnScreen);
    const allowsResize = this.props.allowResizeHeight || this.props.allowResizeWidth;
    if (this.frameEl && !allowsResize) {
      this.observer.observe(this.frameEl);
    }
    if (this.el && this.props.acceptHeight) {
      this.props.acceptHeight(this.el.getBoundingClientRect().height);
    }
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.ensureModalOnScreen);
    this.observer.disconnect();
  }
  componentDidUpdate(prevProps: DraggableModalInternalProps, prevState: DraggableModalInternalState, snapshot: any) {
    let constraintsChanged = false;
    if (this.state.hasCustomPosition) {
      if (this.state.showArrow) {
        this.setState({
          showArrow: false
        });
      }
    } else {
      if (prevProps.initialConstraints?.x !== this.props.initialConstraints?.x || prevProps.initialConstraints?.y !== this.props.initialConstraints?.y) {
        constraintsChanged = true;
        this.setState({
          constraints: this.props.initialConstraints || DEFAULT_CONSTRAINTS
        });
      }
    }
    if (this.props.canResetPosition && !prevProps.canResetPosition) {
      this.setState({
        constraints: this.props.initialConstraints || DEFAULT_CONSTRAINTS,
        startingDragPosition: null,
        hasCustomPosition: false,
        showArrow: true
      });
      this.props.resetPositionToInitial?.();
    }
    if (this.props.width !== prevProps.width || this.props.height !== prevProps.height) {
      if (!this.props.allowResizeHeight && !this.props.allowResizeWidth) {
        this.setState({
          shouldCallEnsureModalIsOnScreen: true
        });
      }
    }
    if ((this.props.alwaysEnsureModalOnScreen || this.props.alwaysEnsureHeaderModalOnScreen) && constraintsChanged && !this.state.shouldCallEnsureModalIsOnScreen) {
      this.setState({
        shouldCallEnsureModalIsOnScreen: true
      });
    }
    if (this.state.shouldCallEnsureModalIsOnScreen && !constraintsChanged) {
      this.ensureModalOnScreen();
      this.setState({
        shouldCallEnsureModalIsOnScreen: false
      });
    }
    if (this.frameEl && snapshot?.scrollTop) {
      this.frameEl.scrollTop = snapshot.scrollTop;
    }
    if (this.props.shouldScrollToBottom && this.props.shouldScrollToBottom() && this.frameEl) {
      this.frameEl.scrollTop = this.frameEl.scrollHeight;
    }
  }
  getSnapshotBeforeUpdate(_prevProps: DraggableModalInternalProps, _prevState: DraggableModalInternalState) {
    return {
      scrollTop: this.frameEl?.scrollTop
    };
  }
  getCurrentContentSize() {
    assert(!!this.props.height);
    assert(!!this.props.width);
    return {
      x: this.props.width,
      y: this.props.height - HEADER_HEIGHT
    };
  }
  static getDerivedStateFromProps(props: DraggableModalInternalProps, state: DraggableModalInternalState) {
    if (props.hidden !== state.hidden) {
      return props.hidden ? {
        hidden: true,
        hasCustomPosition: false
      } : {
        hidden: state.shouldCallEnsureModalIsOnScreen
      };
    }
    return null;
  }
  setTransform(transformFn: (state: any) => any) {
    const result = transformFn({
      constraints: this.state.constraints,
      width: this.props.width,
      height: this.props.height,
      position: this.props.position
    });
    if (result) {
      this.props.setWidth(result.width);
      this.props.setHeight(result.height);
      this.props.setPosition(result.position);
      this.props.onResize?.({
        width: result.width,
        height: result.height
      });
      this.props.onDragEnd?.(result.position);
    }
  }
  render() {
    const {
      acceptHeight,
      allowAutoExpanding,
      allowPartialHeaderOnScreen,
      alwaysEnsureHeaderModalOnScreen,
      alwaysEnsureModalOnScreen,
      autoflowHeight,
      canRenderBelowViewport,
      disableHeaderBottomBorder,
      id,
      initialConstraints,
      width,
      height,
      position,
      maxHeight,
      maxWidth,
      minBottomMargin,
      minHeight,
      minLeftMargin,
      minRightMargin,
      minTopMargin,
      minWidth,
      onDragStart,
      onDragEnd,
      onResize,
      shouldScrollToBottom,
      bounds,
      onEnterBound,
      onLeaveBound,
      showArrow,
      ...restProps
    } = this.props;
    const {
      showArrow: stateShowArrow,
      constraints,
      hidden
    } = this.state;
    let computedHeight: number | undefined;
    if (height) {
      computedHeight = this.props.autoflowHeight || maxHeight && maxHeight < height ? undefined : height;
    }
    return jsx(DraggableModalView, {
      ...restProps,
      beMoreAccessible: this.props.beMoreAccessible,
      constraints,
      containerRef: this.containerRef,
      disableHeaderBottomBorder,
      frameRef: this.frameRef,
      height: computedHeight,
      hidden,
      id,
      onDrag: this.onDrag,
      onDragStateChange: this.onDragStateChange,
      onResize: this.onResize,
      position,
      showArrow: stateShowArrow,
      titleId: this.props.titleId,
      transparentContentBackground: this.props.transparentContentBackground,
      width
    });
  }
}

// @ts-expect-error - displayName is not part of the class type but is used by React dev tools
DraggableModalInternal.displayName = 'DraggableModal';
export const DraggableModal = forwardRef<DraggableModalRef, DraggableModalManagerProps>((props, ref) => jsx(DraggableModalManager, {
  ref,
  ...props
}));
export class DraggableModalBgDisabled extends Component<DraggableModalBgDisabledProps> {
  render() {
    return jsx('div', {
      className: `${Np} ${jsFullscreenPreventEventCapture}`,
      onMouseDown: this.props.clickOutsideToHide ? this.props.onClose : undefined,
      children: jsx(DraggableModalManager, {
        ...this.props
      })
    });
  }
}

// @ts-expect-error - displayName is not part of the class type but is used by React dev tools
DraggableModalBgDisabled.displayName = 'DraggableModalBgDisabled';
export const Ao = DraggableModalManager;
export const Xj = DraggableModalBgDisabled;
export const od = DraggableModal;
export const rk = EnsureModalOnScreenMode;
export const uF = HEADER_HEIGHT;
export const F_ = ArrowPosition;
export const EL = PositioningStrategy;
export { ArrowPosition, PositioningStrategy };