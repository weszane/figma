import type { FocusEventHandler, MouseEventHandler, ReactNode } from 'react';
import cn from 'classnames';
import { forwardRef, memo, useCallback, useState } from 'react';
import { jsx, jsxs } from 'react/jsx-runtime';
import { KindEnum } from '../905/129884';
import { styleInfoTooltip } from '../905/248978';
import { getBasename } from '../905/309735';
import { RecordableButton } from '../905/511649';
import { iL, jl, zi } from '../905/824449';
import { useClickHandler } from '../905/911623';
import { gray300Color } from '../figma_app/728075';
/**
 * Props for the StyleIconButton component.
 * Using loose types for dsStyle and size to maintain compatibility with existing code.
 */
interface StyleIconButtonProps {
  dsStyle: any;
  recordingKey?: string;
  isSelected?: boolean;
  isFauxFocused?: boolean;
  size?: any;
  onClick?: MouseEventHandler<HTMLElement>;
  onDoubleClick?: MouseEventHandler<HTMLElement>;
  onContextMenu?: MouseEventHandler<HTMLElement>;
  onMouseEnter?: MouseEventHandler<HTMLElement>;
  onMouseMove?: MouseEventHandler<HTMLElement>;
  onMouseLeave?: MouseEventHandler<HTMLElement>;
  onFocus?: FocusEventHandler<HTMLElement>;
}

/**
 * Props for the StyleRowButton component.
 */
interface StyleRowButtonProps {
  children?: ReactNode;
  dsStyle: {
    description?: string;
    name?: string;
  } | any;
  recordingKey?: string;
  isSelected?: boolean;
  isFauxFocused?: boolean;
  shouldShowTooltip?: boolean;
  onClick?: MouseEventHandler<HTMLElement>;
  onDoubleClick?: MouseEventHandler<HTMLElement>;
  onContextMenu?: MouseEventHandler<HTMLElement>;
  onMouseEnter?: MouseEventHandler<HTMLElement>;
  onMouseMove?: MouseEventHandler<HTMLElement>;
  onMouseLeave?: MouseEventHandler<HTMLElement>;
  onFocus?: FocusEventHandler<HTMLElement>;
}
export const StyleIconButton = memo(forwardRef<HTMLDivElement, StyleIconButtonProps>(({
  dsStyle,
  recordingKey,
  isSelected = false,
  isFauxFocused = false,
  size: sizeProp,
  onClick,
  onDoubleClick,
  onContextMenu,
  onMouseEnter,
  onMouseMove,
  onMouseLeave,
  onFocus
}, ref) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const handleMouseEnter = useCallback((event: React.MouseEvent<HTMLElement>) => {
    setIsHovered(true);
    onMouseEnter?.(event);
  }, [onMouseEnter]);
  const {
    onMouseDown,
    onClick: handleClick,
    onMouseUp,
    onMouseLeave: handleMouseLeave
  } = useClickHandler({
    onClick,
    onMouseLeave: useCallback((event: React.MouseEvent<HTMLElement>) => {
      setIsHovered(false);
      onMouseLeave?.(event);
    }, [onMouseLeave])
  });
  const handleFocus = useCallback((event: React.FocusEvent<HTMLElement>) => {
    setIsFocused(true);
    onFocus?.(event);
  }, [onFocus]);
  return jsxs(RecordableButton, {
    className: 'style_icon_button--button--Cf7v2',
    forwardedRef: ref,
    onBlur: () => setIsFocused(false),
    onClick: handleClick,
    onContextMenu,
    onDoubleClick,
    onFocus: handleFocus,
    onMouseDown,
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
    onMouseMove,
    onMouseUp,
    recordingKey,
    children: [isSelected && jsx(jl, {
      color: '#0d99ff'
    }), !isSelected && !!onClick && jsx('div', {
      className: isFauxFocused ? undefined : 'style_icon_button--focusCircle--pHmuX',
      children: jsx(jl, {
        color: gray300Color
      })
    }), jsx(zi, {
      dsStyle,
      size: sizeProp,
      disableOutline: isSelected || isHovered || isFocused || isFauxFocused
    })]
  });
}));
export const StyleRowButton = forwardRef<HTMLDivElement, StyleRowButtonProps>(({
  children,
  dsStyle,
  recordingKey,
  isSelected = false,
  isFauxFocused = false,
  shouldShowTooltip = false,
  onClick,
  onDoubleClick,
  onContextMenu,
  onMouseEnter,
  onMouseMove,
  onMouseLeave,
  onFocus
}, ref) => {
  const {
    onMouseDown,
    onClick: handleClick,
    onMouseUp,
    onMouseLeave: handleMouseLeave
  } = useClickHandler({
    onClick,
    onMouseLeave
  });
  return jsxs(RecordableButton, {
    'className': cn('style_icon_button--rowButton--dTT9X', {
      'style_icon_button--selected--6KJiJ': isSelected,
      'style_icon_button--fauxFocused--LWkh-': isFauxFocused
    }),
    'data-tooltip': shouldShowTooltip ? styleInfoTooltip : undefined,
    'data-tooltip-style-description': dsStyle.description,
    'data-tooltip-style-name': getBasename(dsStyle.name || ''),
    'data-tooltip-type': KindEnum.SPECIAL,
    'forwardedRef': ref,
    'onClick': handleClick,
    'onContextMenu': onContextMenu,
    'onDoubleClick': onDoubleClick,
    'onFocus': onFocus,
    onMouseDown,
    'onMouseEnter': onMouseEnter,
    'onMouseLeave': handleMouseLeave,
    'onMouseMove': onMouseMove,
    onMouseUp,
    'recordingKey': recordingKey,
    'children': [jsx('div', {
      className: 'style_icon_button--rowButtonIcon--xZQ-g',
      children: jsx(zi, {
        dsStyle,
        size: iL.Standard,
        disableTooltip: true
      })
    }), children]
  });
});
export const h = StyleIconButton;
export const A = StyleRowButton;