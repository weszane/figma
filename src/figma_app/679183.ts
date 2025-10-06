import classNames from 'classnames';
import { Component, useRef } from 'react';
import { connect } from 'react-redux';
import { jsx } from 'react/jsx-runtime';
import { KeyboardFocusManager } from '../905/826900';
import { throwTypeError } from '../figma_app/465776';

// Symbol for special visibility behavior - run callback even when not visible
export const NOT_VISIBLE_RUN_ANYWAY = Symbol('NotVisibleRunAnyway');

/**
 * Class for rendering cached subtree based on visibility.
 * Original class: $$u0
 */
export class CachedSubtreeRenderer {
  _callback: (...args: any[]) => any;
  _previousValue: any;
  constructor(callback: (...args: any[]) => any) {
    this._callback = callback;
    this._previousValue = null;
  }

  /**
   * Renders cached subtree or array of subtrees.
   * @param params - Render parameters
   */
  render({
    isVisible,
    className,
    displayAs,
    valueArgs = []
  }: {
    isVisible: boolean | symbol;
    className?: string;
    displayAs?: 'block' | 'contents';
    valueArgs?: any[];
  }) {
    // Update cached value if visible or special symbol
    const shouldUpdate = isVisible === true || isVisible === NOT_VISIBLE_RUN_ANYWAY;
    const value = shouldUpdate ? this._previousValue = this._callback(...valueArgs) : this._previousValue;
    const visible = isVisible === true;
    if (Array.isArray(value)) {
      return value.map((child, idx) => child && jsx(CachedSubtreeComponent, {
        isVisible: visible,
        className,
        displayAs,
        children: child
      }, child.key ?? idx));
    }
    return value && jsx(CachedSubtreeComponent, {
      isVisible: visible,
      className,
      displayAs,
      children: value
    }, value.key ?? undefined);
  }
}

/**
 * Renders a cached subtree using a ref and children callback.
 * Original function: $$p2
 */
export function useCachedSubtree(props: {
  isVisible: boolean;
  children: () => React.ReactNode;
}) {
  const {
    isVisible,
    children
  } = props;
  const ref = useRef<React.ReactNode>(null);
  const subtree = isVisible === true ? ref.current = children() : ref.current;
  return subtree && jsx(CachedSubtreeComponent, {
    isVisible: isVisible === true,
    children: subtree
  });
}

/**
 * Component for caching subtree content based on visibility.
 * Manages focus/blur behavior when visibility changes.
 */
class CachedSubtreeComponent extends Component<{
  isVisible: boolean;
  className?: string;
  displayAs?: 'block' | 'contents';
  children: React.ReactNode;
}> {
  el: HTMLElement | null = null;
  constructor(props: any) {
    super(props);
    this.ref = this.ref.bind(this);
  }
  ref(el: HTMLElement | null) {
    this.el = el;
  }
  componentDidUpdate(prevProps: {
    isVisible: boolean;
  }) {
    if (this.el) {
      // Focus subtree when becoming visible
      if (!prevProps.isVisible && this.props.isVisible) {
        KeyboardFocusManager.focusSubtreeIfNecessary(this.el);
      }
      // Blur subtree when becoming hidden
      if (prevProps.isVisible && !this.props.isVisible) {
        KeyboardFocusManager.blurSubtreeIfNecessary(this.el);
      }
    }
  }
  getClassNameForDisplayAs() {
    const {
      displayAs = 'contents'
    } = this.props;
    switch (displayAs) {
      case 'block':
        return '';
      case 'contents':
        return 'displayContents';
      default:
        throwTypeError(displayAs);
    }
  }

  /**
   * Renders the component.
   * Original method: render
   */
  render() {
    const {
      isVisible,
      className,
      children
    } = this.props;
    const combinedClassName = classNames(className || 'cachedSubtree', this.getClassNameForDisplayAs());
    return jsx('div', {
      ref: this.ref,
      className: combinedClassName,
      style: {
        display: isVisible ? '' : 'none'
      },
      children
    });
  }
  static defaultProps = {
    displayAs: 'contents'
  };
  static displayName = 'CachedSubtreeComponent';
}
connect(undefined, e => ({
  dispatch: e
}));
export const H4 = CachedSubtreeRenderer;
export const Ud = NOT_VISIBLE_RUN_ANYWAY;
export const VF = useCachedSubtree;
