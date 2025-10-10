import { Children, cloneElement, Component, PureComponent } from 'react';
import { connect } from 'react-redux';
import { Fragment, jsx, jsxs } from 'react/jsx-runtime';
import { a as _$$a } from '../905/339331';
import { RecordingScrollContainer } from '../905/347284';
import { r as _$$r } from '../905/571562';
import { Point } from '../905/736624';
import { KeyboardReceiver } from '../905/826900';
import { hideDropdownAction } from '../905/929976';
import { DropdownWithScrim, DropdownContainer, useDropdownFocus } from '../figma_app/236327';
import { setRefValue } from '../figma_app/272902';
import { useHandleKeyboardEvent } from '../figma_app/878298';
let _ = 'pointing_dropdown--chevron--eYKwT';
// Enum for dropdown types with descriptive names
export enum DropdownType {
  DEFAULT = 0,
  LIGHT = 1,
  MATCH_BACKGROUND = 2,
}

// Type guard function to ensure type safety for dropdown props
export function getDropdownTypeProps(props: {
  type?: number;
}): {
  type?: DropdownType;
} {
  // Return strongly typed object based on input type
  switch (props.type) {
    case DropdownType.LIGHT:
      return {
        type: DropdownType.LIGHT
      };
    case DropdownType.MATCH_BACKGROUND:
      return {
        type: DropdownType.MATCH_BACKGROUND
      };
    case DropdownType.DEFAULT:
      return {
        type: DropdownType.DEFAULT
      };
    default:
      return {
        type: undefined
      };
  }
}

// Main dropdown component with improved readability and type safety
class PointingDropdownInner extends PureComponent<any, any> {
  private contentEl: HTMLElement | null = null;
  private dropdownOptionsContainer: HTMLElement | null = null;
  private observer: MutationObserver;
  private scrollContainer: any;
  constructor(props: any) {
    super(props);
    this.state = {
      contentTop: 0,
      contentLeft: 0,
      didEnsureContentOnScreen: false,
      previousFocusedElement: document.activeElement,
      windowMaxWidth: window.innerWidth
    };

    // Observer for dropdown content changes
    this.observer = new MutationObserver(() => {
      this.forceUpdate();
    });
  }

  // Handle escape key press in fullscreen mode
  private onKeyDownFromFullscreen = (keyboardEvent: any) => {
    if (keyboardEvent.event.key === 'Escape' && this.props.dispatch) {
      keyboardEvent.accept();
      this.props.dispatch(hideDropdownAction());
    }
  };

  // Calculate dropdown position based on target element and lean direction
  private getContentLocation = (): Point => {
    const leanDirection = this.props.lean || 'center';
    const leanPadding = this.props.leanPadding !== undefined ? this.props.leanPadding : 16;
    const targetRect = this.props.targetRect;
    const contentRect = this.contentEl!.getBoundingClientRect();

    // Calculate vertical position
    let verticalPosition: number;
    if (this.props.displayAboveTarget) {
      verticalPosition = targetRect.top - 7 + 2;
    } else if (this.props.displayOverTarget) {
      verticalPosition = targetRect.top;
    } else {
      verticalPosition = targetRect.bottom + 7 - 2;
    }

    // Calculate horizontal position based on lean direction
    switch (leanDirection) {
      case 'center':
        return new Point(targetRect.left + targetRect.width / 2 - contentRect.width / 2, verticalPosition);
      case 'left':
        return new Point(targetRect.right + leanPadding - contentRect.width, verticalPosition);
      case 'right':
        return new Point(targetRect.left - leanPadding, verticalPosition);
      default:
        return new Point(0, 0);
    }
  };

  // Ensure dropdown content stays within screen boundaries
  private ensureContentOnScreen = () => {
    let position = this.getContentLocation();
    const windowPadding = this.props.windowPadding || 8;

    // Apply minimum left margin
    position.x = Math.max(8 + (this.props.minLeftMargin || 0), position.x);
    const contentRect = this.contentEl!.getBoundingClientRect();
    const rightEdge = position.x + contentRect.width;
    const bottomPosition = position.y + (this.props.displayAboveTarget ? -1 : 1) * contentRect.height;
    const maxRight = window.innerWidth - windowPadding;
    const maxBottom = window.innerHeight - (windowPadding + (this.props.minBottomMargin || 0));
    let positionAdjusted = false;

    // Adjust horizontal position if overflowing
    if (rightEdge > maxRight) {
      position.x -= rightEdge - maxRight;
    }

    // Adjust vertical position if overflowing
    if (bottomPosition > maxBottom) {
      position.y -= bottomPosition - maxBottom;
      positionAdjusted = true;
    }

    // Ensure minimum top position
    if (position.y < 9) {
      position.y = 9;
      positionAdjusted = true;
    }

    // Re-apply minimum left margin after adjustments
    position.x = Math.max(8 + (this.props.minLeftMargin || 0), position.x);
    const availableWidth = maxRight - position.x;
    this.setState({
      contentTop: Math.round(position.y),
      contentLeft: Math.round(position.x),
      didEnsureContentOnScreen: positionAdjusted,
      windowMaxWidth: availableWidth
    });
  };

  // Content element ref handler
  private contentRef = (element: HTMLElement | null) => {
    this.contentEl = element;
    setRefValue(this.props.contentRef, element);
    if (this.contentEl) {
      this.ensureContentOnScreen();
    }
  };

  // Dropdown options container ref handler
  private dropdownOptionsContainerRef = (element: HTMLElement | null) => {
    if (element) {
      this.dropdownOptionsContainer = element;
      this.observer.observe(element, {
        childList: true,
        subtree: true
      });
    }
  };

  // Calculate maximum dropdown height based on available space
  private calculateMaxDropdownHeight = (windowHeight: number): number => {
    const windowPadding = this.props.windowPadding || 8;
    if (this.props.maxHeight) {
      return this.props.maxHeight;
    }
    if (this.props.displayAboveTarget) {
      return this.props.targetRect.top - windowPadding - 16;
    } else {
      return windowHeight - this.state.contentTop - windowPadding - 16;
    }
  };

  // Get styling based on dropdown type
  private getStylesForType = (elementType: 'dropdown' | 'arrow'): React.CSSProperties => {
    switch (this.props.type) {
      case DropdownType.LIGHT:
        return {
          backgroundColor: 'white',
          boxShadow: '0px 5px 17px rgba(0, 0, 0, 0.2), 0px 2px 7px rgba(0, 0, 0, 0.15), inset 0 0 0 0.5px rgba(0, 0, 0, 0.06), 0 0 0 0.5px rgba(0, 0, 0, 0.06)',
          ...(elementType === 'arrow' ? {
            border: '0.5px solid rgba(0, 0, 0, 0.2)'
          } : {})
        };
      case DropdownType.MATCH_BACKGROUND:
        return {
          backgroundColor: 'var(--color-bg, white)',
          boxShadow: 'var(--elevation-400-menu-panel)',
          ...(elementType === 'arrow' ? {
            border: '0.5px solid rgba(0, 0, 0, 0.2)'
          } : {})
        };
      case DropdownType.DEFAULT:
      default:
        return {};
    }
  };
  componentDidMount() {
    if (this.props.focusContainerOnMount && this.contentEl) {
      this.contentEl.focus();
    }
  }
  componentDidUpdate(prevProps: any, _prevState: any) {
    // Check if target rectangle has changed
    const targetRectChanged = prevProps.targetRect.bottom !== this.props.targetRect.bottom || prevProps.targetRect.left !== this.props.targetRect.left || prevProps.targetRect.right !== this.props.targetRect.right || prevProps.targetRect.top !== this.props.targetRect.top || prevProps.targetRect.width !== this.props.targetRect.width || prevProps.targetRect.height !== this.props.targetRect.height;
    if (targetRectChanged) {
      this.ensureContentOnScreen();
    }
  }
  componentWillUnmount() {
    if (this.props.autofocusPrevOnDismount && this.state.previousFocusedElement) {
      this.state.previousFocusedElement.focus();
    }
  }

  // Render dropdown options with scroll container if needed
  private renderDropdownOptions() {
    const dropdownOptions = jsx('div', {
      "ref": this.dropdownOptionsContainerRef,
      'data-onboarding-key': this.props.onboardingKey,
      "className": this.props.orientation === 'horizontal' ? 'pointing_dropdown--horizontalOrientation--z9DRY' : '',
      "children": this.props.children
    });
    if (!this.props.disableDropdownScrollContainer && this.dropdownOptionsContainer) {
      return jsx(DropdownScrollContainer, {
        maxDropdownHeight: this.calculateMaxDropdownHeight,
        dropdownChildrenHeight: this.dropdownOptionsContainer.clientHeight,
        autoHeight: this.props.autoHeight,
        ref: this.props.scrollContainerRef,
        children: dropdownOptions
      });
    }
    return dropdownOptions;
  }
  render() {
    const minWidth = this.props.minWidth ?? 200;
    const maxHeight = this.props.maxHeight || 'none';

    // Dropdown content styles
    const contentStyle: React.CSSProperties = {
      top: this.props.displayAboveTarget ? undefined : this.state.contentTop,
      bottom: this.props.displayAboveTarget ? window.innerHeight - this.state.contentTop : undefined,
      left: this.state.contentLeft,
      maxHeight,
      minWidth,
      maxWidth: this.props.maxWidth || this.state.windowMaxWidth,
      ...this.getStylesForType('dropdown'),
      textAlign: this.props.textAlign || 'left'
    };
    const targetRect = this.props.targetRect;
    const arrowLeftPosition = this.props.arrowOffsetFromRectLeft ? targetRect.left + this.props.arrowOffsetFromRectLeft - 5.5 : targetRect.left + targetRect.width / 2 - 5.5;
    const arrowVerticalPosition = this.props.displayAboveTarget ? targetRect.top - 7 : targetRect.bottom;
    const hideArrow = this.props.hidePointWhenContentOffScreen && this.state.didEnsureContentOnScreen;
    const contentClasses = classNames('pointing_dropdown--content--hfmPL', {
      'pointing_dropdown--ui3NoPaddingDropdown--YQjHQ': this.props.removeUI3BorderPadding
    });

    // Render dropdown content with or without close propagation
    const dropdownContent = this.props.propagateCloseClick ? jsxs(DropdownContainer, {
      'aria-labelledby': this.props['aria-labelledby'],
      "className": contentClasses,
      "dropdownRef": this.contentRef,
      "id": this.props.id,
      "onFocus": this.props.onFocus,
      "onKeyDown": this.props.onKeyDown,
      "preventEventCapture": this.props.preventEventCapture,
      "preventZoom": this.props.preventZoom,
      "style": contentStyle,
      "tabIndex": this.props.tabIndex ?? undefined,
      "children": [this.renderDropdownOptions(), this.props.footer]
    }) : jsx(DropdownWithScrim, {
      'aria-labelledby': this.props['aria-labelledby'],
      "className": contentClasses,
      "closeDropdown": this.props.closeDropdown,
      "dispatch": this.props.dispatch,
      "dropdownRef": this.contentRef,
      "id": this.props.id,
      "onFocus": this.props.onFocus,
      "onKeyDown": this.props.onKeyDown,
      "preventEventCapture": this.props.preventEventCapture,
      "preventZoom": this.props.preventZoom,
      "style": contentStyle,
      "tabIndex": this.props.tabIndex ?? undefined,
      "children": this.renderDropdownOptions()
    });

    // Arrow styles
    const arrowStyle: React.CSSProperties = {
      left: `${arrowLeftPosition}px`,
      top: `${this.props.displayAboveTarget ? arrowVerticalPosition - 5 : arrowVerticalPosition + 2}px`,
      transform: this.props.displayAboveTarget ? 'rotate(225deg)' : undefined,
      opacity: hideArrow ? 0 : 1,
      ...this.getStylesForType('arrow')
    };
    const dataTestId = this.props.dataTestId ?? 'pointingDropdown';
    return jsx(KeyboardReceiver, {
      name: 'pointingDropdown',
      handleKeyDown: this.onKeyDownFromFullscreen,
      focusOnMount: true,
      style: {
        display: 'contents'
      },
      children: jsxs('div', {
        "className": `pointing_dropdown--root--eFNXS ${this.props.className || ''}`,
        'data-testid': dataTestId,
        "children": [!!this.props.showPoint && jsx('div', {
          className: 'pointing_dropdown--arrow--CkDK3 _overlayBase--_overlayBase--Rkj8l',
          style: arrowStyle
        }), dropdownContent]
      })
    });
  }
  static displayName = 'PointingDropdownInner';
  static defaultProps = {
    showPoint: true
  };
}

// Connected dropdown component
export const ConnectedPointingDropdown = connect()(PointingDropdownInner);

// Hook-based dropdown component
export function PointingDropdown(props: any) {
  const {
    childrenComponents,
    getSetChildRef,
    onKeyDown,
    onFocus
  } = useDropdownFocus(props);
  const handleKeyDown = useHandleKeyboardEvent(props.recordingKey, 'keydown', (event: any) => onKeyDown(event));
  return jsx(ConnectedPointingDropdown, {
    'aria-labelledby': props['aria-labelledby'],
    'arrowOffsetFromRectLeft': props.arrowOffsetFromRectLeft,
    'className': props.className,
    'disableDropdownScrollContainer': true,
    'displayAboveTarget': props.displayAboveTarget,
    'displayOverTarget': props.displayOverTarget,
    'focusContainerOnMount': props.focusContainerOnMount,
    'hidePointWhenContentOffScreen': props.hidePointWhenContentOffScreen,
    'id': props.id,
    'lean': props.lean,
    'leanPadding': props.leanPadding,
    'maxHeight': props.maxHeight,
    'maxWidth': props.maxWidth,
    'minWidth': props.minWidth,
    'onFocus': props.onFocus,
    'onKeyDown': handleKeyDown,
    'orientation': props.orientation,
    'propagateCloseClick': props.propagateCloseClick,
    'showPoint': props.showPoint,
    'tabIndex': -1,
    'targetRect': props.targetRect,
    'textAlign': props.textAlign,
    ...getDropdownTypeProps(props),
    'children': Children.map(childrenComponents, (child: any, index) => cloneElement(child, {
      buttonRef: getSetChildRef(index),
      onFocus
    }))
  });
}

// Scroll container for dropdown options
export class DropdownScrollContainer extends Component<any, any> {
  private scrollInterval: NodeJS.Timeout | number | undefined;
  scrollContainer: any;
  constructor(props: any) {
    super(props);
    this.state = {
      windowHeight: window.innerHeight,
      showTopScrollIndicator: false,
      showBottomScrollIndicator: props.dropdownChildrenHeight > props.maxDropdownHeight(window.innerHeight)
    };
  }

  // Update window height on resize
  private updateWindowHeight = () => {
    this.setState({
      windowHeight: window.innerHeight
    });
  };
  private scrollContainerRef = (element: any) => {
    this.scrollContainer = element;
  };

  // Scroll by specified amount
  private scrollBy = (delta: number) => {
    if (this.scrollContainer) {
      const newScrollTop = this.scrollContainer.getScrollTop() + delta;
      this.scrollContainer.scrollTo(newScrollTop);
    }
  };
  scrollToTop = () => {
    this.scrollContainer?.scrollToTop();
  };
  scrollToBottom = () => {
    this.scrollContainer?.scrollToBottom();
  };
  private getScrollTop = () => this.scrollContainer?.getScrollTop() || 0;
  private getScrollBottom = () => {
    if (!this.scrollContainer) return 0;
    return this.scrollContainer.getScrollTop() + this.props.maxDropdownHeight(this.state.windowHeight);
  };

  // Update visibility of scroll indicators
  private updateScrollIndicatorVisibility = () => {
    if (!this.scrollContainer) return;
    const scrollTop = this.scrollContainer.getScrollTop();
    const scrollHeight = this.scrollContainer.getScrollHeight();
    const maxDropdownHeight = this.props.maxDropdownHeight(this.state.windowHeight);
    const showTopIndicator = scrollTop !== 0;
    const showBottomIndicator = scrollHeight - scrollTop > maxDropdownHeight;
    if (showTopIndicator !== this.state.showTopScrollIndicator || showBottomIndicator !== this.state.showBottomScrollIndicator) {
      this.setState({
        showTopScrollIndicator: showTopIndicator,
        showBottomScrollIndicator: showBottomIndicator
      });
    }
  };
  private onScroll = () => {
    this.updateScrollIndicatorVisibility();
  };

  // Handle mouse enter on scroll indicator
  private onMouseEnterIndicator = (scrollDelta: number) => () => {
    if (this.scrollInterval) {
      clearInterval(this.scrollInterval);
    }
    this.scrollInterval = setInterval(() => {
      if (this.scrollContainer) {
        this.scrollBy(scrollDelta);
      }
    }, 25);
  };

  // Handle mouse leave on scroll indicator
  private onMouseLeaveIndicator = () => {
    if (this.scrollInterval) {
      clearInterval(this.scrollInterval);
      this.scrollInterval = undefined;
    }
  };

  // Handle click on scroll indicator
  private onClickIndicator = (event: React.MouseEvent) => {
    event.stopPropagation();
  };

  // Handle wheel event on scroll indicator
  private onWheelIndicator = (event: React.WheelEvent) => {
    if (this.scrollContainer) {
      this.scrollBy(event.deltaY);
    }
  };
  componentDidMount() {
    window.addEventListener('resize', this.updateWindowHeight);
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowHeight);
    if (this.scrollInterval) {
      clearInterval(this.scrollInterval);
    }
  }
  componentDidUpdate(prevProps: any, prevState: any) {
    const windowHeightChanged = prevState.windowHeight !== this.state.windowHeight;
    const childrenHeightChanged = prevProps.dropdownChildrenHeight !== this.props.dropdownChildrenHeight;
    if (windowHeightChanged || childrenHeightChanged) {
      const maxDropdownHeight = this.props.maxDropdownHeight(this.state.windowHeight);
      if (this.props.dropdownChildrenHeight > maxDropdownHeight) {
        this.updateScrollIndicatorVisibility();
      } else if (this.state.showTopScrollIndicator || this.state.showBottomScrollIndicator) {
        this.setState({
          showTopScrollIndicator: false,
          showBottomScrollIndicator: false
        });
      }
    }
  }

  // Render scroll indicators
  private renderScrollIndicators() {
    const topIndicatorStyle = this.state.showTopScrollIndicator ? {} : {
      display: 'none'
    };
    const bottomIndicatorStyle = this.state.showBottomScrollIndicator ? {} : {
      display: 'none'
    };
    return jsxs(Fragment, {
      children: [
      // Top scroll indicator
      jsx('div', {
        className: 'pointing_dropdown--topScrollIndicator--Cke6H pointing_dropdown--scrollIndicator--cvX-K',
        style: topIndicatorStyle,
        onMouseEnter: this.onMouseEnterIndicator(-8),
        onMouseLeave: this.onMouseLeaveIndicator,
        onClick: this.onClickIndicator,
        onWheel: this.onWheelIndicator,
        children: jsx('div', {
          className: 'pointing_dropdown--chevron--eYKwT',
          children: jsx(_$$a, {})
        })
      }),
      // Bottom scroll indicator
      jsx('div', {
        className: 'pointing_dropdown--bottomScrollIndicator--a39aF pointing_dropdown--scrollIndicator--cvX-K',
        style: bottomIndicatorStyle,
        onMouseEnter: this.onMouseEnterIndicator(8),
        onMouseLeave: this.onMouseLeaveIndicator,
        onClick: this.onClickIndicator,
        onWheel: this.onWheelIndicator,
        children: jsx('div', {
          className: 'pointing_dropdown--chevron--eYKwT',
          children: jsx(_$$r, {})
        })
      })]
    });
  }
  render() {
    const maxDropdownHeight = this.props.maxDropdownHeight(this.state.windowHeight);
    const calculatedHeight = Math.min(maxDropdownHeight, this.props.dropdownChildrenHeight);
    return jsxs(Fragment, {
      children: [jsx(RecordingScrollContainer, {
        hideScrollbar: true,
        height: this.props.autoHeight ? undefined : calculatedHeight,
        onScroll: this.onScroll,
        ref: this.scrollContainerRef,
        children: this.props.children
      }), this.renderScrollIndicators()]
    });
  }
  static displayName = 'DropdownScrollContainer';
}

// Exported constants with meaningful names
export const gl = DropdownScrollContainer;
export const Cf = ConnectedPointingDropdown;
export const it = DropdownType;
export const Jz = PointingDropdown;
export const UV = getDropdownTypeProps;