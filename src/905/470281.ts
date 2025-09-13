import type { ReactNode } from 'react';
import { createContext, forwardRef, useContext, useImperativeHandle, useLayoutEffect, useRef } from 'react';
import { jsx } from 'react/jsx-runtime';
import { getBackgroundColor, getBorderColor } from '../905/499018';
import { isNullish } from '../figma_app/95419';

// Default style constants
const DEFAULT_CORNER_RADIUS = {
  cornerRadius: 0
};
const DEFAULT_STROKE = {
  strokeColor: 'transparent',
  strokeWidth: 0
};
const DEFAULT_SIZE = {
  width: 'fill-parent',
  height: 'fill-parent'
};
/**
 * Maps alignment values to CSS flex alignment properties
 */
type AlignmentValue = 'center' | 'end' | 'start' | 'baseline' | 'space-between' | 'stretch';
type CssAlignmentValue = 'center' | 'flex-end' | 'flex-start' | 'baseline' | 'space-between' | 'stretch';
function mapAlignmentToFlexValue(alignment: AlignmentValue): CssAlignmentValue {
  switch (alignment) {
    case 'center':
      return 'center';
    case 'end':
      return 'flex-end';
    case 'start':
      return 'flex-start';
    case 'baseline':
      return 'baseline';
    case 'space-between':
      return 'space-between';
    case 'stretch':
      return 'stretch';
  }
}
// CSS class for elements that should ignore spacing
const IGNORE_SPACING_CLASS = 'autolayout--ignoreSpacing--Qyi-n';

// Context to track nesting level for alternating styles
const NestingLevelContext = createContext(0);
/**
 * Props for the AutoLayout component
 */
type Padding = number | {
  top?: number;
  right?: number;
  bottom?: number;
  left?: number;
  vertical?: number;
  horizontal?: number;
};
type StrokeWidth = number | {
  top?: number;
  right?: number;
  bottom?: number;
  left?: number;
};
type CornerRadius = number | {
  topLeft?: number;
  topRight?: number;
  bottomRight?: number;
  bottomLeft?: number;
};
type Direction = 'horizontal' | 'vertical';
type SizeValue = number | 'fill-parent' | 'hug-contents' | string;
type SpacingValue = number | 'auto' | string;
interface AutoLayoutProps {
  direction?: Direction;
  padding?: Padding;
  spacing?: SpacingValue;
  width?: SizeValue;
  height?: SizeValue;
  cornerRadius?: CornerRadius;
  strokeColor?: string;
  strokeWidth?: StrokeWidth;
  backgroundColor?: string;
  horizontalAlignItems?: AlignmentValue;
  verticalAlignItems?: AlignmentValue;
  dataTestId?: string;
  children?: ReactNode;
}

/**
 * AutoLayout component that provides flexbox-based layout with Figma-like API
 */
export const AutoLayout = forwardRef<HTMLDivElement, AutoLayoutProps>((props, ref) => {
  const nestingLevel = useContext(NestingLevelContext);
  const {
    dataTestId,
    children,
    ...restProps
  } = props;
  const containerRef = useRef<HTMLDivElement>(null);
  useImperativeHandle(ref, () => containerRef.current);
  // Add ignore spacing class to absolutely positioned children
  useLayoutEffect(() => {
    if (!containerRef.current) return;

    // Convert HTMLCollection to Array to make it iterable
    Array.from(containerRef.current.children).forEach(child => {
      if (window.getComputedStyle(child).position === 'absolute') {
        child.classList.add(IGNORE_SPACING_CLASS);
      }
    });
  }, []);
  // Calculate styles based on props and nesting level
  const {
    usesSpacing,
    style
  } = function (props, nestingLevel) {
    const {
      cornerRadius,
      padding,
      width,
      height,
      direction,
      spacing,
      verticalAlignItems,
      horizontalAlignItems,
      backgroundColor
    } = props;
    const computedStyle: Record<string, any> = {};
    // Apply stroke styles if needed
    Object.assign(computedStyle, function (props) {
      const {
        strokeColor,
        strokeWidth
      } = props;
      const strokeStyles: Record<string, any> = {};
      const hasStroke = strokeWidth.top !== 0 || strokeWidth.right !== 0 || strokeWidth.bottom !== 0 || strokeWidth.left !== 0;
      if (hasStroke) {
        strokeStyles.borderWidth = `${strokeWidth.top}px ${strokeWidth.right}px ${strokeWidth.bottom}px ${strokeWidth.left}px`;
        strokeStyles.borderStyle = 'solid';
        strokeStyles.borderColor = getBorderColor(strokeColor);
      }
      return strokeStyles;
    }(props));

    // Set box sizing
    computedStyle.boxSizing = 'border-box';
    // Apply border radius if any corner has a non-zero value
    if (cornerRadius.some(radius => radius !== 0)) {
      computedStyle.borderRadius = cornerRadius.map(radius => `${radius}px`).join(' ');
    }
    // Apply padding if any side has a non-zero value
    const hasPadding = padding.top !== 0 || padding.right !== 0 || padding.bottom !== 0 || padding.left !== 0;
    if (hasPadding) {
      computedStyle.padding = `${padding.top}px ${padding.right}px ${padding.bottom}px ${padding.left}px`;
    }
    // Apply width based on type
    if (typeof width === 'number') {
      computedStyle.width = width;
      computedStyle.minWidth = width;
    } else if (width === 'fill-parent') {
      computedStyle.width = '100%';
    } else if (width === 'hug-contents') {
      computedStyle.width = 'max-content';
    } else if (typeof width === 'string' && width.endsWith('%')) {
      computedStyle.width = width;
    }
    // Apply height based on type
    if (typeof height === 'number') {
      computedStyle.height = height;
      computedStyle.minHeight = height;
    } else if (height === 'fill-parent') {
      computedStyle.height = '100%';
    } else if (height === 'hug-contents') {
      computedStyle.height = 'max-content';
    } else if (typeof height === 'string' && height.endsWith('%')) {
      computedStyle.height = height;
    }
    // Apply background color if specified
    if (backgroundColor) {
      computedStyle.backgroundColor = getBackgroundColor(backgroundColor);
    }
    // Set flex display properties
    computedStyle.display = 'flex';
    computedStyle.flexDirection = direction === 'vertical' ? 'column' : 'row';
    // Set alignment based on direction
    if (direction === 'horizontal') {
      computedStyle.justifyContent = mapAlignmentToFlexValue(horizontalAlignItems);
      computedStyle.alignItems = mapAlignmentToFlexValue(verticalAlignItems);
    } else if (direction === 'vertical') {
      computedStyle.justifyContent = mapAlignmentToFlexValue(verticalAlignItems);
      computedStyle.alignItems = mapAlignmentToFlexValue(horizontalAlignItems);
    }
    // Handle spacing between items
    let usesCustomSpacing = false;
    let horizontalSpacing = '0px';
    let verticalSpacing = '0px';
    if (spacing === 'auto') {
      // Auto spacing uses space-between
      computedStyle.justifyContent = 'space-between';
    } else {
      // Custom spacing
      let spacingValue;
      usesCustomSpacing = true;

      // Convert spacing to CSS value
      spacingValue = typeof spacing === 'number' ? `${spacing}px` : spacing;

      // Apply spacing based on direction
      if (direction === 'horizontal') {
        horizontalSpacing = spacingValue;
      } else {
        verticalSpacing = spacingValue;
      }

      // Apply CSS variables based on nesting level (even/odd)
      if (nestingLevel % 2 === 0) {
        computedStyle['--autolayout-spacing-horizontal-even'] = horizontalSpacing;
        computedStyle['--autolayout-spacing-vertical-even'] = verticalSpacing;
      } else {
        computedStyle['--autolayout-spacing-horizontal-odd'] = horizontalSpacing;
        computedStyle['--autolayout-spacing-vertical-odd'] = verticalSpacing;
      }
    }
    return {
      usesSpacing: usesCustomSpacing,
      style: computedStyle
    };
  }(function normalizeProps(props) {
    let normalizedStrokeWidth;
    let normalizedCornerRadius;
    let normalizedPadding;
    const normalizedProps: Record<string, any> = {};
    // Process each prop and normalize complex values
    for (const key in props) {
      switch (key) {
        case 'padding':
          // Normalize padding to object with top, right, bottom, left
          normalizedPadding = props.padding;
          normalizedProps.padding = isNullish(normalizedPadding) ? {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
          } : typeof normalizedPadding === 'number' ? {
            top: normalizedPadding,
            right: normalizedPadding,
            bottom: normalizedPadding,
            left: normalizedPadding
          } : 'vertical' in normalizedPadding || 'horizontal' in normalizedPadding ? {
            top: normalizedPadding.vertical ?? 0,
            bottom: normalizedPadding.vertical ?? 0,
            right: normalizedPadding.horizontal ?? 0,
            left: normalizedPadding.horizontal ?? 0
          } : {
            top: normalizedPadding.top ?? 0,
            right: normalizedPadding.right ?? 0,
            bottom: normalizedPadding.bottom ?? 0,
            left: normalizedPadding.left ?? 0
          };
          break;
        case 'strokeWidth':
          // Normalize strokeWidth to object with top, right, bottom, left
          normalizedStrokeWidth = props.strokeWidth;
          normalizedProps.strokeWidth = isNullish(normalizedStrokeWidth) ? {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
          } : typeof normalizedStrokeWidth === 'number' ? {
            top: normalizedStrokeWidth,
            right: normalizedStrokeWidth,
            bottom: normalizedStrokeWidth,
            left: normalizedStrokeWidth
          } : {
            top: normalizedStrokeWidth.top ?? 0,
            right: normalizedStrokeWidth.right ?? 0,
            bottom: normalizedStrokeWidth.bottom ?? 0,
            left: normalizedStrokeWidth.left ?? 0
          };
          break;
        case 'cornerRadius':
          // Normalize cornerRadius to array [topLeft, topRight, bottomRight, bottomLeft]
          normalizedCornerRadius = props.cornerRadius;
          normalizedProps.cornerRadius = isNullish(normalizedCornerRadius) ? [0, 0, 0, 0] : typeof normalizedCornerRadius === 'number' ? [normalizedCornerRadius, normalizedCornerRadius, normalizedCornerRadius, normalizedCornerRadius] : [normalizedCornerRadius.topLeft ?? 0, normalizedCornerRadius.topRight ?? 0, normalizedCornerRadius.bottomRight ?? 0, normalizedCornerRadius.bottomLeft ?? 0];
          break;
        default:
          // Pass through other props unchanged
          normalizedProps[key] = props[key];
      }
    }
    return normalizedProps;
  }({
    // Merge default props with user props
    ...{
      ...DEFAULT_CORNER_RADIUS,
      ...DEFAULT_STROKE,
      ...DEFAULT_SIZE,
      ...function getDefaultLayoutProps(props) {
        // Determine default direction
        const direction = props.direction ?? 'horizontal';
        return {
          direction,
          spacing: 8,
          padding: 0,
          horizontalAlignItems: 'start',
          verticalAlignItems: direction === 'horizontal' ? 'center' : 'start'
        };
      }(restProps),
      backgroundColor: 'transparent',
      dataTestId: ''
    },
    ...restProps
  }), nestingLevel);
  // Determine container class based on nesting level and spacing
  const containerClass = usesSpacing ? nestingLevel % 2 === 0 ? 'autolayout--containerEven--6FZdS' : 'autolayout--containerOdd--Rpg-5' : undefined;
  return jsx(NestingLevelContext.Provider, {
    value: nestingLevel + 1,
    children: jsx('div', {
      'ref': containerRef,
      'className': containerClass,
      style,
      children,
      'data-testid': dataTestId
    })
  });
});
/**
 * Props for the Spacer component
 */
interface SpacerProps {
  minSize?: number;
}

/**
 * Spacer component that creates flexible space in an AutoLayout container
 */
export function Spacer({
  minSize = 0
}: SpacerProps) {
  return jsx('div', {
    'aria-hidden': 'true',
    'className': IGNORE_SPACING_CLASS,
    'style': {
      flexGrow: 1,
      flexShrink: 0,
      flexBasis: minSize
    }
  });
}
// Legacy exports
export const $$m0 = AutoLayout;
export const $$h1 = Spacer;

// Named exports
export const Y = AutoLayout;
export const M = Spacer;